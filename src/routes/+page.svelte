<script>
	import Jokecard from '$lib/components/jokecard.svelte';
	let item;
	let selected = 'Any';
	let jokeCategories = ['Any', 'Programming', 'Misc', 'Dark', 'Pun', 'Spooky', 'Christmas'];
	let otherLanguages = ['fr'];
	let contains = '';
    

	// create a fetch request external api
	async function fetchData() {
		try {
			const response = await fetch(
				`https://v2.jokeapi.dev/joke/${selected}?blacklistFlags=racist,sexist,explicit&contains=${contains}`
			);
			if (!response.ok) {
				throw new Error('fetch from source failed');
			}
            // status codes should be handled
			item = await response.json();
            contains = "";
		} catch (error) {
			console.log(error.message);
		}
	}
</script>

<main>
	<div class="container">
		<input bind:value={contains} placeholder="contains" />
		<select bind:value={selected}>
			{#each jokeCategories as jokeCategory}
				<option value={jokeCategory}>{jokeCategory}</option>
			{/each}
		</select>
		<p>For a Random Joke</p>
		<button on:click={fetchData}>Click Here</button>
	</div>
	<div class="card">
		<!-- create a promise resolve statement -->
		{#await item}
			<p>...waiting</p>
		{:then item}
			<Jokecard {...item} />
		{:catch error}
			<p>{error}</p>
		{/await}
	</div>
</main>

<style>
	main {
		margin: auto;
		width: 80%;
	}

	.container {
		padding: 1rem;
		text-align: center;
	}

	.card {
		border-radius: 0.2rem;
		width: 16rem;
		padding: 1rem;
		margin: auto;
		text-align: center;
		background-color: #f3f3f3;
	}
</style>
