<script>
	import { selectedFolder } from '$lib/store.global';
	import { sep } from '@tauri-apps/api/path';
	import { onMount } from 'svelte';
	import { watchImmediate } from 'tauri-plugin-fs-watch-api';

	/** @type {import('./$types').PageData} */
	export let data;

	const eventWatcher = (event) => {
		console.log(event);
	};

	onMount(async () => {
		const unwatch = await watchImmediate(`${$selectedFolder}${sep}${data.skin}`, eventWatcher, {
			recursive: true
		});

		return () => {
			unwatch();
		};
	});
</script>
