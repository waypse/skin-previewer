// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn is_dir(path: String) -> Result<bool, String> {
    Ok(std::path::Path::new(&path).is_dir())
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![is_dir])
        .plugin(tauri_plugin_fs_watch::init())
        .run(tauri::generate_context!())
        .expect("error while running Tauri application");
}
