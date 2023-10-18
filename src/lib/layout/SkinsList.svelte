<script>
	import { goto } from '$app/navigation';
	import { selectedFolder, skins } from '$lib/store.global';
	import { sep } from '@tauri-apps/api/path';

	const openSkin = (skin) => () => {
		goto(`/previewer/${skin.name}`);
	};
</script>

<div class="skins-list">
	<div class="title">
		Skin Folder: {$selectedFolder.split(sep).at(-1)}
	</div>
	{#each $skins as skin}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="skin-item" on:click={openSkin(skin)}>
			{skin.name}
		</div>
	{/each}
</div>

<style>
	.skins-list {
		height: 100%;
		width: clamp(200px, 30vw, 300px);
		border-radius: 10px;
		background: #605e5f;
		padding: 1.5rem 0.5rem 0.5rem;
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		overflow: auto;
		user-select: none;
		cursor: pointer;
	}
	.skin-item {
		border-radius: 10px;
		background: #d9d9d9;
		font-size: 20px;
		font-weight: 500;
		padding: 0.5rem 1rem;
		box-sizing: border-box;
		width: 100%;
		color: #141414;
		transition: 0.2s ease;
	}
	.skin-item:hover {
		background: #c4c4c4;
	}
	.title {
		position: absolute;
		top: -5px;
		left: 10px;
		width: calc(100% - 30px);
		border-radius: 4px;
		background: #313131;
		box-sizing: border-box;
		font-size: 12px;
		font-weight: 400;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		padding: 0 0.2rem;
		box-sizing: border-box;
	}
</style>
