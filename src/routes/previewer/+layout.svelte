<script>
	import SkinsList from '$lib/layout/SkinsList.svelte';
</script>

<div class="main-content">
	<SkinsList />
	<div class="page">
		<slot />
	</div>
</div>

<style>
	.main-content {
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		padding: 1rem;
		display: grid;
		grid-template-columns: min-content 3fr;
	}
	.page {
		height: 100%;
		width: 100%;
		display: grid;
	}
</style>
