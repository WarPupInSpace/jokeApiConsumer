<body>
	<header>
		<h1>A Little &#x1F604;</h1>
	</header>

	<slot />
	<div class="footer">&copy; 2023 No Company</div>
</body>

<style>
	:global(body > *) {
		margin: 0;
	}

	:global(h1, h2, h3, h4, h5, h6, p) {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		margin: 0;
	}

	header {
		margin: 0;
		text-align: center;
		padding: 1rem;
		height: 3rem;
		color: white;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}

	body {
		margin: 0;
		background-color: #74bce4;
		width: 100%;
		height: 100vh;
	}

	.footer {
		background-color: #333; /* Dark background color */
		color: #fff; /* Text color for better contrast */
		text-align: center;
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
