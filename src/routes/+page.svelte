<script>
	import { open } from '@tauri-apps/api/dialog';
	import { readDir } from '@tauri-apps/api/fs';
	import { invoke } from '@tauri-apps/api/tauri';
	import { selectedFolder, skins } from '$lib/store.global';
	import folder_icon from '$lib/assets/folder.svg';
	import { slide } from 'svelte/transition';
	import { goto } from '$app/navigation';

	let error = '';

	const getSkinsFolder = async () => {
		const selectedDir = await open({
			directory: true,
			multiple: false
		});

		// If the user cancels the dialog
		if (!selectedDir) return;

		// If the user selects a directory
		if (typeof selectedDir === 'string') {
			$selectedFolder = selectedDir;
			const skinsPaths = await readDir(selectedDir);
			await Promise.all(
				skinsPaths.map(async (skin) => {
					// TODO: Check if the directory contains a valid skin
					const isDir = await invoke('is_dir', { path: skin.path });
					if (isDir) $skins.push(skin);
					else console.warn(skin.path + ' is not a directory');
				})
			);

			if ($skins.length === 0) {
				setError('No skins found in this directory');
				return;
			}
			await goto('/previewer');
			return;
		}

		// In case of unexpected behaviour
		setError('Please chose the directory containing your skins');
	};

	const setError = (msg) => {
		error = msg;
		setTimeout(() => {
			error = '';
		}, 5000);
	};
</script>

<div class="container">
	<img src={folder_icon} alt="folder" />
	<p>Import your skins folder</p>
	<button on:click={getSkinsFolder}>Import</button>
	{#if error}
		<p transition:slide>{error}</p>
	{/if}
</div>

<style>
	.container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 1rem;
	}
</style>
