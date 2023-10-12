import { writable } from "svelte/store";


export const skins = writable([]);

export const selectedFolder = writable('');

export const unwatch = writable(()=>{});

