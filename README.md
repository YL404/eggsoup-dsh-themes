# Eggsoup DSH Themes

GitHub: [YL404/eggsoup-dsh-themes](https://github.com/YL404/eggsoup-dsh-themes)

One theme manager plugin for the DSH web UI. It carries fifteen static dark themes and adds a **Themes** page to the **Settings** navigation:

- Vitesse Nyx
- Vitesse Nyx Emerald
- Catppuccin Mocha Nyx
- Lilac Soft Nyx
- Visual Studio Dark Nyx
- Neutral Slate Nyx
- Inkstone Xuanmo Nyx
- Inkstone Canghai Nyx
- Misty Teal Nyx
- Aurora Nyx
- Verdant Soft Nyx
- Fields of the Shire Nyx
- Gruvbox Nyx
- Flexoki Dark Nyx
- OpenChamber Dark Nyx

Selecting a theme installs one `--dsw-*` token-override layer over the active DSH appearance, so the built-in Appearance setting stays authoritative. The Nyx themes are dark-only. The plugin swaps the selected theme's surface stylesheet and stores the selection in browser `localStorage`. Choosing **Reset to default** removes the override layer. Each theme card shows a miniature interface built from the theme's own palette and reuses its real pixel-art backdrop.

The plugin does not import external theme files. The T3 Nyx themes are declared as compact specs in `NYX_SPECS` and expanded via `buildNyxTokens` / `buildNyxCss` in `client.js`.

## Requirements

- DeepSeek Harness `>=0.2.1-rc.5 <0.3.0` (declared in `engines.dsh`)
- The Web GUI: the client half targets `platform: web`

## Install

CLI:

```sh
dsh plugin --profile desktop add eggsoup-dsh-themes
```

GUI: **Plugins → Install**, enter `eggsoup-dsh-themes`, confirm, then reload or restart if the plugin row does not appear.

Uninstall with `dsh plugin --profile desktop remove eggsoup-dsh-themes`, or remove the bundle from **Plugins**.

## Where state lives

The selected theme id is stored in browser `localStorage` under `eggsoup-dsh-themes:selected`. The plugin makes no network requests and sends no telemetry.

## License

MIT

