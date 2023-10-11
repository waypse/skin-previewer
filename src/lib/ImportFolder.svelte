<script>
  import { open } from "@tauri-apps/api/dialog";
  import { readDir } from "@tauri-apps/api/fs";

  let entries = [];

  const getSkinsFolder = async () => {
    const selectedFolder = await open({
      directory: true,
      multiple: false,
    });

    if (!selectedFolder) return;

    if (typeof selectedFolder === "string") {
      entries = await readDir(selectedFolder);
    }
  };
</script>

<div class="container">
  <img src="/folder.svg" alt="folder" />
  <p>Import your skins folder</p>
  <button on:click={getSkinsFolder}>Import</button>
  <br />
  <div class="list">
    {#each entries as entry}
      <p>{entry.name}</p>
    {/each}
  </div>
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

  .list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
</style>
