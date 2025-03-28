<script>
	import '$lib/css/app.css';
</script>

<main>
	<slot />
</main>

<style>
	:global(body) {
		height: 100vh;
		width: 100vw;
		margin: 0;
	}
	main {
		height: 100vh;
		width: 100vw;
	}
</style>
