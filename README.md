# Eggsoup DSH Themes

One theme manager plugin for the DSH web UI. It carries seven static themes and adds a **Themes** page to the **Settings** navigation:

- Vitesse Nyx
- Vitesse Nyx Emerald
- Catppuccin Mocha Nyx
- Inkstone Xuanmo Nyx
- Aurora Nyx
- Gruvbox Nyx
- Ocean

Selecting a theme installs one `--dsw-*` token-override layer over the active DSH appearance, so the built-in Appearance setting stays authoritative and switching light/dark keeps working. The Nyx themes are dark-only; Ocean also provides a light palette. The plugin swaps the selected theme's surface stylesheet and stores the selection in browser `localStorage`. Choosing **DSH default** removes the override layer. Each theme card shows a miniature interface built from the theme's own palette, and the Nyx cards reuse their real pixel-art backdrop.

The plugin does not import external theme files. The original three themes sit in `BASE_THEMES`, while ported T3 Nyx themes are declared as compact specs in `NYX_SPECS` and expanded via `buildNyxTokens` / `buildNyxCss` in `client.js`.
