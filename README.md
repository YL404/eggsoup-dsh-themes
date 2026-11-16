# Eggsoup DSH Themes

GitHub: [YL404/eggsoup-dsh-themes](https://github.com/YL404/eggsoup-dsh-themes)

One theme manager plugin for the DSH web UI. It carries sixteen static themes and adds a **Themes** page to the **Settings** navigation:

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
- Ocean

Selecting a theme installs one `--dsw-*` token-override layer over the active DSH appearance, so the built-in Appearance setting stays authoritative and switching light/dark keeps working. The Nyx themes are dark-only; Ocean also provides a light palette. The plugin swaps the selected theme's surface stylesheet and stores the selection in browser `localStorage`. Choosing **DSH default** removes the override layer. Each theme card shows a miniature interface built from the theme's own palette, and the Nyx cards reuse their real pixel-art backdrop.

The plugin does not import external theme files. Ocean sits in `BASE_THEMES`, while the T3 Nyx themes are declared as compact specs in `NYX_SPECS` and expanded via `buildNyxTokens` / `buildNyxCss` in `client.js`.
