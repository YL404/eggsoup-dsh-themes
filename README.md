# Eggsoup DSH Themes

One theme manager plugin for the DSH web UI. It carries three static themes and adds a **Themes** page to the **Settings** navigation:

- Ocean
- Vitesse Nyx
- Vitesse Nyx Emerald

Selecting a theme installs one `--dsw-*` token-override layer over the active DSH appearance, so the built-in Appearance setting stays authoritative and switching light/dark keeps working. The Vitesse themes are dark-only; Ocean also provides a light palette. The plugin swaps the selected theme's surface stylesheet and stores the selection in browser `localStorage`. Choosing **DSH default** removes the override layer. Each theme card shows a miniature interface built from the theme's own palette, and the Vitesse cards reuse their real pixel-art backdrop.

The plugin does not import external theme files. Each theme is a token map plus a dark-mode CSS string in `client.js`; to add a theme, add its definition to `THEMES` and reload the plugin.
