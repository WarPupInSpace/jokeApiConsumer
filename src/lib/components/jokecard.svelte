<script>

	export let setup;
	export let delivery;
	export let type;
	export let joke;

	// error and error message
	export let error;
	export let message;

	let cardFrontHidden = false;
	let cardBackHidden = true;

	const onClickToggleCardView = () => {
		cardFrontHidden = !cardFrontHidden;
		cardBackHidden = !cardBackHidden;
	};
</script>

{#if type == 'twopart'}
	<div class:cardFrontHidden>
		<p>{setup}</p>
		<button on:click={onClickToggleCardView}>Find out</button>
	</div>
	<div class:cardBackHidden>
		<p>{delivery}</p>
		<button on:click={onClickToggleCardView}>Back</button>
	</div>
{/if}

{#if type == 'single'}
	<div class:cardFrontHidden>
		<p>{joke}</p>
	</div>
{/if}

{#if error}
	<div>
		<p>{message}</p>
	</div>
{/if}

<style>
	.cardBackHidden {
		display: none;
	}

	.cardFrontHidden {
		display: none;
	}
</style>
