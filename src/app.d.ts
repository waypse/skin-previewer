// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface FileEntry {
		path: string;
		/**
		 * Name of the directory/file
		 * can be null if the path terminates with `..`
		 */
		name?: string;
		/** Children of this entry if it's a directory; null otherwise */
		children?: FileEntry[];
	}
}

export {};
