/**
 * Eggsoup DSH Themes: one client plugin that carries a static set of themes
 * and contributes a Themes page to the Settings navigation. Selecting a theme
 * installs one token-override layer over the active DSH appearance, so the
 * built-in light/dark preference stays authoritative and third-party ids never
 * need DSH's non-persistent theme preference.
 */
window.__ModuleLoader__.load({
  id: 'eggsoup-dsh-themes',
  factory(require) {
    const React = require('react');
    const h = React.createElement;
    const BASE_THEMES = [
  {
    "id": "eggsoup-vitesse-nyx",
    "name": "Vitesse Nyx",
    "darkOnly": true,
    "tokens": {
      "--dsw-alias-bg-base": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#121212"
      },
      "--dsw-alias-bg-document-preview": {
        "light": "var(--dsw-static-neutral-bluish-100)",
        "dark": "#121212"
      },
      "--dsw-alias-bg-document-selection": {
        "light": "color-mix(in srgb, var(--dsw-static-blue-500) 40%, transparent)",
        "dark": "rgba(77, 147, 117, 0.35)"
      },
      "--dsw-alias-bg-layer-1": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-bg-layer-2": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#1e1e1e"
      },
      "--dsw-alias-bg-layer-3": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#282828"
      },
      "--dsw-alias-bg-mask-1": {
        "light": "rgba(0, 0, 0, 0.24)",
        "dark": "rgba(0, 0, 0, 0.5)"
      },
      "--dsw-alias-bg-mask-2": {
        "light": "rgba(0, 0, 0, 0.12)",
        "dark": "rgba(0, 0, 0, 0.2)"
      },
      "--dsw-alias-bg-mask-3": {
        "light": "rgba(0, 0, 0, 0.48)",
        "dark": "rgba(0, 0, 0, 0.48)"
      },
      "--dsw-alias-bg-mask-drop": {
        "light": "rgba(255, 255, 255, 0.7)",
        "dark": "rgba(39, 39, 48, 0.7)"
      },
      "--dsw-alias-bg-mask-photo": {
        "light": "rgba(0, 0, 0, 0.88)",
        "dark": "rgba(0, 0, 0, 0.88)"
      },
      "--dsw-alias-bg-module-platform": {
        "light": "var(--dsw-static-neutral-bluish-60)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-bg-multi-select": {
        "light": "var(--dsw-static-neutral-bluish-60)",
        "dark": "#272727"
      },
      "--dsw-alias-bg-overlay": {
        "light": "var(--dsw-static-neutral-bluish-150)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-bg-skeleton": {
        "light": "rgba(0, 0, 0, 0.04)",
        "dark": "rgba(221, 217, 205, 0.08)"
      },
      "--dsw-alias-border-inverted": {
        "light": "rgba(0, 0, 0, 0)",
        "dark": "rgba(255, 255, 255, 0.06)"
      },
      "--dsw-alias-border-inverted2": {
        "light": "rgba(0, 0, 0, 0)",
        "dark": "rgba(255, 255, 255, 0.08)"
      },
      "--dsw-alias-border-l1": {
        "light": "rgba(0, 0, 0, 0.04)",
        "dark": "#242424"
      },
      "--dsw-alias-border-l2": {
        "light": "rgba(0, 0, 0, 0.1)",
        "dark": "#2a2a2a"
      },
      "--dsw-alias-border-l2-darkmode-thin": {
        "light": "rgba(0, 0, 0, 0.1)",
        "dark": "#242424"
      },
      "--dsw-alias-border-l3": {
        "light": "rgba(0, 0, 0, 0.12)",
        "dark": "#323232"
      },
      "--dsw-alias-border-l4": {
        "light": "rgba(0, 0, 0, 0.16)",
        "dark": "#3c3c3c"
      },
      "--dsw-alias-border-selected": {
        "light": "var(--dsw-static-neutral-bluish-400)",
        "dark": "#4d9375"
      },
      "--dsw-alias-brand-primary": {
        "light": "var(--dsw-static-neutral-bluish-1000)",
        "dark": "#4d9375"
      },
      "--dsw-alias-brand-primary-invert": {
        "light": "var(--dsw-static-neutral-bluish-1000)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-brand-primary-new-colorprimary-new-color": {
        "light": "rgb(65, 118, 230)",
        "dark": "#6394bf"
      },
      "--dsw-alias-brand-text": {
        "light": "var(--dsw-static-neutral-bluish-1000)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-button-contrast-fill": {
        "light": "var(--dsw-static-neutral-bluish-700)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-button-elevated-fill": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#1e1e1e"
      },
      "--dsw-alias-button-floating-fill": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-button-floating-hover": {
        "light": "var(--dsw-static-neutral-bluish-75)",
        "dark": "#282828"
      },
      "--dsw-alias-button-ghost-active-border": {
        "light": "var(--dsw-static-neutral-bluish-500)",
        "dark": "#323232"
      },
      "--dsw-alias-button-ghost-active-fill": {
        "light": "var(--dsw-static-neutral-bluish-100)",
        "dark": "#282828"
      },
      "--dsw-alias-button-ghost-active-hover": {
        "light": "var(--dsw-static-neutral-bluish-150)",
        "dark": "#2e2e2e"
      },
      "--dsw-alias-button-info-fill": {
        "light": "var(--dsw-static-deepseek-500)",
        "dark": "#4d9375"
      },
      "--dsw-alias-button-info-hover": {
        "light": "var(--dsw-static-deepseek-400)",
        "dark": "#5aa384"
      },
      "--dsw-alias-button-primary-dimmed": {
        "light": "var(--dsw-static-neutral-bluish-100)",
        "dark": "rgba(77, 147, 117, 0.20)"
      },
      "--dsw-alias-button-primary-fill": {
        "light": "var(--dsw-alias-brand-primary)",
        "dark": "#4d9375"
      },
      "--dsw-alias-button-primary-hover": {
        "light": "var(--dsw-static-neutral-bluish-750)",
        "dark": "#5aa384"
      },
      "--dsw-alias-button-tool-bar-fill": {
        "light": "rgba(84, 85, 87, 0.5)",
        "dark": "rgba(40, 40, 40, 0.5)"
      },
      "--dsw-alias-button-tool-bar-fill-invisible": {
        "light": "rgba(31, 31, 31, 0.36)",
        "dark": "rgba(27, 27, 27, 0.36)"
      },
      "--dsw-alias-button-tool-bar-hover": {
        "light": "rgba(84, 85, 87, 0.6)",
        "dark": "rgba(40, 40, 40, 0.6)"
      },
      "--dsw-alias-card-fill": {
        "light": "var(--dsw-static-neutral-50)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-card-fill-hover": {
        "light": "var(--dsw-static-neutral-100)",
        "dark": "#1e1e1e"
      },
      "--dsw-alias-card-tile-fill": {
        "light": "color-mix(in srgb, var(--dsw-static-neutral-00) 50%, transparent)",
        "dark": "rgba(221, 217, 205, 0.05)"
      },
      "--dsw-alias-chart-messages": {
        "light": "var(--dsw-static-blue-450)",
        "dark": "#6394bf"
      },
      "--dsw-alias-chart-system": {
        "light": "var(--dsw-static-neutral-bluish-400)",
        "dark": "#878781"
      },
      "--dsw-alias-chart-tools": {
        "light": "var(--dsw-static-violet-400)",
        "dark": "#bd976a"
      },
      "--dsw-alias-code-diff-added": {
        "light": "var(--dsw-static-green-500-a08)",
        "dark": "rgba(77, 147, 117, 0.14)"
      },
      "--dsw-alias-code-diff-deleted": {
        "light": "var(--dsw-static-red-600-a08)",
        "dark": "rgba(203, 118, 118, 0.14)"
      },
      "--dsw-alias-file-diff-added-bg": {
        "light": "rgb(230, 244, 231)",
        "dark": "#16241d"
      },
      "--dsw-alias-file-diff-added-gutter": {
        "light": "rgb(237, 247, 237)",
        "dark": "#101b16"
      },
      "--dsw-alias-file-diff-added-marker": {
        "light": "rgb(1, 162, 65)",
        "dark": "#4d9375"
      },
      "--dsw-alias-file-diff-deleted-bg": {
        "light": "rgb(252, 230, 226)",
        "dark": "#2a1719"
      },
      "--dsw-alias-file-diff-deleted-gutter": {
        "light": "rgb(253, 236, 233)",
        "dark": "#1f1112"
      },
      "--dsw-alias-file-diff-deleted-marker": {
        "light": "rgb(186, 39, 35)",
        "dark": "#cb7676"
      },
      "--dsw-alias-hovercard-bg": {
        "light": "var(--dsw-static-neutral-bluish-850)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-hovercard-label-primary": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-hovercard-label-secondary": {
        "light": "var(--dsw-static-neutral-bluish-300)",
        "dark": "#878781"
      },
      "--dsw-alias-hovercard-label-tertiary": {
        "light": "var(--dsw-static-neutral-bluish-400)",
        "dark": "#90908a"
      },
      "--dsw-alias-hovercard-state-done": {
        "light": "var(--dsw-static-violet-400)",
        "dark": "#b9a8d8"
      },
      "--dsw-alias-hovercard-state-error": {
        "light": "var(--dsw-static-red-400)",
        "dark": "#cb7676"
      },
      "--dsw-alias-illustration-background": {
        "light": "var(--dsw-static-neutral-bluish-55)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-illustration-backing": {
        "light": "var(--dsw-static-neutral-bluish-310)",
        "dark": "#242424"
      },
      "--dsw-alias-illustration-detail": {
        "light": "var(--dsw-static-neutral-bluish-310)",
        "dark": "#4a4a44"
      },
      "--dsw-alias-illustration-inset": {
        "light": "var(--dsw-alias-illustration-surface)",
        "dark": "#242424"
      },
      "--dsw-alias-illustration-shadow": {
        "light": "var(--dsw-alias-illustration-surface)",
        "dark": "#242424"
      },
      "--dsw-alias-illustration-surface": {
        "light": "var(--dsw-static-neutral-bluish-90)",
        "dark": "#2e2e2e"
      },
      "--dsw-alias-interactive-bg-active": {
        "light": "rgba(38, 49, 72, 0.1)",
        "dark": "rgba(221, 217, 205, 0.14)"
      },
      "--dsw-alias-interactive-bg-hover": {
        "light": "rgba(38, 49, 72, 0.06)",
        "dark": "rgba(221, 217, 205, 0.08)"
      },
      "--dsw-alias-interactive-bg-hover-accent": {
        "light": "rgba(38, 49, 72, 0.14)",
        "dark": "rgba(77, 147, 117, 0.24)"
      },
      "--dsw-alias-interactive-bg-hover-danger": {
        "light": "rgba(236, 19, 19, 0.05)",
        "dark": "rgba(203, 118, 118, 0.15)"
      },
      "--dsw-alias-interactive-bg-hover-solid": {
        "light": "var(--dsw-static-neutral-bluish-75)",
        "dark": "#282828"
      },
      "--dsw-alias-json-tree-hover": {
        "light": "rgb(60 64 67 / 4%)",
        "dark": "rgba(221, 217, 205, 0.05)"
      },
      "--dsw-alias-json-tree-icon": {
        "light": "#5f6368",
        "dark": "#878781"
      },
      "--dsw-alias-json-tree-keyword": {
        "light": "#1c00cf",
        "dark": "#6394bf"
      },
      "--dsw-alias-json-tree-number": {
        "light": "#1c00cf",
        "dark": "#6394bf"
      },
      "--dsw-alias-json-tree-property": {
        "light": "#881391",
        "dark": "#4d9375"
      },
      "--dsw-alias-json-tree-punctuation": {
        "light": "#202124",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-json-tree-string": {
        "light": "#c41a16",
        "dark": "#bd976a"
      },
      "--dsw-alias-label-caption": {
        "light": "var(--dsw-static-neutral-bluish-400)",
        "dark": "#90908a"
      },
      "--dsw-alias-label-deep-diving": {
        "light": "color-mix(in srgb, var(--dsw-static-deepseek-500) 70%, var(--dsw-static-blue-950))",
        "dark": "#6394bf"
      },
      "--dsw-alias-label-deep-diving-shimmer": {
        "light": "color-mix(in srgb, var(--dsw-static-deepseek-500) 30%, var(--dsw-static-blue-950))",
        "dark": "#8fb8dd"
      },
      "--dsw-alias-label-dimmed": {
        "light": "var(--dsw-static-neutral-bluish-200)",
        "dark": "#7a7a74"
      },
      "--dsw-alias-label-document-preview": {
        "light": "var(--dsw-static-neutral-bluish-700)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-label-on-color": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#000000"
      },
      "--dsw-alias-label-primary": {
        "light": "var(--dsw-static-neutral-bluish-1000)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-label-primary-bluish": {
        "light": "var(--dsw-static-blue-900)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-label-primary-dimmed": {
        "light": "var(--dsw-static-neutral-bluish-950)",
        "dark": "#c9c4b8"
      },
      "--dsw-alias-label-primary-foreground": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#000000"
      },
      "--dsw-alias-label-primary-inverted": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#121212"
      },
      "--dsw-alias-label-secondary": {
        "light": "var(--dsw-static-neutral-bluish-700)",
        "dark": "#878781"
      },
      "--dsw-alias-label-shimmer": {
        "light": "color-mix(in srgb, var(--dsw-static-neutral-1000) 30%, transparent)",
        "dark": "rgba(255, 255, 255, 0.45)"
      },
      "--dsw-alias-label-tertiary": {
        "light": "var(--dsw-static-neutral-bluish-600)",
        "dark": "#90908a"
      },
      "--dsw-alias-link": {
        "light": "var(--dsw-static-deepseek-500)",
        "dark": "#6394bf"
      },
      "--dsw-alias-markdown-citation": {
        "light": "var(--dsw-static-neutral-bluish-100)",
        "dark": "#2a241e"
      },
      "--dsw-alias-markdown-code-block": {
        "light": "var(--dsw-static-neutral-bluish-50)",
        "dark": "#101010"
      },
      "--dsw-alias-markdown-code-block-banner": {
        "light": "var(--dsw-static-neutral-bluish-50)",
        "dark": "#161616"
      },
      "--dsw-alias-markdown-code-segment-selected": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#2a241e"
      },
      "--dsw-alias-markdown-code-segment-unselected": {
        "light": "var(--dsw-static-neutral-bluish-75)",
        "dark": "#141414"
      },
      "--dsw-alias-markdown-inline-code": {
        "light": "var(--dsw-static-neutral-50)",
        "dark": "rgba(221, 217, 205, 0.08)"
      },
      "--dsw-alias-markdown-placeholder": {
        "light": "var(--dsw-static-neutral-bluish-60)",
        "dark": "#1a1a1a"
      },
      "--dsw-alias-markdown-tag": {
        "light": "var(--dsw-static-neutral-bluish-75)",
        "dark": "#2a241e"
      },
      "--dsw-alias-menu-group-header-fill": {
        "light": "rgba(248, 249, 250, 0.94)",
        "dark": "rgba(13, 11, 8, 0.94)"
      },
      "--dsw-alias-menu-icon": {
        "light": "var(--dsw-static-neutral-bluish-800)",
        "dark": "#90908a"
      },
      "--dsw-alias-scrollbar-bg-l1": {
        "light": "var(--dsw-static-neutral-200)",
        "dark": "#2a2a2a"
      },
      "--dsw-alias-scrollbar-bg-l2": {
        "light": "var(--dsw-static-neutral-200)",
        "dark": "#323232"
      },
      "--dsw-alias-scrollbar-hover-l1": {
        "light": "var(--dsw-static-neutral-300)",
        "dark": "#3a3a3a"
      },
      "--dsw-alias-scrollbar-hover-l2": {
        "light": "var(--dsw-static-neutral-300)",
        "dark": "#424242"
      },
      "--dsw-alias-state-business-primary": {
        "light": "var(--dsw-static-deepseek-500)",
        "dark": "#6394bf"
      },
      "--dsw-alias-state-business-tertiary": {
        "light": "var(--dsw-static-deepseek-100)",
        "dark": "#16303f"
      },
      "--dsw-alias-state-done-primary": {
        "light": "var(--dsw-static-violet-600)",
        "dark": "#b9a8d8"
      },
      "--dsw-alias-state-error-primary": {
        "light": "var(--dsw-static-red-600)",
        "dark": "#cb7676"
      },
      "--dsw-alias-state-error-secondary": {
        "light": "var(--dsw-static-red-400)",
        "dark": "#e08a8a"
      },
      "--dsw-alias-state-idle-primary": {
        "light": "var(--dsw-static-neutral-300)",
        "dark": "#3a3a3a"
      },
      "--dsw-alias-state-success-primary": {
        "light": "var(--dsw-static-green-500)",
        "dark": "#4d9375"
      },
      "--dsw-alias-state-success-secondary": {
        "light": "var(--dsw-static-green-400)",
        "dark": "#6bb392"
      },
      "--dsw-alias-state-success-tertiary": {
        "light": "var(--dsw-static-green-100)",
        "dark": "#18271f"
      },
      "--dsw-alias-state-warn-label": {
        "light": "var(--dsw-static-amber-600)",
        "dark": "#d4976c"
      },
      "--dsw-alias-state-warn-primary": {
        "light": "var(--dsw-static-amber-500)",
        "dark": "#d4976c"
      },
      "--dsw-alias-state-warn-secondary": {
        "light": "var(--dsw-static-amber-400)",
        "dark": "#e0b083"
      },
      "--dsw-alias-state-warn-tertiary": {
        "light": "var(--dsw-static-amber-100)",
        "dark": "#2a1c12"
      },
      "--dsw-alias-switch-thumb": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-toast-action": {
        "light": "var(--dsw-static-deepseek-400)",
        "dark": "#d9bd92"
      },
      "--dsw-alias-toast-bg": {
        "light": "var(--dsw-static-neutral-bluish-800)",
        "dark": "#1e2a24"
      },
      "--dsw-alias-toast-label": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-tooltip-bg": {
        "light": "var(--dsw-static-neutral-bluish-850)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-tooltip-key-bg": {
        "light": "color-mix(in srgb, var(--dsw-alias-tooltip-bg), white 18%)",
        "dark": "#2a2a2a"
      },
      "--dsw-alias-tooltip-label": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-trajectory-accent": {
        "light": "var(--dsw-static-blue-500)",
        "dark": "#4d9375"
      },
      "--dsw-alias-turn-trigger-bg": {
        "light": "var(--dsw-alias-markdown-code-block)",
        "dark": "#161616"
      },
      "--dsw-alias-turn-trigger-bg-hover": {
        "light": "var(--dsw-alias-interactive-bg-hover)",
        "dark": "#1b1b1b"
      },
      "--dsw-focus-ring-color": {
        "light": "#4176E6",
        "dark": "#4d9375"
      },
      "--dsw-menu-surface-fill": {
        "light": "rgba(252, 253, 254, 0.7)",
        "dark": "rgba(13, 11, 8, 0.80)"
      },
      "--dsw-specific-bubble": {
        "light": "var(--dsw-static-deepseek-50)",
        "dark": "#19241e"
      },
      "--dsw-specific-bubble-highlight": {
        "light": "var(--dsw-static-deepseek-200)",
        "dark": "#3a3226"
      },
      "--dsw-specific-file-upload-track": {
        "light": "rgba(0, 0, 0, 0.08)",
        "dark": "rgba(0, 0, 0, 0.08)"
      },
      "--dsw-specific-guide-hero": {
        "light": "var(--dsw-static-neutral-200)",
        "dark": "#242424"
      },
      "--dsw-specific-input-major": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#1b1b1b"
      },
      "--dsw-specific-login-input": {
        "light": "var(--dsw-static-neutral-bluish-50)",
        "dark": "#141414"
      },
      "--dsw-specific-menu": {
        "light": "rgba(248, 249, 250, 0.94)",
        "dark": "rgba(13, 11, 8, 0.90)"
      },
      "--dsw-specific-selector": {
        "light": "var(--dsw-static-neutral-bluish-60)",
        "dark": "#1b1b1b"
      },
      "--dsw-specific-sidebar-fill": {
        "light": "var(--dsw-static-neutral-bluish-50)",
        "dark": "rgba(11, 9, 7, 0.88)"
      },
      "--dsw-specific-sidebar-glass-collapsed-fill": {
        "light": "transparent",
        "dark": "rgba(255, 255, 255, 0.04)"
      },
      "--dsw-specific-sidebar-glass-collapsed-hover": {
        "light": "var(--dsw-alias-interactive-bg-hover)",
        "dark": "rgba(255, 255, 255, 0.08)"
      },
      "--dsw-specific-sidebar-glass-fill": {
        "light": "rgb(255 255 255 / 0.55)",
        "dark": "rgba(255, 255, 255, 0.05)"
      },
      "--dsw-specific-sidebar-glass-hover": {
        "light": "rgb(255 255 255 / 0.3)",
        "dark": "rgba(255, 255, 255, 0.09)"
      },
      "--dsw-specific-sidebar-nav-item-active": {
        "light": "var(--dsw-static-neutral-bluish-100)",
        "dark": "#2a241e"
      },
      "--dsw-specific-sidebar-nav-item-active-accent": {
        "light": "var(--dsw-static-deepseek-100)",
        "dark": "#3a3226"
      },
      "--dsw-specific-sidebar-right-flash": {
        "light": "var(--dsw-alias-brand-primary-new-colorprimary-new-color)",
        "dark": "#f7ecd9"
      },
      "--dsw-specific-sidebar-tint": {
        "light": "color-mix(in srgb, color-mix(in srgb, var(--dsw-specific-sidebar-fill) 97%, rgb(122 155 240)) 40%, transparent)",
        "dark": "transparent"
      },
      "--dsw-specific-sidebar-wash-bottom": {
        "light": "rgb(143 137 184 / 0.09)",
        "dark": "transparent"
      },
      "--dsw-specific-sidebar-wash-bottom-clear": {
        "light": "rgb(143 137 184 / 0)",
        "dark": "transparent"
      },
      "--dsw-specific-sidebar-wash-top": {
        "light": "rgb(122 155 240 / 0.1)",
        "dark": "transparent"
      },
      "--dsw-specific-sidebar-wash-top-clear": {
        "light": "rgb(122 155 240 / 0)",
        "dark": "transparent"
      },
      "--dsw-specific-tip": {
        "light": "var(--dsw-static-neutral-bluish-60)",
        "dark": "#1b1b1b"
      },
      "--shiki-foreground": {
        "light": "var(--dsw-alias-label-primary)",
        "dark": "#ddd9cd"
      },
      "--shiki-background": {
        "light": "var(--dsw-alias-markdown-code-block)",
        "dark": "#101010"
      },
      "--shiki-token-constant": {
        "light": "#1c7ed6",
        "dark": "#6394bf"
      },
      "--shiki-token-string": {
        "light": "#2f9e44",
        "dark": "#4d9375"
      },
      "--shiki-token-comment": {
        "light": "#868e96",
        "dark": "#878781"
      },
      "--shiki-token-keyword": {
        "light": "#d6336c",
        "dark": "#cb7676"
      },
      "--shiki-token-parameter": {
        "light": "#e8590c",
        "dark": "#d4976c"
      },
      "--shiki-token-function": {
        "light": "#6741d9",
        "dark": "#8fceb0"
      },
      "--shiki-token-string-expression": {
        "light": "#2b8a3e",
        "dark": "#6bb392"
      },
      "--shiki-token-punctuation": {
        "light": "#495057",
        "dark": "#878781"
      },
      "--shiki-token-link": {
        "light": "#1971c2",
        "dark": "#8fceb0"
      }
    },
    "css": "\n/* Vitesse Nyx surface skin (DSH port).\n   Dark mode only: the light palette keeps DSH's own tokens. */\nbody[data-ds-dark-theme] {\n  --nyx-art: url(\"data:image/png;base64,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\");\n  --nyx-grid:\n    linear-gradient(90deg, rgba(0, 0, 0, 0.5) 1px, transparent 1px),\n    linear-gradient(0deg, rgba(0, 0, 0, 0.5) 1px, transparent 1px);\n  --nyx-w: max(1920px, 100vw, calc(100dvh * 16 / 9));\n  --nyx-d: calc(var(--nyx-w) / 400);\n}\n\n/* One fixed pixel-art sky behind every column: the frame is the stacking\n   context, so the layer sits above its base fill and below column content. */\nbody[data-ds-dark-theme] [data-slot='root'] > div {\n  isolation: isolate;\n}\nbody[data-ds-dark-theme] [data-slot='root'] > div::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  pointer-events: none;\n  background-image: var(--nyx-grid), var(--nyx-art);\n  background-size: var(--nyx-d) var(--nyx-d), var(--nyx-d) var(--nyx-d), var(--nyx-w) auto;\n  background-position: right bottom;\n  background-repeat: repeat, repeat, no-repeat;\n  image-rendering: pixelated;\n  contain: strict;\n}\n\n/* DSH paints the darwin centre and right tracks with an opaque base fill;\n   clear them so the sky can show through the conversation surfaces. */\nbody[data-ds-dark-theme] [data-slot='root'] > div > div:has([data-slot='sidebar']) {\n  background: transparent !important;\n  border-right-color: #0e0c0a !important;\n}\nbody[data-ds-dark-theme] [data-slot='root'] > div > div:has([data-slot='main']) {\n  background: transparent !important;\n  border-left-color: rgba(255, 255, 255, 0.06) !important;\n}\nbody[data-ds-dark-theme] [data-slot='root'] > div > div:has([data-slot='rightbar']) {\n  background: transparent !important;\n}\n\n/* Sidebar: one translucent warm-black sheet over the sky. */\nbody[data-ds-dark-theme] [data-slot='sidebar'] > div {\n  background:\n    linear-gradient(to bottom, rgba(189, 151, 106, 0.05) 0%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.18) 78%, rgba(0, 0, 0, 0.38) 100%),\n    rgba(11, 9, 7, 0.88) !important;\n}\n\n/* Chat: transparent on the empty home, near-opaque over the sky once messages exist. */\nbody[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase] {\n  background: rgba(18, 18, 18, 0.93) !important;\n}\nbody[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase='hero'] {\n  background: transparent !important;\n}\nbody[data-ds-dark-theme] [data-slot='conversation.header'] header {\n  background: rgba(18, 18, 18, 0.93) !important;\n  border-bottom-color: rgba(255, 255, 255, 0.06) !important;\n}\nbody[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase='hero'] [data-slot='conversation.header'] header {\n  background: transparent !important;\n  border-bottom-color: transparent !important;\n}\n/* Only the open panel paints; the closed one stays mounted off-track. */\nbody[data-ds-dark-theme] [data-sidebar-right-panel][data-sidebar-right-open] {\n  background-color: rgba(13, 12, 10, 0.93) !important;\n}\n\n/* Composer card and send action: warm glass with the theme's inset light. */\nbody[data-ds-dark-theme] [data-composer-card] {\n  background-image: linear-gradient(135deg, rgba(189, 151, 106, 0.10), rgba(0, 0, 0, 0) 55%) !important;\n  box-shadow: var(--dsw-elevation-soft), inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;\n}\nbody[data-ds-dark-theme] [data-composer-card] button[class*='primary']:not(:disabled) {\n  background:\n    radial-gradient(100% 60% at 50% 0%, rgba(255, 255, 255, 0.12), transparent 70%),\n    linear-gradient(150deg, rgba(189, 151, 106, 0.50), rgba(77, 147, 117, 0.15) 60%, rgba(47, 107, 85, 0.15)),\n    #14110d !important;\n  color: #f7ecd9 !important;\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, 0.18),\n    inset 0 -8px 14px -10px rgba(217, 189, 146, 0.80),\n    0 0 0 1px rgba(224, 203, 168, 0.22) !important;\n}\nbody[data-ds-dark-theme] [data-composer-card] button[class*='primary']:not(:disabled):hover {\n  background:\n    radial-gradient(100% 60% at 50% 0%, rgba(255, 255, 255, 0.20), transparent 70%),\n    linear-gradient(150deg, rgba(189, 151, 106, 0.62), rgba(77, 147, 117, 0.20) 60%, rgba(47, 107, 85, 0.20)),\n    #17130f !important;\n  color: #fff6e8 !important;\n}\n\n/* User bubble: the Nyx warm gradient edge plus the inset hairline. */\nbody[data-ds-dark-theme] [data-message-bubble] {\n  background:\n    linear-gradient(90deg, rgba(189, 151, 106, 0.18) 0%, rgba(77, 147, 117, 0.06) 60%, rgba(77, 147, 117, 0) 100%),\n    rgba(25, 36, 30, 0.72) !important;\n  box-shadow: inset 0 -1px 0 rgba(189, 151, 106, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.04) !important;\n  border-radius: 14px !important;\n}\n\n/* Empty home: the cream crescent floats above the composer card. The SVG\n   carries its own padding, so both horns stay clear of the box edges. The\n   moon keeps only its drop-shadow glow; [data-composer-card]::after belongs\n   to DSH's no-workspace dashed outline. */\nbody[data-ds-dark-theme] [data-content-phase='hero'] [data-composer-card] {\n  isolation: isolate;\n}\nbody[data-ds-dark-theme] [data-content-phase='hero'] [data-composer-card]::before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  bottom: calc(100% + 140px);\n  width: clamp(117px, 11.7vw, 164px);\n  aspect-ratio: 1;\n  transform: translateX(-50%);\n  z-index: 0;\n  pointer-events: none;\n  background: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJtIiBjeD0iMzYlIiBjeT0iMzAlIiByPSI3OCUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZjZlNCIvPjxzdG9wIG9mZnNldD0iLjUyIiBzdG9wLWNvbG9yPSIjZjdlY2Q5Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZDliZDkyIi8+PC9yYWRpYWxHcmFkaWVudD48bWFzayBpZD0iY3V0Ij48cmVjdCB3aWR0aD0iMjIwIiBoZWlnaHQ9IjIyMCIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjE0MiIgY3k9IjgwIiByPSI4NiIgZmlsbD0iIzAwMCIvPjwvbWFzaz48L2RlZnM+PGNpcmNsZSBjeD0iMTg4IiBjeT0iNDYiIHI9IjEuNCIgZmlsbD0iI2Y3ZWNkOSIgb3BhY2l0eT0iLjU1Ii8+PGcgbWFzaz0idXJsKCNjdXQpIj48Y2lyY2xlIGN4PSIxMTAiIGN5PSIxMTIiIHI9Ijk0IiBmaWxsPSJ1cmwoI20pIi8+PGNpcmNsZSBjeD0iMTEwIiBjeT0iMTEyIiByPSI5MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmNmU0IiBzdHJva2Utb3BhY2l0eT0iLjI2IiBzdHJva2Utd2lkdGg9IjEuNSIvPjwvZz48L3N2Zz4=\") center / contain no-repeat;\n  filter: drop-shadow(0 0 6px rgba(189, 151, 106, 0.55)) drop-shadow(0 0 26px rgba(189, 151, 106, 0.32));\n  opacity: 0.78;\n}\n",
    "preview": [
      "#121212",
      "#1b1b1b",
      "#4d9375",
      "#bd976a"
    ]
  },
  {
    "id": "eggsoup-vitesse-nyx-emerald",
    "name": "Vitesse Nyx Emerald",
    "darkOnly": true,
    "tokens": {
      "--dsw-alias-bg-base": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#121212"
      },
      "--dsw-alias-bg-document-preview": {
        "light": "var(--dsw-static-neutral-bluish-100)",
        "dark": "#121212"
      },
      "--dsw-alias-bg-document-selection": {
        "light": "color-mix(in srgb, var(--dsw-static-blue-500) 40%, transparent)",
        "dark": "rgba(77, 147, 117, 0.35)"
      },
      "--dsw-alias-bg-layer-1": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-bg-layer-2": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#1e1e1e"
      },
      "--dsw-alias-bg-layer-3": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#282828"
      },
      "--dsw-alias-bg-mask-1": {
        "light": "rgba(0, 0, 0, 0.24)",
        "dark": "rgba(0, 0, 0, 0.5)"
      },
      "--dsw-alias-bg-mask-2": {
        "light": "rgba(0, 0, 0, 0.12)",
        "dark": "rgba(0, 0, 0, 0.2)"
      },
      "--dsw-alias-bg-mask-3": {
        "light": "rgba(0, 0, 0, 0.48)",
        "dark": "rgba(0, 0, 0, 0.48)"
      },
      "--dsw-alias-bg-mask-drop": {
        "light": "rgba(255, 255, 255, 0.7)",
        "dark": "rgba(39, 39, 48, 0.7)"
      },
      "--dsw-alias-bg-mask-photo": {
        "light": "rgba(0, 0, 0, 0.88)",
        "dark": "rgba(0, 0, 0, 0.88)"
      },
      "--dsw-alias-bg-module-platform": {
        "light": "var(--dsw-static-neutral-bluish-60)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-bg-multi-select": {
        "light": "var(--dsw-static-neutral-bluish-60)",
        "dark": "#272727"
      },
      "--dsw-alias-bg-overlay": {
        "light": "var(--dsw-static-neutral-bluish-150)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-bg-skeleton": {
        "light": "rgba(0, 0, 0, 0.04)",
        "dark": "rgba(221, 217, 205, 0.08)"
      },
      "--dsw-alias-border-inverted": {
        "light": "rgba(0, 0, 0, 0)",
        "dark": "rgba(255, 255, 255, 0.06)"
      },
      "--dsw-alias-border-inverted2": {
        "light": "rgba(0, 0, 0, 0)",
        "dark": "rgba(255, 255, 255, 0.08)"
      },
      "--dsw-alias-border-l1": {
        "light": "rgba(0, 0, 0, 0.04)",
        "dark": "#242424"
      },
      "--dsw-alias-border-l2": {
        "light": "rgba(0, 0, 0, 0.1)",
        "dark": "#2a2a2a"
      },
      "--dsw-alias-border-l2-darkmode-thin": {
        "light": "rgba(0, 0, 0, 0.1)",
        "dark": "#242424"
      },
      "--dsw-alias-border-l3": {
        "light": "rgba(0, 0, 0, 0.12)",
        "dark": "#323232"
      },
      "--dsw-alias-border-l4": {
        "light": "rgba(0, 0, 0, 0.16)",
        "dark": "#3c3c3c"
      },
      "--dsw-alias-border-selected": {
        "light": "var(--dsw-static-neutral-bluish-400)",
        "dark": "#4d9375"
      },
      "--dsw-alias-brand-primary": {
        "light": "var(--dsw-static-neutral-bluish-1000)",
        "dark": "#4d9375"
      },
      "--dsw-alias-brand-primary-invert": {
        "light": "var(--dsw-static-neutral-bluish-1000)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-brand-primary-new-colorprimary-new-color": {
        "light": "rgb(65, 118, 230)",
        "dark": "#6394bf"
      },
      "--dsw-alias-brand-text": {
        "light": "var(--dsw-static-neutral-bluish-1000)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-button-contrast-fill": {
        "light": "var(--dsw-static-neutral-bluish-700)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-button-elevated-fill": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#1e1e1e"
      },
      "--dsw-alias-button-floating-fill": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-button-floating-hover": {
        "light": "var(--dsw-static-neutral-bluish-75)",
        "dark": "#282828"
      },
      "--dsw-alias-button-ghost-active-border": {
        "light": "var(--dsw-static-neutral-bluish-500)",
        "dark": "#323232"
      },
      "--dsw-alias-button-ghost-active-fill": {
        "light": "var(--dsw-static-neutral-bluish-100)",
        "dark": "#282828"
      },
      "--dsw-alias-button-ghost-active-hover": {
        "light": "var(--dsw-static-neutral-bluish-150)",
        "dark": "#2e2e2e"
      },
      "--dsw-alias-button-info-fill": {
        "light": "var(--dsw-static-deepseek-500)",
        "dark": "#4d9375"
      },
      "--dsw-alias-button-info-hover": {
        "light": "var(--dsw-static-deepseek-400)",
        "dark": "#5aa384"
      },
      "--dsw-alias-button-primary-dimmed": {
        "light": "var(--dsw-static-neutral-bluish-100)",
        "dark": "rgba(77, 147, 117, 0.20)"
      },
      "--dsw-alias-button-primary-fill": {
        "light": "var(--dsw-alias-brand-primary)",
        "dark": "#4d9375"
      },
      "--dsw-alias-button-primary-hover": {
        "light": "var(--dsw-static-neutral-bluish-750)",
        "dark": "#5aa384"
      },
      "--dsw-alias-button-tool-bar-fill": {
        "light": "rgba(84, 85, 87, 0.5)",
        "dark": "rgba(40, 40, 40, 0.5)"
      },
      "--dsw-alias-button-tool-bar-fill-invisible": {
        "light": "rgba(31, 31, 31, 0.36)",
        "dark": "rgba(27, 27, 27, 0.36)"
      },
      "--dsw-alias-button-tool-bar-hover": {
        "light": "rgba(84, 85, 87, 0.6)",
        "dark": "rgba(40, 40, 40, 0.6)"
      },
      "--dsw-alias-card-fill": {
        "light": "var(--dsw-static-neutral-50)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-card-fill-hover": {
        "light": "var(--dsw-static-neutral-100)",
        "dark": "#1e1e1e"
      },
      "--dsw-alias-card-tile-fill": {
        "light": "color-mix(in srgb, var(--dsw-static-neutral-00) 50%, transparent)",
        "dark": "rgba(221, 217, 205, 0.05)"
      },
      "--dsw-alias-chart-messages": {
        "light": "var(--dsw-static-blue-450)",
        "dark": "#6394bf"
      },
      "--dsw-alias-chart-system": {
        "light": "var(--dsw-static-neutral-bluish-400)",
        "dark": "#878781"
      },
      "--dsw-alias-chart-tools": {
        "light": "var(--dsw-static-violet-400)",
        "dark": "#bd976a"
      },
      "--dsw-alias-code-diff-added": {
        "light": "var(--dsw-static-green-500-a08)",
        "dark": "rgba(77, 147, 117, 0.14)"
      },
      "--dsw-alias-code-diff-deleted": {
        "light": "var(--dsw-static-red-600-a08)",
        "dark": "rgba(203, 118, 118, 0.14)"
      },
      "--dsw-alias-file-diff-added-bg": {
        "light": "rgb(230, 244, 231)",
        "dark": "#16241d"
      },
      "--dsw-alias-file-diff-added-gutter": {
        "light": "rgb(237, 247, 237)",
        "dark": "#101b16"
      },
      "--dsw-alias-file-diff-added-marker": {
        "light": "rgb(1, 162, 65)",
        "dark": "#4d9375"
      },
      "--dsw-alias-file-diff-deleted-bg": {
        "light": "rgb(252, 230, 226)",
        "dark": "#2a1719"
      },
      "--dsw-alias-file-diff-deleted-gutter": {
        "light": "rgb(253, 236, 233)",
        "dark": "#1f1112"
      },
      "--dsw-alias-file-diff-deleted-marker": {
        "light": "rgb(186, 39, 35)",
        "dark": "#cb7676"
      },
      "--dsw-alias-hovercard-bg": {
        "light": "var(--dsw-static-neutral-bluish-850)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-hovercard-label-primary": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-hovercard-label-secondary": {
        "light": "var(--dsw-static-neutral-bluish-300)",
        "dark": "#878781"
      },
      "--dsw-alias-hovercard-label-tertiary": {
        "light": "var(--dsw-static-neutral-bluish-400)",
        "dark": "#90908a"
      },
      "--dsw-alias-hovercard-state-done": {
        "light": "var(--dsw-static-violet-400)",
        "dark": "#b9a8d8"
      },
      "--dsw-alias-hovercard-state-error": {
        "light": "var(--dsw-static-red-400)",
        "dark": "#cb7676"
      },
      "--dsw-alias-illustration-background": {
        "light": "var(--dsw-static-neutral-bluish-55)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-illustration-backing": {
        "light": "var(--dsw-static-neutral-bluish-310)",
        "dark": "#242424"
      },
      "--dsw-alias-illustration-detail": {
        "light": "var(--dsw-static-neutral-bluish-310)",
        "dark": "#4a4a44"
      },
      "--dsw-alias-illustration-inset": {
        "light": "var(--dsw-alias-illustration-surface)",
        "dark": "#242424"
      },
      "--dsw-alias-illustration-shadow": {
        "light": "var(--dsw-alias-illustration-surface)",
        "dark": "#242424"
      },
      "--dsw-alias-illustration-surface": {
        "light": "var(--dsw-static-neutral-bluish-90)",
        "dark": "#2e2e2e"
      },
      "--dsw-alias-interactive-bg-active": {
        "light": "rgba(38, 49, 72, 0.1)",
        "dark": "rgba(221, 217, 205, 0.14)"
      },
      "--dsw-alias-interactive-bg-hover": {
        "light": "rgba(38, 49, 72, 0.06)",
        "dark": "rgba(221, 217, 205, 0.08)"
      },
      "--dsw-alias-interactive-bg-hover-accent": {
        "light": "rgba(38, 49, 72, 0.14)",
        "dark": "rgba(77, 147, 117, 0.24)"
      },
      "--dsw-alias-interactive-bg-hover-danger": {
        "light": "rgba(236, 19, 19, 0.05)",
        "dark": "rgba(203, 118, 118, 0.15)"
      },
      "--dsw-alias-interactive-bg-hover-solid": {
        "light": "var(--dsw-static-neutral-bluish-75)",
        "dark": "#282828"
      },
      "--dsw-alias-json-tree-hover": {
        "light": "rgb(60 64 67 / 4%)",
        "dark": "rgba(221, 217, 205, 0.05)"
      },
      "--dsw-alias-json-tree-icon": {
        "light": "#5f6368",
        "dark": "#878781"
      },
      "--dsw-alias-json-tree-keyword": {
        "light": "#1c00cf",
        "dark": "#6394bf"
      },
      "--dsw-alias-json-tree-number": {
        "light": "#1c00cf",
        "dark": "#6394bf"
      },
      "--dsw-alias-json-tree-property": {
        "light": "#881391",
        "dark": "#4d9375"
      },
      "--dsw-alias-json-tree-punctuation": {
        "light": "#202124",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-json-tree-string": {
        "light": "#c41a16",
        "dark": "#bd976a"
      },
      "--dsw-alias-label-caption": {
        "light": "var(--dsw-static-neutral-bluish-400)",
        "dark": "#90908a"
      },
      "--dsw-alias-label-deep-diving": {
        "light": "color-mix(in srgb, var(--dsw-static-deepseek-500) 70%, var(--dsw-static-blue-950))",
        "dark": "#6394bf"
      },
      "--dsw-alias-label-deep-diving-shimmer": {
        "light": "color-mix(in srgb, var(--dsw-static-deepseek-500) 30%, var(--dsw-static-blue-950))",
        "dark": "#8fb8dd"
      },
      "--dsw-alias-label-dimmed": {
        "light": "var(--dsw-static-neutral-bluish-200)",
        "dark": "#7a7a74"
      },
      "--dsw-alias-label-document-preview": {
        "light": "var(--dsw-static-neutral-bluish-700)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-label-on-color": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#000000"
      },
      "--dsw-alias-label-primary": {
        "light": "var(--dsw-static-neutral-bluish-1000)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-label-primary-bluish": {
        "light": "var(--dsw-static-blue-900)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-label-primary-dimmed": {
        "light": "var(--dsw-static-neutral-bluish-950)",
        "dark": "#c9c4b8"
      },
      "--dsw-alias-label-primary-foreground": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#000000"
      },
      "--dsw-alias-label-primary-inverted": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#121212"
      },
      "--dsw-alias-label-secondary": {
        "light": "var(--dsw-static-neutral-bluish-700)",
        "dark": "#878781"
      },
      "--dsw-alias-label-shimmer": {
        "light": "color-mix(in srgb, var(--dsw-static-neutral-1000) 30%, transparent)",
        "dark": "rgba(255, 255, 255, 0.45)"
      },
      "--dsw-alias-label-tertiary": {
        "light": "var(--dsw-static-neutral-bluish-600)",
        "dark": "#90908a"
      },
      "--dsw-alias-link": {
        "light": "var(--dsw-static-deepseek-500)",
        "dark": "#6394bf"
      },
      "--dsw-alias-markdown-citation": {
        "light": "var(--dsw-static-neutral-bluish-100)",
        "dark": "#1e2a24"
      },
      "--dsw-alias-markdown-code-block": {
        "light": "var(--dsw-static-neutral-bluish-50)",
        "dark": "#101010"
      },
      "--dsw-alias-markdown-code-block-banner": {
        "light": "var(--dsw-static-neutral-bluish-50)",
        "dark": "#161616"
      },
      "--dsw-alias-markdown-code-segment-selected": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#1e2a24"
      },
      "--dsw-alias-markdown-code-segment-unselected": {
        "light": "var(--dsw-static-neutral-bluish-75)",
        "dark": "#141414"
      },
      "--dsw-alias-markdown-inline-code": {
        "light": "var(--dsw-static-neutral-50)",
        "dark": "rgba(221, 217, 205, 0.08)"
      },
      "--dsw-alias-markdown-placeholder": {
        "light": "var(--dsw-static-neutral-bluish-60)",
        "dark": "#1a1a1a"
      },
      "--dsw-alias-markdown-tag": {
        "light": "var(--dsw-static-neutral-bluish-75)",
        "dark": "#1e2a24"
      },
      "--dsw-alias-menu-group-header-fill": {
        "light": "rgba(248, 249, 250, 0.94)",
        "dark": "rgba(8, 16, 13, 0.94)"
      },
      "--dsw-alias-menu-icon": {
        "light": "var(--dsw-static-neutral-bluish-800)",
        "dark": "#90908a"
      },
      "--dsw-alias-scrollbar-bg-l1": {
        "light": "var(--dsw-static-neutral-200)",
        "dark": "#2a2a2a"
      },
      "--dsw-alias-scrollbar-bg-l2": {
        "light": "var(--dsw-static-neutral-200)",
        "dark": "#323232"
      },
      "--dsw-alias-scrollbar-hover-l1": {
        "light": "var(--dsw-static-neutral-300)",
        "dark": "#3a3a3a"
      },
      "--dsw-alias-scrollbar-hover-l2": {
        "light": "var(--dsw-static-neutral-300)",
        "dark": "#424242"
      },
      "--dsw-alias-state-business-primary": {
        "light": "var(--dsw-static-deepseek-500)",
        "dark": "#6394bf"
      },
      "--dsw-alias-state-business-tertiary": {
        "light": "var(--dsw-static-deepseek-100)",
        "dark": "#16303f"
      },
      "--dsw-alias-state-done-primary": {
        "light": "var(--dsw-static-violet-600)",
        "dark": "#b9a8d8"
      },
      "--dsw-alias-state-error-primary": {
        "light": "var(--dsw-static-red-600)",
        "dark": "#cb7676"
      },
      "--dsw-alias-state-error-secondary": {
        "light": "var(--dsw-static-red-400)",
        "dark": "#e08a8a"
      },
      "--dsw-alias-state-idle-primary": {
        "light": "var(--dsw-static-neutral-300)",
        "dark": "#3a3a3a"
      },
      "--dsw-alias-state-success-primary": {
        "light": "var(--dsw-static-green-500)",
        "dark": "#4d9375"
      },
      "--dsw-alias-state-success-secondary": {
        "light": "var(--dsw-static-green-400)",
        "dark": "#6bb392"
      },
      "--dsw-alias-state-success-tertiary": {
        "light": "var(--dsw-static-green-100)",
        "dark": "#18271f"
      },
      "--dsw-alias-state-warn-label": {
        "light": "var(--dsw-static-amber-600)",
        "dark": "#d4976c"
      },
      "--dsw-alias-state-warn-primary": {
        "light": "var(--dsw-static-amber-500)",
        "dark": "#d4976c"
      },
      "--dsw-alias-state-warn-secondary": {
        "light": "var(--dsw-static-amber-400)",
        "dark": "#e0b083"
      },
      "--dsw-alias-state-warn-tertiary": {
        "light": "var(--dsw-static-amber-100)",
        "dark": "#2a1c12"
      },
      "--dsw-alias-switch-thumb": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-toast-action": {
        "light": "var(--dsw-static-deepseek-400)",
        "dark": "#8fceb0"
      },
      "--dsw-alias-toast-bg": {
        "light": "var(--dsw-static-neutral-bluish-800)",
        "dark": "#1e2a24"
      },
      "--dsw-alias-toast-label": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-tooltip-bg": {
        "light": "var(--dsw-static-neutral-bluish-850)",
        "dark": "#1b1b1b"
      },
      "--dsw-alias-tooltip-key-bg": {
        "light": "color-mix(in srgb, var(--dsw-alias-tooltip-bg), white 18%)",
        "dark": "#2a2a2a"
      },
      "--dsw-alias-tooltip-label": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#ddd9cd"
      },
      "--dsw-alias-trajectory-accent": {
        "light": "var(--dsw-static-blue-500)",
        "dark": "#4d9375"
      },
      "--dsw-alias-turn-trigger-bg": {
        "light": "var(--dsw-alias-markdown-code-block)",
        "dark": "#161616"
      },
      "--dsw-alias-turn-trigger-bg-hover": {
        "light": "var(--dsw-alias-interactive-bg-hover)",
        "dark": "#1b1b1b"
      },
      "--dsw-focus-ring-color": {
        "light": "#4176E6",
        "dark": "#4d9375"
      },
      "--dsw-menu-surface-fill": {
        "light": "rgba(252, 253, 254, 0.7)",
        "dark": "rgba(8, 16, 13, 0.80)"
      },
      "--dsw-specific-bubble": {
        "light": "var(--dsw-static-deepseek-50)",
        "dark": "#19241e"
      },
      "--dsw-specific-bubble-highlight": {
        "light": "var(--dsw-static-deepseek-200)",
        "dark": "#24362c"
      },
      "--dsw-specific-file-upload-track": {
        "light": "rgba(0, 0, 0, 0.08)",
        "dark": "rgba(0, 0, 0, 0.08)"
      },
      "--dsw-specific-guide-hero": {
        "light": "var(--dsw-static-neutral-200)",
        "dark": "#242424"
      },
      "--dsw-specific-input-major": {
        "light": "var(--dsw-static-neutral-bluish-00)",
        "dark": "#1b1b1b"
      },
      "--dsw-specific-login-input": {
        "light": "var(--dsw-static-neutral-bluish-50)",
        "dark": "#141414"
      },
      "--dsw-specific-menu": {
        "light": "rgba(248, 249, 250, 0.94)",
        "dark": "rgba(8, 16, 13, 0.90)"
      },
      "--dsw-specific-selector": {
        "light": "var(--dsw-static-neutral-bluish-60)",
        "dark": "#1b1b1b"
      },
      "--dsw-specific-sidebar-fill": {
        "light": "var(--dsw-static-neutral-bluish-50)",
        "dark": "rgba(7, 11, 9, 0.88)"
      },
      "--dsw-specific-sidebar-glass-collapsed-fill": {
        "light": "transparent",
        "dark": "rgba(255, 255, 255, 0.04)"
      },
      "--dsw-specific-sidebar-glass-collapsed-hover": {
        "light": "var(--dsw-alias-interactive-bg-hover)",
        "dark": "rgba(255, 255, 255, 0.08)"
      },
      "--dsw-specific-sidebar-glass-fill": {
        "light": "rgb(255 255 255 / 0.55)",
        "dark": "rgba(255, 255, 255, 0.05)"
      },
      "--dsw-specific-sidebar-glass-hover": {
        "light": "rgb(255 255 255 / 0.3)",
        "dark": "rgba(255, 255, 255, 0.09)"
      },
      "--dsw-specific-sidebar-nav-item-active": {
        "light": "var(--dsw-static-neutral-bluish-100)",
        "dark": "#1b2a22"
      },
      "--dsw-specific-sidebar-nav-item-active-accent": {
        "light": "var(--dsw-static-deepseek-100)",
        "dark": "#24362c"
      },
      "--dsw-specific-sidebar-right-flash": {
        "light": "var(--dsw-alias-brand-primary-new-colorprimary-new-color)",
        "dark": "#8fceb0"
      },
      "--dsw-specific-sidebar-tint": {
        "light": "color-mix(in srgb, color-mix(in srgb, var(--dsw-specific-sidebar-fill) 97%, rgb(122 155 240)) 40%, transparent)",
        "dark": "transparent"
      },
      "--dsw-specific-sidebar-wash-bottom": {
        "light": "rgb(143 137 184 / 0.09)",
        "dark": "transparent"
      },
      "--dsw-specific-sidebar-wash-bottom-clear": {
        "light": "rgb(143 137 184 / 0)",
        "dark": "transparent"
      },
      "--dsw-specific-sidebar-wash-top": {
        "light": "rgb(122 155 240 / 0.1)",
        "dark": "transparent"
      },
      "--dsw-specific-sidebar-wash-top-clear": {
        "light": "rgb(122 155 240 / 0)",
        "dark": "transparent"
      },
      "--dsw-specific-tip": {
        "light": "var(--dsw-static-neutral-bluish-60)",
        "dark": "#1b1b1b"
      },
      "--shiki-foreground": {
        "light": "var(--dsw-alias-label-primary)",
        "dark": "#ddd9cd"
      },
      "--shiki-background": {
        "light": "var(--dsw-alias-markdown-code-block)",
        "dark": "#101010"
      },
      "--shiki-token-constant": {
        "light": "#1c7ed6",
        "dark": "#6394bf"
      },
      "--shiki-token-string": {
        "light": "#2f9e44",
        "dark": "#4d9375"
      },
      "--shiki-token-comment": {
        "light": "#868e96",
        "dark": "#878781"
      },
      "--shiki-token-keyword": {
        "light": "#d6336c",
        "dark": "#cb7676"
      },
      "--shiki-token-parameter": {
        "light": "#e8590c",
        "dark": "#d4976c"
      },
      "--shiki-token-function": {
        "light": "#6741d9",
        "dark": "#8fceb0"
      },
      "--shiki-token-string-expression": {
        "light": "#2b8a3e",
        "dark": "#6bb392"
      },
      "--shiki-token-punctuation": {
        "light": "#495057",
        "dark": "#878781"
      },
      "--shiki-token-link": {
        "light": "#1971c2",
        "dark": "#8fceb0"
      }
    },
    "css": "\n/* Vitesse Nyx Emerald surface skin (DSH port).\n   Dark mode only: the light palette keeps DSH's own tokens. */\nbody[data-ds-dark-theme] {\n  --nyx-art: url(\"data:image/png;base64,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\");\n  --nyx-grid:\n    linear-gradient(90deg, rgba(0, 0, 0, 0.5) 1px, transparent 1px),\n    linear-gradient(0deg, rgba(0, 0, 0, 0.5) 1px, transparent 1px);\n  --nyx-w: max(1920px, 100vw, calc(100dvh * 16 / 9));\n  --nyx-d: calc(var(--nyx-w) / 400);\n}\n\n/* One fixed pixel-art sky behind every column: the frame is the stacking\n   context, so the layer sits above its base fill and below column content. */\nbody[data-ds-dark-theme] [data-slot='root'] > div {\n  isolation: isolate;\n}\nbody[data-ds-dark-theme] [data-slot='root'] > div::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  pointer-events: none;\n  background-image: var(--nyx-grid), var(--nyx-art);\n  background-size: var(--nyx-d) var(--nyx-d), var(--nyx-d) var(--nyx-d), var(--nyx-w) auto;\n  background-position: right bottom;\n  background-repeat: repeat, repeat, no-repeat;\n  image-rendering: pixelated;\n  contain: strict;\n}\n\n/* DSH paints the darwin centre and right tracks with an opaque base fill;\n   clear them so the sky can show through the conversation surfaces. */\nbody[data-ds-dark-theme] [data-slot='root'] > div > div:has([data-slot='sidebar']) {\n  background: transparent !important;\n  border-right-color: #080c0a !important;\n}\nbody[data-ds-dark-theme] [data-slot='root'] > div > div:has([data-slot='main']) {\n  background: transparent !important;\n  border-left-color: rgba(255, 255, 255, 0.06) !important;\n}\nbody[data-ds-dark-theme] [data-slot='root'] > div > div:has([data-slot='rightbar']) {\n  background: transparent !important;\n}\n\n/* Sidebar: one translucent green-black sheet over the sky. */\nbody[data-ds-dark-theme] [data-slot='sidebar'] > div {\n  background:\n    linear-gradient(to bottom, rgba(77, 147, 117, 0.06) 0%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.18) 78%, rgba(0, 0, 0, 0.38) 100%),\n    rgba(7, 11, 9, 0.88) !important;\n}\n\n/* Chat: transparent on the empty home, near-opaque over the sky once messages exist. */\nbody[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase] {\n  background: rgba(13, 18, 16, 0.93) !important;\n}\nbody[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase='hero'] {\n  background: transparent !important;\n}\nbody[data-ds-dark-theme] [data-slot='conversation.header'] header {\n  background: rgba(11, 16, 14, 0.93) !important;\n  border-bottom-color: rgba(255, 255, 255, 0.06) !important;\n}\nbody[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase='hero'] [data-slot='conversation.header'] header {\n  background: transparent !important;\n  border-bottom-color: transparent !important;\n}\n/* Only the open panel paints; the closed one stays mounted off-track. */\nbody[data-ds-dark-theme] [data-sidebar-right-panel][data-sidebar-right-open] {\n  background-color: rgba(8, 16, 13, 0.93) !important;\n}\n\n/* Composer card and send action: green glass with the theme's inset light. */\nbody[data-ds-dark-theme] [data-composer-card] {\n  background-image: linear-gradient(135deg, rgba(77, 147, 117, 0.10), rgba(0, 0, 0, 0) 55%) !important;\n  box-shadow: var(--dsw-elevation-soft), inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;\n}\nbody[data-ds-dark-theme] [data-composer-card] button[class*='primary']:not(:disabled) {\n  background:\n    radial-gradient(100% 60% at 50% 0%, rgba(255, 255, 255, 0.12), transparent 70%),\n    linear-gradient(150deg, rgba(77, 147, 117, 0.55), rgba(47, 107, 85, 0.16) 60%, rgba(28, 58, 47, 0.16)),\n    #0b1210 !important;\n  color: #d8efdd !important;\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, 0.18),\n    inset 0 -8px 14px -10px rgba(143, 206, 176, 0.80),\n    0 0 0 1px rgba(184, 223, 199, 0.22) !important;\n}\nbody[data-ds-dark-theme] [data-composer-card] button[class*='primary']:not(:disabled):hover {\n  background:\n    radial-gradient(100% 60% at 50% 0%, rgba(255, 255, 255, 0.20), transparent 70%),\n    linear-gradient(150deg, rgba(77, 147, 117, 0.68), rgba(47, 107, 85, 0.22) 60%, rgba(28, 58, 47, 0.22)),\n    #0d1713 !important;\n  color: #e8f5ec !important;\n}\n\n/* User bubble: the Nyx gradient edge plus the inset hairline. */\nbody[data-ds-dark-theme] [data-message-bubble] {\n  background:\n    linear-gradient(90deg, rgba(77, 147, 117, 0.18) 0%, rgba(47, 107, 85, 0.06) 60%, rgba(47, 107, 85, 0) 100%),\n    rgba(25, 36, 30, 0.72) !important;\n  box-shadow: inset 0 -1px 0 rgba(77, 147, 117, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.04) !important;\n  border-radius: 14px !important;\n}\n\n/* Empty home: the crescent moon floats above the composer card. The moon\n   keeps only its drop-shadow glow; [data-composer-card]::after belongs to\n   DSH's no-workspace dashed outline. */\nbody[data-ds-dark-theme] [data-content-phase='hero'] [data-composer-card] {\n  isolation: isolate;\n}\nbody[data-ds-dark-theme] [data-content-phase='hero'] [data-composer-card]::before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  bottom: calc(100% + 150px);\n  width: clamp(100px, 10vw, 140px);\n  aspect-ratio: 1;\n  transform: translateX(-50%);\n  z-index: 0;\n  pointer-events: none;\n  background: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJtIiBjeD0iMzYlIiBjeT0iMzAlIiByPSI3OCUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Q4ZWZkZCIvPjxzdG9wIG9mZnNldD0iLjUyIiBzdG9wLWNvbG9yPSIjOGZjZWIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNWI3ZjZlIi8+PC9yYWRpYWxHcmFkaWVudD48bWFzayBpZD0iY3V0Ij48cmVjdCB3aWR0aD0iMjIwIiBoZWlnaHQ9IjIyMCIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjE0MiIgY3k9IjgwIiByPSI4NiIgZmlsbD0iIzAwMCIvPjwvbWFzaz48L2RlZnM+PGNpcmNsZSBjeD0iMTg4IiBjeT0iNDYiIHI9IjEuNCIgZmlsbD0iI2Q4ZWZkZCIgb3BhY2l0eT0iLjU1Ii8+PGcgbWFzaz0idXJsKCNjdXQpIj48Y2lyY2xlIGN4PSIxMTAiIGN5PSIxMTIiIHI9Ijk0IiBmaWxsPSJ1cmwoI20pIi8+PGNpcmNsZSBjeD0iMTEwIiBjeT0iMTEyIiByPSI5MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDhlZmRkIiBzdHJva2Utb3BhY2l0eT0iLjI2IiBzdHJva2Utd2lkdGg9IjEuNSIvPjwvZz48L3N2Zz4=\") center / contain no-repeat;\n  filter: drop-shadow(0 0 6px rgba(77, 147, 117, 0.62)) drop-shadow(0 0 26px rgba(77, 147, 117, 0.36));\n  opacity: 0.70;\n}\n",
    "preview": [
      "#121212",
      "#1b1b1b",
      "#4d9375",
      "#8fceb0"
    ]
  },
  {
    "id": "eggsoup-ocean",
    "name": "Ocean",
    "darkOnly": false,
    "tokens": {
      "--dsw-alias-bg-base": {
        "light": "#F5F7F8",
        "dark": "#17212B"
      },
      "--dsw-alias-bg-layer-1": {
        "light": "#EDEFF1",
        "dark": "#333B45"
      },
      "--dsw-alias-bg-layer-2": {
        "light": "#E8E9EB",
        "dark": "#414851"
      },
      "--dsw-alias-bg-layer-3": {
        "light": "#FFFFFF",
        "dark": "#4F677B"
      },
      "--dsw-alias-bg-overlay": {
        "light": "#E8E9EB",
        "dark": "#414851"
      },
      "--dsw-alias-bg-document-preview": {
        "light": "#F5F7F8",
        "dark": "#17212B"
      },
      "--dsw-alias-label-document-preview": {
        "light": "#241523",
        "dark": "#FFFAFF"
      },
      "--dsw-alias-bg-document-selection": {
        "light": "#2672AF66",
        "dark": "#70B9EE66"
      },
      "--dsw-alias-bg-skeleton": {
        "light": "#2415230F",
        "dark": "#FFFAFF14"
      },
      "--dsw-alias-bg-module-platform": {
        "light": "#EDEFF1",
        "dark": "#333B45"
      },
      "--dsw-alias-bg-multi-select": {
        "light": "#E8E9EB",
        "dark": "#414851"
      },
      "--dsw-alias-border-l1": {
        "light": "#CDD4DC",
        "dark": "#405567"
      },
      "--dsw-alias-border-l2": {
        "light": "#C0C9D4",
        "dark": "#4F677B"
      },
      "--dsw-alias-border-l3": {
        "light": "#AAB7C4",
        "dark": "#5A7186"
      },
      "--dsw-alias-border-l4": {
        "light": "#96A6B4",
        "dark": "#6D8598"
      },
      "--dsw-alias-label-primary": {
        "light": "#241523",
        "dark": "#FFFAFF"
      },
      "--dsw-alias-label-secondary": {
        "light": "#746C75",
        "dark": "#969CA6"
      },
      "--dsw-alias-label-tertiary": {
        "light": "#6F6873",
        "dark": "#8D8F97"
      },
      "--dsw-alias-label-caption": {
        "light": "#746C75",
        "dark": "#8D8F97"
      },
      "--dsw-alias-label-dimmed": {
        "light": "#8B8490",
        "dark": "#6B7A88"
      },
      "--dsw-alias-label-primary-dimmed": {
        "light": "#3A2A38",
        "dark": "#D8E4F0"
      },
      "--dsw-alias-label-primary-foreground": {
        "light": "#FFFAFF",
        "dark": "#241523"
      },
      "--dsw-alias-label-shimmer": {
        "light": "#2415234D",
        "dark": "#FFFAFF73"
      },
      "--dsw-alias-menu-icon": {
        "light": "#746C75",
        "dark": "#8D8F97"
      },
      "--dsw-alias-brand-primary": {
        "light": "#0A6F75",
        "dark": "#5BD0D6"
      },
      "--dsw-alias-brand-primary-new-colorprimary-new-color": {
        "light": "#2672AF",
        "dark": "#70B9EE"
      },
      "--dsw-alias-brand-text": {
        "light": "#241523",
        "dark": "#FFFAFF"
      },
      "--dsw-alias-link": {
        "light": "#2672AF",
        "dark": "#70B9EE"
      },
      "--dsw-alias-state-business-primary": {
        "light": "#2672AF",
        "dark": "#70B9EE"
      },
      "--dsw-alias-state-business-tertiary": {
        "light": "#D8E4EE",
        "dark": "#324E66"
      },
      "--dsw-alias-button-primary-fill": {
        "light": "#0A6F75",
        "dark": "#5BD0D6"
      },
      "--dsw-alias-button-primary-hover": {
        "light": "#096267",
        "dark": "#6FD6DB"
      },
      "--dsw-alias-button-primary-dimmed": {
        "light": "#0A6F7533",
        "dark": "#5BD0D633"
      },
      "--dsw-alias-button-info-fill": {
        "light": "#2672AF",
        "dark": "#70B9EE"
      },
      "--dsw-alias-button-info-hover": {
        "light": "#3B8ED0",
        "dark": "#8AC9F5"
      },
      "--dsw-alias-interactive-bg-hover": {
        "light": "#2672AF0F",
        "dark": "#70B9EE1A"
      },
      "--dsw-alias-interactive-bg-active": {
        "light": "#2672AF1F",
        "dark": "#70B9EE2E"
      },
      "--dsw-alias-interactive-bg-hover-solid": {
        "light": "#CDDDEA",
        "dark": "#333B45"
      },
      "--dsw-alias-interactive-bg-hover-accent": {
        "light": "#2672AF24",
        "dark": "#70B9EE2E"
      },
      "--dsw-alias-markdown-code-block": {
        "light": "#F0F1F3",
        "dark": "#252E38"
      },
      "--dsw-alias-markdown-code-block-banner": {
        "light": "#E8EBEF",
        "dark": "#2D3743"
      },
      "--dsw-alias-markdown-code-segment-selected": {
        "light": "#E4ECF2",
        "dark": "#324E66"
      },
      "--dsw-alias-markdown-code-segment-unselected": {
        "light": "#F0F1F3",
        "dark": "#252E38"
      },
      "--dsw-alias-markdown-inline-code": {
        "light": "#24152314",
        "dark": "#FFFAFF1A"
      },
      "--dsw-alias-markdown-placeholder": {
        "light": "#E8EFF4",
        "dark": "#233544"
      },
      "--dsw-alias-markdown-tag": {
        "light": "#D8E4EE",
        "dark": "#324E66"
      },
      "--dsw-alias-markdown-citation": {
        "light": "#E4ECF2",
        "dark": "#324E66"
      },
      "--dsw-alias-scrollbar-bg-l1": {
        "light": "#B7C6D4",
        "dark": "#405567"
      },
      "--dsw-alias-scrollbar-bg-l2": {
        "light": "#B7C6D4",
        "dark": "#405567"
      },
      "--dsw-alias-scrollbar-hover-l1": {
        "light": "#93A7B8",
        "dark": "#4F677B"
      },
      "--dsw-alias-scrollbar-hover-l2": {
        "light": "#93A7B8",
        "dark": "#4F677B"
      },
      "--dsw-alias-state-error-primary": {
        "light": "#FB2C36",
        "dark": "#FB414A"
      },
      "--dsw-alias-state-error-secondary": {
        "light": "#C10007",
        "dark": "#FF6467"
      },
      "--dsw-alias-state-warn-primary": {
        "light": "#FE9A00",
        "dark": "#FE9A00"
      },
      "--dsw-alias-state-warn-secondary": {
        "light": "#B74B00",
        "dark": "#FFB900"
      },
      "--dsw-alias-state-warn-label": {
        "light": "#B74B00",
        "dark": "#FFB900"
      },
      "--dsw-alias-state-warn-tertiary": {
        "light": "#FCF4E8",
        "dark": "#3C3424"
      },
      "--dsw-alias-state-idle-primary": {
        "light": "#B7C6D4",
        "dark": "#8D8F97"
      },
      "--dsw-specific-bubble": {
        "light": "#D0DFEB",
        "dark": "#375871"
      },
      "--dsw-specific-bubble-highlight": {
        "light": "#B7CFE2",
        "dark": "#4F677B"
      },
      "--dsw-specific-input-major": {
        "light": "#FFFFFF",
        "dark": "#233544"
      },
      "--dsw-specific-sidebar-fill": {
        "light": "#E4ECF2",
        "dark": "#1E2D3B"
      },
      "--dsw-specific-sidebar-nav-item-active": {
        "light": "#B7CFE2",
        "dark": "#324F66"
      },
      "--dsw-specific-sidebar-nav-item-active-accent": {
        "light": "#E8EFF4",
        "dark": "#2D3743"
      },
      "--dsw-menu-surface-fill": {
        "light": "rgba(232,233,235,.80)",
        "dark": "rgba(65,72,81,.80)"
      },
      "--dsw-specific-menu": {
        "light": "rgba(232,233,235,.80)",
        "dark": "rgba(65,72,81,.80)"
      },
      "--dsw-alias-menu-group-header-fill": {
        "light": "rgba(232,233,235,.94)",
        "dark": "rgba(65,72,81,.94)"
      },
      "--dsw-specific-selector": {
        "light": "#CDDDEA",
        "dark": "#414851"
      },
      "--dsw-specific-tip": {
        "light": "#E8EFF4",
        "dark": "#414851"
      },
      "--dsw-alias-toast-bg": {
        "light": "#241523",
        "dark": "#414851"
      },
      "--dsw-alias-toast-label": {
        "light": "#FFFAFF",
        "dark": "#FFFAFF"
      },
      "--dsw-alias-tooltip-bg": {
        "light": "#1E2D3B",
        "dark": "#414851"
      },
      "--dsw-alias-turn-trigger-bg": {
        "light": "#E8EFF4",
        "dark": "#233544"
      },
      "--dsw-alias-turn-trigger-bg-hover": {
        "light": "#D8E4EE",
        "dark": "#324E66"
      },
      "--dsw-alias-switch-thumb": {
        "light": "#FFFFFF",
        "dark": "#FFFAFF"
      }
    },
    "css": "\n      [data-platform='darwin'] [class*='sidebarCol'] {\n        background: var(--dsw-specific-sidebar-fill) !important;\n      }\n    ",
    "preview": [
      "#17212B",
      "#333B45",
      "#5BD0D6",
      "#FFFAFF"
    ]
  }
];
    const parseHex = hex => {
      const h = hex.replace('#', '');
      return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
    };
    const toHex = ([r, g, b]) =>
      '#' + [r, g, b].map(v => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0')).join('');
    const mixHex = (a, b, t) => {
      const ca = parseHex(a);
      const cb = parseHex(b);
      return toHex([ca[0] + (cb[0] - ca[0]) * t, ca[1] + (cb[1] - ca[1]) * t, ca[2] + (cb[2] - ca[2]) * t]);
    };
    const hexRgba = (hex, alpha) => {
      const [r, g, b] = parseHex(hex);
      return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };
    const LIGHT_DEFAULTS = Object.fromEntries(
      Object.entries(BASE_THEMES[0].tokens).map(([k, v]) => [k, v.light]),
    );
    const buildNyxTokens = spec => {
      const c = spec.colors;
      const accentHover = mixHex(c.accent, '#ffffff', 0.14);
      const dark = {
        '--dsw-alias-bg-base': c.canvas,
        '--dsw-alias-bg-document-preview': c.canvas,
        '--dsw-alias-bg-document-selection': hexRgba(c.accent, 0.35),
        '--dsw-alias-bg-layer-1': spec.layer1,
        '--dsw-alias-bg-layer-2': spec.layer2,
        '--dsw-alias-bg-layer-3': spec.layer3,
        '--dsw-alias-bg-mask-1': 'rgba(0, 0, 0, 0.5)',
        '--dsw-alias-bg-mask-2': 'rgba(0, 0, 0, 0.2)',
        '--dsw-alias-bg-mask-3': 'rgba(0, 0, 0, 0.48)',
        '--dsw-alias-bg-mask-drop': 'rgba(39, 39, 48, 0.7)',
        '--dsw-alias-bg-mask-photo': 'rgba(0, 0, 0, 0.88)',
        '--dsw-alias-bg-module-platform': spec.layer1,
        '--dsw-alias-bg-multi-select': c.sidebarRowSelected,
        '--dsw-alias-bg-overlay': spec.layer1,
        '--dsw-alias-bg-skeleton': hexRgba(c.text, 0.08),
        '--dsw-alias-border-inverted': 'rgba(255, 255, 255, 0.06)',
        '--dsw-alias-border-inverted2': 'rgba(255, 255, 255, 0.08)',
        '--dsw-alias-border-l1': c.toolbarBorder,
        '--dsw-alias-border-l2': c.border,
        '--dsw-alias-border-l2-darkmode-thin': c.toolbarBorder,
        '--dsw-alias-border-l3': c.sidebarRowActive,
        '--dsw-alias-border-l4': mixHex(c.border, c.text, 0.14),
        '--dsw-alias-border-selected': c.accent,
        '--dsw-alias-brand-primary': c.accent,
        '--dsw-alias-brand-primary-invert': c.text,
        '--dsw-alias-brand-primary-new-colorprimary-new-color': c.update,
        '--dsw-alias-brand-text': c.text,
        '--dsw-alias-button-contrast-fill': c.text,
        '--dsw-alias-button-elevated-fill': spec.layer2,
        '--dsw-alias-button-floating-fill': spec.layer1,
        '--dsw-alias-button-floating-hover': spec.layer3,
        '--dsw-alias-button-ghost-active-border': spec.layer3,
        '--dsw-alias-button-ghost-active-fill': spec.layer2,
        '--dsw-alias-button-ghost-active-hover': mixHex(spec.layer2, c.text, 0.06),
        '--dsw-alias-button-info-fill': c.accent,
        '--dsw-alias-button-info-hover': accentHover,
        '--dsw-alias-button-primary-dimmed': hexRgba(c.accent, 0.20),
        '--dsw-alias-button-primary-fill': c.accent,
        '--dsw-alias-button-primary-hover': accentHover,
        '--dsw-alias-button-tool-bar-fill': hexRgba(spec.layer3, 0.5),
        '--dsw-alias-button-tool-bar-fill-invisible': hexRgba(spec.layer1, 0.36),
        '--dsw-alias-button-tool-bar-hover': hexRgba(spec.layer3, 0.6),
        '--dsw-alias-card-fill': spec.layer1,
        '--dsw-alias-card-fill-hover': spec.layer2,
        '--dsw-alias-card-tile-fill': hexRgba(c.text, 0.05),
        '--dsw-alias-chart-messages': c.update,
        '--dsw-alias-chart-system': c.textMuted,
        '--dsw-alias-chart-tools': spec.secondaryGlow,
        '--dsw-alias-code-diff-added': hexRgba(spec.addedColor, 0.14),
        '--dsw-alias-code-diff-deleted': hexRgba(c.error, 0.14),
        '--dsw-alias-file-diff-added-bg': mixHex(c.canvas, spec.addedColor, 0.14),
        '--dsw-alias-file-diff-added-gutter': mixHex(c.canvas, spec.addedColor, 0.08),
        '--dsw-alias-file-diff-added-marker': spec.addedColor,
        '--dsw-alias-file-diff-deleted-bg': mixHex(c.canvas, c.error, 0.14),
        '--dsw-alias-file-diff-deleted-gutter': mixHex(c.canvas, c.error, 0.08),
        '--dsw-alias-file-diff-deleted-marker': c.error,
        '--dsw-alias-hovercard-bg': spec.layer1,
        '--dsw-alias-hovercard-label-primary': c.text,
        '--dsw-alias-hovercard-label-secondary': c.textMuted,
        '--dsw-alias-hovercard-label-tertiary': c.secondaryLabel,
        '--dsw-alias-hovercard-state-done': spec.doneColor,
        '--dsw-alias-hovercard-state-error': c.error,
        '--dsw-alias-illustration-background': spec.layer1,
        '--dsw-alias-illustration-backing': c.border,
        '--dsw-alias-illustration-detail': c.mutedForeground,
        '--dsw-alias-illustration-inset': c.border,
        '--dsw-alias-illustration-shadow': c.border,
        '--dsw-alias-illustration-surface': spec.layer3,
        '--dsw-alias-interactive-bg-active': hexRgba(c.text, 0.14),
        '--dsw-alias-interactive-bg-hover': hexRgba(c.text, 0.08),
        '--dsw-alias-interactive-bg-hover-accent': hexRgba(c.accent, 0.24),
        '--dsw-alias-interactive-bg-hover-danger': hexRgba(c.error, 0.15),
        '--dsw-alias-interactive-bg-hover-solid': spec.layer2,
        '--dsw-alias-json-tree-hover': hexRgba(c.text, 0.05),
        '--dsw-alias-json-tree-icon': c.textMuted,
        '--dsw-alias-json-tree-keyword': c.update,
        '--dsw-alias-json-tree-number': c.update,
        '--dsw-alias-json-tree-property': c.accent,
        '--dsw-alias-json-tree-punctuation': c.text,
        '--dsw-alias-json-tree-string': spec.shiki.string,
        '--dsw-alias-label-caption': c.secondaryLabel,
        '--dsw-alias-label-deep-diving': c.update,
        '--dsw-alias-label-deep-diving-shimmer': mixHex(c.update, '#ffffff', 0.35),
        '--dsw-alias-label-dimmed': c.mutedForeground,
        '--dsw-alias-label-document-preview': c.text,
        '--dsw-alias-label-on-color': c.accentForeground,
        '--dsw-alias-label-primary': c.text,
        '--dsw-alias-label-primary-bluish': c.text,
        '--dsw-alias-label-primary-dimmed': mixHex(c.text, c.canvas, 0.10),
        '--dsw-alias-label-primary-foreground': c.accentForeground,
        '--dsw-alias-label-primary-inverted': c.canvas,
        '--dsw-alias-label-secondary': c.textMuted,
        '--dsw-alias-label-shimmer': 'rgba(255, 255, 255, 0.45)',
        '--dsw-alias-label-tertiary': c.secondaryLabel,
        '--dsw-alias-link': c.update,
        '--dsw-alias-markdown-citation': mixHex(c.canvas, c.accent, 0.14),
        '--dsw-alias-markdown-code-block': c.codeBackground,
        '--dsw-alias-markdown-code-block-banner': mixHex(c.codeBackground, c.text, 0.03),
        '--dsw-alias-markdown-code-segment-selected': mixHex(c.canvas, c.accent, 0.14),
        '--dsw-alias-markdown-code-segment-unselected': mixHex(c.codeBackground, c.canvas, 0.4),
        '--dsw-alias-markdown-inline-code': hexRgba(c.text, 0.08),
        '--dsw-alias-markdown-placeholder': mixHex(c.canvas, c.text, 0.04),
        '--dsw-alias-markdown-tag': mixHex(c.canvas, c.accent, 0.14),
        '--dsw-alias-menu-group-header-fill': hexRgba(spec.menuBg, 0.94),
        '--dsw-alias-menu-icon': c.iconMuted,
        '--dsw-alias-scrollbar-bg-l1': c.terminalScrollbar,
        '--dsw-alias-scrollbar-bg-l2': c.terminalScrollbarHover,
        '--dsw-alias-scrollbar-hover-l1': mixHex(c.terminalScrollbar, c.text, 0.12),
        '--dsw-alias-scrollbar-hover-l2': mixHex(c.terminalScrollbarHover, c.text, 0.12),
        '--dsw-alias-state-business-primary': c.update,
        '--dsw-alias-state-business-tertiary': c.updateSurface,
        '--dsw-alias-state-done-primary': spec.doneColor,
        '--dsw-alias-state-error-primary': c.error,
        '--dsw-alias-state-error-secondary': c.errorForeground,
        '--dsw-alias-state-idle-primary': mixHex(c.canvas, c.text, 0.22),
        '--dsw-alias-state-success-primary': spec.successColor,
        '--dsw-alias-state-success-secondary': mixHex(spec.successColor, '#ffffff', 0.25),
        '--dsw-alias-state-success-tertiary': mixHex(c.canvas, spec.successColor, 0.14),
        '--dsw-alias-state-warn-label': c.warning,
        '--dsw-alias-state-warn-primary': c.warning,
        '--dsw-alias-state-warn-secondary': c.warningForeground,
        '--dsw-alias-state-warn-tertiary': c.warningSurface,
        '--dsw-alias-switch-thumb': c.terminalCursor,
        '--dsw-alias-toast-action': c.accent,
        '--dsw-alias-toast-bg': c.accentSurface,
        '--dsw-alias-toast-label': c.accentSurfaceForeground,
        '--dsw-alias-tooltip-bg': spec.layer1,
        '--dsw-alias-tooltip-key-bg': spec.layer2,
        '--dsw-alias-tooltip-label': c.text,
        '--dsw-alias-trajectory-accent': c.accent,
        '--dsw-alias-turn-trigger-bg': mixHex(c.canvas, spec.layer1, 0.5),
        '--dsw-alias-turn-trigger-bg-hover': spec.layer1,
        '--dsw-focus-ring-color': c.focus,
        '--dsw-menu-surface-fill': hexRgba(spec.menuBg, 0.80),
        '--dsw-specific-bubble': c.messageSurface,
        '--dsw-specific-bubble-highlight': mixHex(c.messageSurface, c.accent, 0.20),
        '--dsw-specific-file-upload-track': 'rgba(0, 0, 0, 0.08)',
        '--dsw-specific-guide-hero': c.border,
        '--dsw-specific-input-major': spec.layer1,
        '--dsw-specific-login-input': c.muted,
        '--dsw-specific-menu': hexRgba(spec.menuBg, 0.90),
        '--dsw-specific-selector': spec.layer1,
        '--dsw-specific-sidebar-fill': hexRgba(c.sidebar, 0.88),
        '--dsw-specific-sidebar-glass-collapsed-fill': 'rgba(255, 255, 255, 0.04)',
        '--dsw-specific-sidebar-glass-collapsed-hover': 'rgba(255, 255, 255, 0.08)',
        '--dsw-specific-sidebar-glass-fill': 'rgba(255, 255, 255, 0.05)',
        '--dsw-specific-sidebar-glass-hover': 'rgba(255, 255, 255, 0.09)',
        '--dsw-specific-sidebar-nav-item-active': c.sidebarRowSelected,
        '--dsw-specific-sidebar-nav-item-active-accent': c.accentSurface,
        '--dsw-specific-sidebar-right-flash': c.terminalCursor,
        '--dsw-specific-sidebar-tint': 'transparent',
        '--dsw-specific-sidebar-wash-bottom': 'transparent',
        '--dsw-specific-sidebar-wash-bottom-clear': 'transparent',
        '--dsw-specific-sidebar-wash-top': 'transparent',
        '--dsw-specific-sidebar-wash-top-clear': 'transparent',
        '--dsw-specific-tip': spec.layer1,
        '--shiki-foreground': c.text,
        '--shiki-background': c.codeBackground,
        '--shiki-token-constant': spec.shiki.constant,
        '--shiki-token-string': spec.shiki.string,
        '--shiki-token-comment': spec.shiki.comment,
        '--shiki-token-keyword': spec.shiki.keyword,
        '--shiki-token-parameter': spec.shiki.parameter,
        '--shiki-token-function': spec.shiki.function,
        '--shiki-token-string-expression': spec.shiki.stringExpression,
        '--shiki-token-punctuation': spec.shiki.punctuation,
        '--shiki-token-link': spec.shiki.link,
      };
      return Object.fromEntries(
        Object.keys(LIGHT_DEFAULTS).map(key => [key, { light: LIGHT_DEFAULTS[key], dark: dark[key] }]),
      );
    };
    const buildNyxCss = spec => {
      const c = spec.colors;
      return `
/* ${spec.name} surface skin (DSH port).
   Dark mode only: the light palette keeps DSH's own tokens. */
body[data-ds-dark-theme] {
  --nyx-art: url("${spec.art}");
  --nyx-grid:
    linear-gradient(90deg, rgba(0, 0, 0, ${spec.gridAlpha}) 1px, transparent 1px),
    linear-gradient(0deg, rgba(0, 0, 0, ${spec.gridAlpha}) 1px, transparent 1px);
  --nyx-w: max(1920px, 100vw, calc(100dvh * 16 / 9));
  --nyx-d: calc(var(--nyx-w) / 400);
}
body[data-ds-dark-theme] [data-slot='root'] > div {
  background: ${spec.skyBg};
  isolation: isolate;
}
body[data-ds-dark-theme] [data-slot='root'] > div::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  background-image: var(--nyx-grid), var(--nyx-art);
  background-size: var(--nyx-d) var(--nyx-d), var(--nyx-d) var(--nyx-d), var(--nyx-w) auto;
  background-position: right bottom;
  background-repeat: repeat, repeat, no-repeat;
  image-rendering: pixelated;
  contain: strict;
}
body[data-ds-dark-theme] [data-slot='root'] > div > div:has([data-slot='sidebar']) {
  background: transparent !important;
  border-right-color: ${c.sidebarBorder} !important;
}
body[data-ds-dark-theme] [data-slot='root'] > div > div:has([data-slot='main']) {
  background: transparent !important;
  border-left-color: rgba(255, 255, 255, 0.06) !important;
}
body[data-ds-dark-theme] [data-slot='root'] > div > div:has([data-slot='rightbar']) {
  background: transparent !important;
}
body[data-ds-dark-theme] [data-slot='sidebar'] > div {
  background:
    linear-gradient(to bottom, ${hexRgba(c.accent, 0.05)} 0%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.18) 78%, rgba(0, 0, 0, 0.38) 100%),
    ${hexRgba(c.sidebar, 0.86)} !important;
}
body[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase] {
  background: ${hexRgba(c.canvas, 0.93)} !important;
}
body[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase='hero'] {
  background: transparent !important;
}
body[data-ds-dark-theme] [data-slot='conversation.header'] header {
  background: ${hexRgba(c.canvas, 0.94)} !important;
  border-bottom-color: rgba(255, 255, 255, 0.06) !important;
}
body[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase='hero'] [data-slot='conversation.header'] header {
  background: transparent !important;
  border-bottom-color: transparent !important;
}
body[data-ds-dark-theme] [data-sidebar-right-panel][data-sidebar-right-open] {
  background-color: ${hexRgba(spec.panelBg, 0.93)} !important;
}
body[data-ds-dark-theme] [data-composer-card] {
  background-image: linear-gradient(135deg, ${hexRgba(c.accent, 0.10)}, ${hexRgba(spec.secondaryGlow, 0.04)} 45%, rgba(0, 0, 0, 0) 65%) !important;
  box-shadow: var(--dsw-elevation-soft), inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
}
body[data-ds-dark-theme] [data-composer-card] button[class*='primary']:not(:disabled) {
  background:
    radial-gradient(100% 60% at 50% 0%, rgba(255, 255, 255, 0.12), transparent 70%),
    linear-gradient(150deg, ${hexRgba(c.accent, 0.48)}, ${hexRgba(spec.secondaryGlow, 0.18)} 60%, ${hexRgba(c.accent, 0.14)}),
    ${spec.sendBase} !important;
  color: ${spec.sendText} !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    inset 0 -8px 14px -10px ${hexRgba(c.accent, 0.68)},
    0 0 0 1px ${hexRgba(c.accent, 0.24)} !important;
}
body[data-ds-dark-theme] [data-composer-card] button[class*='primary']:not(:disabled):hover {
  background:
    radial-gradient(100% 60% at 50% 0%, rgba(255, 255, 255, 0.20), transparent 70%),
    linear-gradient(150deg, ${hexRgba(c.accent, 0.60)}, ${hexRgba(spec.secondaryGlow, 0.24)} 60%, ${hexRgba(c.accent, 0.18)}),
    ${spec.sendBase} !important;
  color: ${spec.sendHoverText} !important;
}
body[data-ds-dark-theme] [data-message-bubble] {
  background:
    linear-gradient(90deg, ${hexRgba(c.accent, 0.16)} 0%, ${hexRgba(spec.secondaryGlow, 0.07)} 60%, rgba(0, 0, 0, 0) 100%),
    ${hexRgba(c.messageSurface, 0.80)} !important;
  box-shadow: inset 0 -1px 0 ${hexRgba(c.accent, 0.30)}, inset 0 1px 0 rgba(255, 255, 255, 0.04) !important;
  border-radius: 14px !important;
}
body[data-ds-dark-theme] [data-content-phase='hero'] [data-composer-card] {
  isolation: isolate;
}
body[data-ds-dark-theme] [data-content-phase='hero'] [data-composer-card]::before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: calc(100% + 140px);
  width: clamp(117px, 11.7vw, 164px);
  aspect-ratio: 1;
  transform: translateX(-50%);
  z-index: 0;
  pointer-events: none;
  background: url("${spec.emblem}") center / contain no-repeat;
  filter: ${spec.emblemFilter};
  opacity: 0.92;
}
`;
    };
    const buildNyxTheme = spec => ({
      id: spec.id,
      name: spec.name,
      darkOnly: true,
      tokens: buildNyxTokens(spec),
      css: buildNyxCss(spec),
      preview: spec.preview,
    });
    const NYX_SPECS = [
  {
    "id": "eggsoup-catppuccin-mocha-nyx",
    "name": "Catppuccin Mocha Nyx",
    "colors": {
      "canvas": "#1e1e2e",
      "chrome": "#1e1e2e",
      "toolbar": "#181825",
      "toolbarForeground": "#cdd6f4",
      "toolbarBorder": "#313244",
      "toolbarControl": "#313244",
      "toolbarControlForeground": "#cdd6f4",
      "toolbarControlHover": "#45475a",
      "surface": "#1e1e2e",
      "surfaceRaised": "#313244",
      "surfaceOverlay": "#181825",
      "text": "#cdd6f4",
      "textMuted": "#a6adc8",
      "border": "#313244",
      "input": "#45475a",
      "focus": "#cba6f7",
      "accent": "#cba6f7",
      "accentForeground": "#11111b",
      "secondary": "#313244",
      "secondaryForeground": "#cdd6f4",
      "muted": "#181825",
      "mutedForeground": "#7f849c",
      "placeholder": "#b6bdd8",
      "secondaryLabel": "#a6adc8",
      "iconMuted": "#9399b2",
      "error": "#f38ba8",
      "errorForeground": "#f9c6d1",
      "errorSurface": "#412b33",
      "warning": "#f9e2af",
      "warningForeground": "#f7e6bd",
      "warningSurface": "#453b29",
      "update": "#89b4fa",
      "updateForeground": "#c2d6f5",
      "updateSurface": "#2b344b",
      "accentSurface": "#332b45",
      "accentSurfaceForeground": "#cdd6f4",
      "messageSurface": "#272839",
      "messageForeground": "#cdd6f4",
      "messageAction": "#cba6f7",
      "messageActionForeground": "#11111b",
      "messageActionHover": "#b4befe",
      "codeBackground": "#181825",
      "codeForeground": "#cdd6f4",
      "searchMatchBackground": "#5b4a2b",
      "searchMatchForeground": "#cdd6f4",
      "searchMatchActiveBackground": "#fab387",
      "searchMatchActiveForeground": "#11111b",
      "sidebar": "#181825",
      "sidebarForeground": "#cdd6f4",
      "sidebarMutedForeground": "#7f849c",
      "sidebarControlSurface": "#313244",
      "sidebarRowHover": "#313244",
      "sidebarRowActive": "#45475a",
      "sidebarRowSelected": "#45475a",
      "sidebarBorder": "#313244",
      "terminalBackground": "#11111b",
      "terminalForeground": "#cdd6f4",
      "terminalCursor": "#f5e0dc",
      "terminalSelection": "#45475a",
      "terminalScrollbar": "#585b70",
      "terminalScrollbarHover": "#6c7086"
    },
    "layer1": "#272839",
    "layer2": "#313244",
    "layer3": "#45475a",
    "skyBg": "#11111b",
    "panelBg": "#181825",
    "menuBg": "#181825",
    "gridAlpha": 0.5,
    "secondaryGlow": "#89b4fa",
    "sendBase": "#11111b",
    "sendText": "#f5e0dc",
    "sendHoverText": "#ffffff",
    "addedColor": "#a6e3a1",
    "doneColor": "#cba6f7",
    "successColor": "#a6e3a1",
    "emblemFilter": "drop-shadow(0 0 6px rgba(203, 166, 247, 0.65)) drop-shadow(0 0 26px rgba(137, 180, 250, 0.32))",
    "preview": [
      "#1e1e2e",
      "#313244",
      "#cba6f7",
      "#89b4fa"
    ],
    "shiki": {
      "constant": "#fab387",
      "string": "#a6e3a1",
      "comment": "#7f849c",
      "keyword": "#cba6f7",
      "parameter": "#eba0ac",
      "function": "#89b4fa",
      "stringExpression": "#a6e3a1",
      "punctuation": "#9399b2",
      "link": "#89dceb"
    },
    "art": "data:image/png;base64,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",
    "emblem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PHBvbHlnb24gcG9pbnRzPSI1MCwzOCA4OCw2OCAxMzIsNjggMTcwLDM4IDE3NiwxMTIgMTU4LDE1OCAxMTAsMTg4IDYyLDE1OCA0NCwxMTIiIGZpbGw9IiMyOTIzM2QiIHN0cm9rZT0iI2NiYTZmNyIgc3Ryb2tlLXdpZHRoPSIyLjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjUwLDM4IDg4LDY4IDQ0LDExMiIgZmlsbD0iIzdkNWVhOCIvPjxwb2x5Z29uIHBvaW50cz0iMTcwLDM4IDE3NiwxMTIgMTMyLDY4IiBmaWxsPSIjNTk0MjdkIi8+PHBvbHlnb24gcG9pbnRzPSI1Niw1NCA4MCw3MiA1NCw5OCIgZmlsbD0iI2Y1YzJlNyIgZmlsbC1vcGFjaXR5PSIuODUiLz48cG9seWdvbiBwb2ludHM9IjE2NCw1NCAxNjYsOTggMTQwLDcyIiBmaWxsPSIjYjQ4YmUwIiBmaWxsLW9wYWNpdHk9Ii44Ii8+PHBvbHlnb24gcG9pbnRzPSI4OCw2OCAxMzIsNjggMTEwLDExMCIgZmlsbD0iI2Y1ZTBkYyIvPjxwb2x5Z29uIHBvaW50cz0iODgsNjggMTEwLDExMCA0NCwxMTIiIGZpbGw9IiNjYmE2ZjciLz48cG9seWdvbiBwb2ludHM9IjEzMiw2OCAxNzYsMTEyIDExMCwxMTAiIGZpbGw9IiM5YTc1Y2YiLz48cG9seWdvbiBwb2ludHM9IjQ0LDExMiAxMTAsMTEwIDExMCwxNTIgNjIsMTU4IiBmaWxsPSIjODU2M2I4Ii8+PHBvbHlnb24gcG9pbnRzPSIxNzYsMTEyIDE1OCwxNTggMTEwLDE1MiAxMTAsMTEwIiBmaWxsPSIjNjM0OThjIi8+PHBvbHlnb24gcG9pbnRzPSI2MiwxNTggMTEwLDE1MiAxMTAsMTg4IiBmaWxsPSIjNGYzOTczIi8+PHBvbHlnb24gcG9pbnRzPSIxNTgsMTU4IDExMCwxODggMTEwLDE1MiIgZmlsbD0iIzNhMmE1NyIvPjxwb2x5Z29uIHBvaW50cz0iNjksMTIwIDkwLDExNiA5NCwxMjkgNzUsMTMxIiBmaWxsPSIjZjllMmFmIi8+PHBvbHlnb24gcG9pbnRzPSIxNTEsMTIwIDE0NSwxMzEgMTI2LDEyOSAxMzAsMTE2IiBmaWxsPSIjZjllMmFmIi8+PHBvbHlnb24gcG9pbnRzPSIxMDMsMTQyIDExNywxNDIgMTEwLDE1MiIgZmlsbD0iI2Y1ZTBkYyIvPjxwb2x5Z29uIHBvaW50cz0iNTAsMzggODgsNjggMTMyLDY4IDE3MCwzOCAxNzYsMTEyIDE1OCwxNTggMTEwLDE4OCA2MiwxNTggNDQsMTEyIiBmaWxsPSJub25lIiBzdHJva2U9IiNmNWUwZGMiIHN0cm9rZS1vcGFjaXR5PSIuNTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik04OCA2OCBMMTEwIDExMCBMMTMyIDY4IE00NCAxMTIgTDExMCAxMTAgTDE3NiAxMTIgTTExMCAxMTAgTDExMCAxODggTTYyIDE1OCBMMTEwIDE1MiBMMTU4IDE1OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjVlMGRjIiBzdHJva2Utb3BhY2l0eT0iLjM4IiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg=="
  },
  {
    "id": "eggsoup-inkstone-xuanmo-nyx",
    "name": "Inkstone Xuanmo Nyx",
    "colors": {
      "canvas": "#14131a",
      "chrome": "#14131a",
      "toolbar": "#14131a",
      "toolbarForeground": "#d4cec4",
      "toolbarBorder": "#262430",
      "toolbarControl": "#1e1d27",
      "toolbarControlForeground": "#d4cec4",
      "toolbarControlHover": "#24222e",
      "surface": "#1a1922",
      "surfaceRaised": "#22212c",
      "surfaceOverlay": "#2b2a36",
      "text": "#d4cec4",
      "textMuted": "#ada599",
      "border": "#343240",
      "input": "#4a4557",
      "focus": "#619ac3",
      "accent": "#619ac3",
      "accentForeground": "#14131a",
      "secondary": "#1a1922",
      "secondaryForeground": "#d4cec4",
      "muted": "#111017",
      "mutedForeground": "#9e98aa",
      "placeholder": "#bcb5c4",
      "secondaryLabel": "#ada599",
      "iconMuted": "#9e98aa",
      "error": "#e25737",
      "errorForeground": "#fe7150",
      "errorSurface": "#311d1e",
      "warning": "#c89b38",
      "warningForeground": "#e4bc62",
      "warningSurface": "#2f281f",
      "update": "#619ac3",
      "updateForeground": "#6ea8d1",
      "updateSurface": "#202733",
      "accentSurface": "#2b2a36",
      "accentSurfaceForeground": "#d4cec4",
      "messageSurface": "#1f1e28",
      "messageForeground": "#d4cec4",
      "messageAction": "#619ac3",
      "messageActionForeground": "#14131a",
      "messageActionHover": "#74a6ca",
      "codeBackground": "#17161d",
      "codeForeground": "#d4cec4",
      "searchMatchBackground": "#4c3c13",
      "searchMatchForeground": "#f0e4c4",
      "searchMatchActiveBackground": "#d6a01d",
      "searchMatchActiveForeground": "#14131a",
      "sidebar": "#111017",
      "sidebarForeground": "#d4cec4",
      "sidebarMutedForeground": "#9e98aa",
      "sidebarControlSurface": "#1e1d27",
      "sidebarRowHover": "#24222e",
      "sidebarRowActive": "#302e3c",
      "sidebarRowSelected": "#332f46",
      "sidebarBorder": "#262430",
      "terminalBackground": "#0f0e14",
      "terminalForeground": "#d4cec4",
      "terminalCursor": "#619ac3",
      "terminalSelection": "#332f46",
      "terminalScrollbar": "#343240",
      "terminalScrollbarHover": "#4a4557"
    },
    "layer1": "#1a1922",
    "layer2": "#22212c",
    "layer3": "#302e3c",
    "skyBg": "#0b0a10",
    "panelBg": "#1b1a24",
    "menuBg": "#181720",
    "gridAlpha": 0.5,
    "secondaryGlow": "#e25737",
    "sendBase": "#111017",
    "sendText": "#eef5fa",
    "sendHoverText": "#ffffff",
    "addedColor": "#74b08e",
    "doneColor": "#a398d4",
    "successColor": "#74b08e",
    "emblemFilter": "drop-shadow(0 0 6px rgba(97, 154, 195, 0.55)) drop-shadow(0 0 24px rgba(226, 87, 55, 0.28))",
    "preview": [
      "#14131a",
      "#1a1922",
      "#619ac3",
      "#e25737"
    ],
    "shiki": {
      "constant": "#619ac3",
      "string": "#87b38d",
      "comment": "#9e98aa",
      "keyword": "#e25737",
      "parameter": "#c89b38",
      "function": "#8ec0d8",
      "stringExpression": "#87b38d",
      "punctuation": "#9e98aa",
      "link": "#6ea8d1"
    },
    "art": "data:image/png;base64,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",
    "emblem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PHBvbHlnb24gcG9pbnRzPSI0NCw1NCAxNDgsMzYgMTc2LDY2IDE1NiwxNjYgNTIsMTg0IDI2LDE1MiIgZmlsbD0iIzFkMWMyNiIgc3Ryb2tlPSIjYjVhZmE0IiBzdHJva2Utb3BhY2l0eT0iLjU1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjQ0LDU0IDE0OCwzNiAxMzgsNTQgNTgsNjgiIGZpbGw9IiNkNGNlYzQiLz48cG9seWdvbiBwb2ludHM9IjQ0LDU0IDU4LDY4IDQ4LDE1NCAyNiwxNTIiIGZpbGw9IiM1ZTVhNmIiLz48cG9seWdvbiBwb2ludHM9IjE0OCwzNiAxNzYsNjYgMTU2LDE2NiAxMzgsMTQ0IiBmaWxsPSIjMmMyYTM4Ii8+PHBvbHlnb24gcG9pbnRzPSIyNiwxNTIgNDgsMTU0IDEzOCwxNDQgMTU2LDE2NiA1MiwxODQiIGZpbGw9IiMxYTE4MjIiLz48cG9seWdvbiBwb2ludHM9IjU4LDY4IDEzOCw1NCAxMzgsMTQ0IDQ4LDE1NCIgZmlsbD0iIzE1MTQxYyIvPjxwb2x5Z29uIHBvaW50cz0iNTgsNjggMTM4LDU0IDEzOCw4OCA1NCwxMDIiIGZpbGw9IiMzZjNkNGQiLz48cG9seWdvbiBwb2ludHM9IjU0LDEwMiAxMzgsODggMTM4LDE0NCA0OCwxNTQiIGZpbGw9IiMyNTQxNTciLz48cG9seWdvbiBwb2ludHM9IjU0LDEwMiAxMDQsOTQgODQsMTUwIDQ4LDE1NCIgZmlsbD0iIzYxOWFjMyIvPjxwb2x5Z29uIHBvaW50cz0iNTQsMTAyIDEwNCw5NCA3NCwxMTYiIGZpbGw9IiNhOGQzZWUiLz48cG9seWdvbiBwb2ludHM9IjEwNCw5NCAxMzgsODggMTM4LDE0NCA4NCwxNTAiIGZpbGw9IiMzYTZhOGMiLz48cGF0aCBkPSJNNTggNjggTDEzOCA1NCBMMTM4IDE0NCBMNDggMTU0IFogTTU0IDEwMiBMMTM4IDg4IiBmaWxsPSJub25lIiBzdHJva2U9IiNlZmU5ZGQiIHN0cm9rZS1vcGFjaXR5PSIuNDIiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxMzQsMTI2IDE4NCwxMjYgMTg4LDE3NiAxMzgsMTgwIiBmaWxsPSIjYTgzMjE5IiBzdHJva2U9IiNmZjljODIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTM0LDEyNiAxODQsMTI2IDE2MSwxNTIiIGZpbGw9IiNmMjZiNDkiLz48cG9seWdvbiBwb2ludHM9IjEzNCwxMjYgMTYxLDE1MiAxMzgsMTgwIiBmaWxsPSIjZTI1NzM3Ii8+PHBvbHlnb24gcG9pbnRzPSIxNjEsMTUyIDE4NCwxMjYgMTg4LDE3NiIgZmlsbD0iI2M3NDEyNCIvPjxwb2x5Z29uIHBvaW50cz0iMTM4LDE4MCAxNjEsMTUyIDE4OCwxNzYiIGZpbGw9IiM4ZjI3MTIiLz48cG9seWdvbiBwb2ludHM9IjE0NSwxMzcgMTc0LDEzNyAxNzcsMTY2IDE0OCwxNjkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZDhjYyIgc3Ryb2tlLW9wYWNpdHk9Ii40NSIgc3Ryb2tlLXdpZHRoPSIxLjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4="
  },
  {
    "id": "eggsoup-aurora-nyx",
    "name": "Aurora Nyx",
    "colors": {
      "canvas": "#131515",
      "chrome": "#131515",
      "toolbar": "#131515",
      "toolbarForeground": "#ced2d2",
      "toolbarBorder": "#1d2222",
      "toolbarControl": "#181b1b",
      "toolbarControlForeground": "#ced2d2",
      "toolbarControlHover": "#1f2222",
      "surface": "#1c2323",
      "surfaceRaised": "#181b1b",
      "surfaceOverlay": "#181b1b",
      "text": "#ced2d2",
      "textMuted": "#848b8b",
      "border": "#1d2222",
      "input": "#2b3232",
      "focus": "#239d6a",
      "accent": "#239d6a",
      "accentForeground": "#0c1313",
      "secondary": "#181b1b",
      "secondaryForeground": "#ced2d2",
      "muted": "#090f0f",
      "mutedForeground": "#848b8b",
      "placeholder": "#98a1a1",
      "secondaryLabel": "#848b8b",
      "iconMuted": "#848b8b",
      "error": "#df746d",
      "errorForeground": "#fad4d0",
      "errorSurface": "#4c1010",
      "warning": "#e2a85c",
      "warningForeground": "#eedbc4",
      "warningSurface": "#421e00",
      "update": "#67abe5",
      "updateForeground": "#cce1f4",
      "updateSurface": "#002a51",
      "accentSurface": "#202f2a",
      "accentSurfaceForeground": "#ced2d2",
      "messageSurface": "#13241a",
      "messageForeground": "#ced2d2",
      "messageAction": "#239d6a",
      "messageActionForeground": "#0c1313",
      "messageActionHover": "#35aa76",
      "codeBackground": "#090f0f",
      "codeForeground": "#ced2d2",
      "searchMatchBackground": "#204031",
      "searchMatchForeground": "#ced2d2",
      "searchMatchActiveBackground": "#256246",
      "searchMatchActiveForeground": "#ced2d2",
      "sidebar": "#090f0f",
      "sidebarForeground": "#ced2d2",
      "sidebarMutedForeground": "#848b8b",
      "sidebarControlSurface": "#181b1b",
      "sidebarRowHover": "#101616",
      "sidebarRowActive": "#1d2424",
      "sidebarRowSelected": "#262c2c",
      "sidebarBorder": "#181e1e",
      "terminalBackground": "#131515",
      "terminalForeground": "#ced2d2",
      "terminalCursor": "#dfe2e2",
      "terminalSelection": "#1e372b",
      "terminalScrollbar": "#181b1b",
      "terminalScrollbarHover": "#1f2222"
    },
    "layer1": "#181b1b",
    "layer2": "#1c2323",
    "layer3": "#262c2c",
    "skyBg": "#05080b",
    "panelBg": "#121818",
    "menuBg": "#101616",
    "gridAlpha": 0.5,
    "secondaryGlow": "#67abe5",
    "sendBase": "#090f0f",
    "sendText": "#e4f6ee",
    "sendHoverText": "#ffffff",
    "addedColor": "#239d6a",
    "doneColor": "#9cc2eb",
    "successColor": "#239d6a",
    "emblemFilter": "drop-shadow(0 0 6px rgba(35, 157, 106, 0.65)) drop-shadow(0 0 26px rgba(103, 171, 229, 0.36))",
    "preview": [
      "#131515",
      "#1c2323",
      "#239d6a",
      "#67abe5"
    ],
    "shiki": {
      "constant": "#67abe5",
      "string": "#239d6a",
      "comment": "#848b8b",
      "keyword": "#df746d",
      "parameter": "#e2a85c",
      "function": "#50c998",
      "stringExpression": "#50c998",
      "punctuation": "#848b8b",
      "link": "#67abe5"
    },
    "art": "data:image/png;base64,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",
    "emblem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PHBvbHlnb24gcG9pbnRzPSIzNCwxNzIgNjgsMTI4IDg0LDE4NCIgZmlsbD0iIzEzNGQzNiIvPjxwb2x5Z29uIHBvaW50cz0iNjgsMTI4IDExMiwxMzggODQsMTg0IiBmaWxsPSIjMWI3NTUwIi8+PHBvbHlnb24gcG9pbnRzPSI2OCwxMjggOTYsODYgMTEyLDEzOCIgZmlsbD0iIzIzOWQ2YSIvPjxwb2x5Z29uIHBvaW50cz0iOTYsODYgMTQ0LDk4IDExMiwxMzgiIGZpbGw9IiM1MGM5OTgiLz48cG9seWdvbiBwb2ludHM9Ijk2LDg2IDEyOCw0NiAxNDQsOTgiIGZpbGw9IiM2N2FiZTUiLz48cG9seWdvbiBwb2ludHM9IjEyOCw0NiAxNzYsMzQgMTQ0LDk4IiBmaWxsPSIjYThkY2ZmIi8+PHBvbHlnb24gcG9pbnRzPSIxNDQsOTggMTc2LDM0IDE4Niw3NCIgZmlsbD0iIzNhODZjNCIvPjxwb2x5Z29uIHBvaW50cz0iMTI4LDQ2IDE3NiwzNCAxNDAsNjYiIGZpbGw9IiNlYWY3ZmYiLz48cGF0aCBkPSJNMzQgMTcyIEw2OCAxMjggTDk2IDg2IEwxMjggNDYgTDE3NiAzNCBMMTg2IDc0IEwxNDQgOTggTDExMiAxMzggTDg0IDE4NCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNkZmY2ZmYiIHN0cm9rZS1vcGFjaXR5PSIuNjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik02OCAxMjggTDExMiAxMzggTTk2IDg2IEwxNDQgOTggTTEyOCA0NiBMMTQ0IDk4IE02OCAxMjggTDg0IDE4NCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGZmNmZmIiBzdHJva2Utb3BhY2l0eT0iLjQyIiBzdHJva2Utd2lkdGg9IjEuNCIvPjxwb2x5Z29uIHBvaW50cz0iNjQsMzQgNzEsNTUgOTIsNjIgNzEsNjkgNjQsOTAgNTcsNjkgMzYsNjIgNTcsNTUiIGZpbGw9IiM2N2FiZTUiIHN0cm9rZT0iI2VhZjdmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjY0LDM0IDY0LDYyIDU3LDU1IiBmaWxsPSIjZmZmZmZmIi8+PHBvbHlnb24gcG9pbnRzPSI2NCwzNCA3MSw1NSA2NCw2MiIgZmlsbD0iI2JmZTZmZiIvPjxwb2x5Z29uIHBvaW50cz0iNjQsNjIgOTIsNjIgNzEsNjkiIGZpbGw9IiNlMmE4NWMiLz48cG9seWdvbiBwb2ludHM9IjY0LDYyIDU3LDY5IDM2LDYyIiBmaWxsPSIjZTJhODVjIi8+PGNpcmNsZSBjeD0iNjQiIGN5PSI2MiIgcj0iMy41IiBmaWxsPSIjZmZmN2RiIi8+PC9zdmc+"
  },
  {
    "id": "eggsoup-gruvbox-nyx",
    "name": "Gruvbox Nyx",
    "colors": {
      "canvas": "#282828",
      "chrome": "#282828",
      "toolbar": "#282828",
      "toolbarForeground": "#ebdbb2",
      "toolbarBorder": "#3c3836",
      "toolbarControl": "#3c3836",
      "toolbarControlForeground": "#ebdbb2",
      "toolbarControlHover": "#504945",
      "surface": "#32302f",
      "surfaceRaised": "#3c3836",
      "surfaceOverlay": "#3c3836",
      "text": "#ebdbb2",
      "textMuted": "#bdae93",
      "border": "#3c3836",
      "input": "#504945",
      "focus": "#fabd2f",
      "accent": "#fabd2f",
      "accentForeground": "#282828",
      "secondary": "#32302f",
      "secondaryForeground": "#ebdbb2",
      "muted": "#1d2021",
      "mutedForeground": "#a89984",
      "placeholder": "#d5c4a1",
      "secondaryLabel": "#bdae93",
      "iconMuted": "#a89984",
      "error": "#ff6b55",
      "errorForeground": "#ffbdb0",
      "errorSurface": "#3c2220",
      "warning": "#fabd2f",
      "warningForeground": "#f5d98a",
      "warningSurface": "#3a3018",
      "update": "#8ec07c",
      "updateForeground": "#bfe0ac",
      "updateSurface": "#28362a",
      "accentSurface": "#3c3836",
      "accentSurfaceForeground": "#ebdbb2",
      "messageSurface": "#35332f",
      "messageForeground": "#fff7ce",
      "messageAction": "#fabd2f",
      "messageActionForeground": "#282828",
      "messageActionHover": "#fe8019",
      "codeBackground": "#1d2021",
      "codeForeground": "#ebdbb2",
      "searchMatchBackground": "#5c4418",
      "searchMatchForeground": "#fbf1c7",
      "searchMatchActiveBackground": "#fe8019",
      "searchMatchActiveForeground": "#1d2021",
      "sidebar": "#1d2021",
      "sidebarForeground": "#ebdbb2",
      "sidebarMutedForeground": "#a89984",
      "sidebarControlSurface": "#32302f",
      "sidebarRowHover": "#32302f",
      "sidebarRowActive": "#3c3836",
      "sidebarRowSelected": "#3c3836",
      "sidebarBorder": "#3c3836",
      "terminalBackground": "#282828",
      "terminalForeground": "#ebdbb2",
      "terminalCursor": "#fbf1c7",
      "terminalSelection": "#504945",
      "terminalScrollbar": "#504945",
      "terminalScrollbarHover": "#665c54"
    },
    "layer1": "#32302f",
    "layer2": "#3c3836",
    "layer3": "#504945",
    "skyBg": "#282828",
    "panelBg": "#2a2827",
    "menuBg": "#242221",
    "gridAlpha": 0.6,
    "secondaryGlow": "#fe8019",
    "sendBase": "#1d2021",
    "sendText": "#fbf1c7",
    "sendHoverText": "#ffffff",
    "addedColor": "#b8bb26",
    "doneColor": "#d3869b",
    "successColor": "#8ec07c",
    "emblemFilter": "drop-shadow(0 0 6px rgba(254, 128, 25, 0.62)) drop-shadow(0 0 26px rgba(250, 189, 47, 0.36))",
    "preview": [
      "#282828",
      "#32302f",
      "#fabd2f",
      "#fe8019"
    ],
    "shiki": {
      "constant": "#d3869b",
      "string": "#b8bb26",
      "comment": "#a89984",
      "keyword": "#fb4934",
      "parameter": "#fe8019",
      "function": "#fabd2f",
      "stringExpression": "#b8bb26",
      "punctuation": "#bdae93",
      "link": "#8ec07c"
    },
    "art": "data:image/png;base64,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",
    "emblem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnNTEiIHgxPSIwIiB5MT0iMCIgeDI9IjAiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZmJmMWM3Ii8+PHN0b3Agb2Zmc2V0PSIzNSUiIHN0b3AtY29sb3I9IiNmYWJkMmYiLz48c3RvcCBvZmZzZXQ9IjcyJSIgc3RvcC1jb2xvcj0iI2ZlODAxOSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2NjMjQxZCIvPjwvbGluZWFyR3JhZGllbnQ+PG1hc2sgaWQ9Im01MSI+PHJlY3Qgd2lkdGg9IjIyMCIgaGVpZ2h0PSIyMjAiIGZpbGw9IiNmZmYiLz48cmVjdCB4PSIyMCIgeT0iMTE0IiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYiIGZpbGw9IiMwMDAiLz48cmVjdCB4PSIyMCIgeT0iMTMwIiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjkiIGZpbGw9IiMwMDAiLz48cmVjdCB4PSIyMCIgeT0iMTQ5IiB3aWR0aD0iMTgwIiBoZWlnaHQ9IjEyIiBmaWxsPSIjMDAwIi8+PHJlY3QgeD0iMjAiIHk9IjE3MCIgd2lkdGg9IjE4MCIgaGVpZ2h0PSIxNiIgZmlsbD0iIzAwMCIvPjwvbWFzaz48L2RlZnM+PGNpcmNsZSBjeD0iMTEwIiBjeT0iMTA4IiByPSI3NiIgZmlsbD0idXJsKCNnNTEpIiBtYXNrPSJ1cmwoI201MSkiLz48bGluZSB4MT0iNDIiIHkxPSIxODgiIHgyPSIxNzgiIHkyPSIxODgiIHN0cm9rZT0iIzhlYzA3YyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4="
  }
];
    const THEMES = [
      ...BASE_THEMES.slice(0, 2),
      ...NYX_SPECS.map(buildNyxTheme),
      BASE_THEMES[2],
    ];
    const NS = 'eggsoup.themes';
    const STORAGE_KEY = 'eggsoup-dsh-themes:selected';
    const DEFAULT_THEME = 'eggsoup-vitesse-nyx';
    const OVERRIDE_SOURCE = 'eggsoup-dsh-themes';

    // Theme previews borrow the real pixel-art backdrop and the dark palette
    // that gives each theme its identity. Ocean has no art, so its accent glow
    // substitutes for the sky.
    const previewArt = theme => {
      const match = /--nyx-art: url\("(data:image\/png;base64,[^"]+)"\)/.exec(theme.css);
      return match === null ? null : match[1];
    };
    const previewPalette = theme => {
      const token = name => theme.tokens[name]?.dark;
      return {
        bg: token('--dsw-alias-bg-base') ?? theme.preview?.[0],
        sidebar: token('--dsw-specific-sidebar-fill') ?? token('--dsw-alias-bg-layer-1') ?? theme.preview?.[1],
        surface: token('--dsw-alias-bg-layer-2') ?? theme.preview?.[1],
        input: token('--dsw-specific-input-major') ?? token('--dsw-alias-bg-layer-2') ?? theme.preview?.[1],
        bubble: token('--dsw-specific-bubble') ?? token('--dsw-alias-bg-layer-2') ?? theme.preview?.[1],
        accent: token('--dsw-alias-brand-primary') ?? theme.preview?.[2],
        secondary: theme.darkOnly
          ? theme.preview?.[3] ?? token('--dsw-alias-border-l3')
          : token('--dsw-alias-brand-primary') ?? theme.preview?.[2],
        text: token('--dsw-alias-label-primary') ?? theme.preview?.[3],
        muted: token('--dsw-alias-label-secondary') ?? theme.preview?.[2],
        border: token('--dsw-alias-border-l2') ?? theme.preview?.[1],
      };
    };
    const previewBackdrop = theme => {
      const art = previewArt(theme);
      if (art !== null) return `url("${art}")`;
      const palette = previewPalette(theme);
      return `radial-gradient(120% 90% at 78% 18%, color-mix(in srgb, ${palette.accent} 30%, transparent), transparent 62%), linear-gradient(155deg, ${palette.bg}, ${palette.surface})`;
    };
    const previewStyle = theme => {
      if (theme.id === null) return undefined;
      const palette = previewPalette(theme);
      return {
        '--eggsoup-pv-bg': palette.bg,
        '--eggsoup-pv-sidebar': palette.sidebar,
        '--eggsoup-pv-surface': palette.surface,
        '--eggsoup-pv-input': palette.input,
        '--eggsoup-pv-bubble': palette.bubble,
        '--eggsoup-pv-accent': palette.accent,
        '--eggsoup-pv-secondary': palette.secondary,
        '--eggsoup-pv-text': palette.text,
        '--eggsoup-pv-muted': palette.muted,
        '--eggsoup-pv-border': palette.border,
        '--eggsoup-pv-art': previewBackdrop(theme),
      };
    };
    const UI_CSS = `
/* Themes settings page: the header block follows host settings sections,
   and the picker lays its cards out in a responsive grid. */
.eggsoup-themes-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 720px;
  color: var(--dsw-alias-label-primary);
}
.eggsoup-themes-title { margin: 0; font-size: 18px; font-weight: 600; }
.eggsoup-themes-description {
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: var(--dsw-alias-label-tertiary);
}
.eggsoup-themes-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 12px;
}
.eggsoup-theme {
  /* Defaults paint the current DSH appearance; theme cards override every
     color plus the backdrop from the theme's own palette. */
  --eggsoup-pv-bg: var(--dsw-alias-bg-base);
  --eggsoup-pv-sidebar: var(--dsw-alias-bg-layer-1);
  --eggsoup-pv-surface: var(--dsw-alias-bg-layer-2);
  --eggsoup-pv-input: var(--dsw-alias-bg-layer-2);
  --eggsoup-pv-bubble: var(--dsw-alias-bg-layer-2);
  --eggsoup-pv-accent: var(--dsw-alias-brand-primary);
  --eggsoup-pv-secondary: var(--dsw-alias-border-l3);
  --eggsoup-pv-text: var(--dsw-alias-label-primary);
  --eggsoup-pv-muted: var(--dsw-alias-label-secondary);
  --eggsoup-pv-border: var(--dsw-alias-border-l2);
  --eggsoup-pv-art: linear-gradient(155deg, var(--dsw-alias-bg-base), var(--dsw-alias-bg-layer-2));
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
  padding: 8px;
  border: 0.5px solid var(--dsw-alias-settings-card-stroke);
  border-radius: var(--dsw-radius-xl);
  background: var(--dsw-alias-settings-card-fill);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 14px;
  line-height: 22px;
  text-align: left;
  cursor: pointer;
  transition: border-color .16s, background .16s;
}
@media (hover: hover) {
  .eggsoup-theme:hover:not([aria-pressed='true']) { background: var(--dsw-alias-interactive-bg-hover); }
}
.eggsoup-theme[aria-pressed='true'] {
  border-color: var(--dsw-alias-border-selected);
  background: var(--dsw-alias-bg-module-platform);
}
.eggsoup-theme:focus-visible {
  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));
  outline-offset: -2px;
}
.eggsoup-theme-preview {
  position: relative;
  display: flex;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: var(--dsw-radius-lg);
  background-color: var(--eggsoup-pv-bg);
  background-image: var(--eggsoup-pv-art);
  background-position: right bottom;
  background-size: cover;
  box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.16);
}
.eggsoup-theme-preview-default {
  align-items: center;
  justify-content: center;
  background-color: var(--dsw-alias-bg-layer-1);
  background-image: radial-gradient(circle, var(--dsw-alias-border-l2) 0.5px, transparent 0.6px);
  background-size: 8px 8px;
  box-shadow: inset 0 0 0 0.5px var(--dsw-alias-border-l2);
}
.eggsoup-preview-default-word {
  padding: 3px 8px;
  border-radius: 6px;
  background: var(--dsw-alias-bg-layer-2);
  color: var(--dsw-alias-label-secondary);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.08em;
}
.eggsoup-preview-sidebar {
  box-sizing: border-box;
  flex: none;
  width: 27%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px 6px;
  background: var(--eggsoup-pv-sidebar);
  border-right: 0.5px solid var(--eggsoup-pv-border);
}
.eggsoup-preview-brand {
  width: 52%;
  height: 5px;
  margin-bottom: 2px;
  border-radius: 2px;
  background: var(--eggsoup-pv-text);
  opacity: 0.8;
}
.eggsoup-preview-row {
  width: 100%;
  height: 5px;
  border-radius: 2px;
  background: var(--eggsoup-pv-muted);
  opacity: 0.4;
}
.eggsoup-preview-row-wide { width: 82%; }
.eggsoup-preview-main {
  box-sizing: border-box;
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  background: color-mix(in srgb, var(--eggsoup-pv-surface) 68%, transparent);
}
.eggsoup-preview-bubble {
  align-self: flex-end;
  width: 48%;
  height: 13px;
  border: 0.5px solid color-mix(in srgb, var(--eggsoup-pv-secondary) 55%, transparent);
  border-radius: 5px;
  background: linear-gradient(90deg,
    color-mix(in srgb, var(--eggsoup-pv-accent) 28%, var(--eggsoup-pv-bubble)),
    var(--eggsoup-pv-bubble));
}
.eggsoup-preview-line {
  width: 90%;
  height: 4px;
  border-radius: 2px;
  background: var(--eggsoup-pv-muted);
  opacity: 0.38;
}
.eggsoup-preview-line-wide { width: 96%; }
.eggsoup-preview-line-short { width: 62%; }
.eggsoup-preview-composer {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 5px;
  height: 18px;
  margin-top: auto;
  padding: 0 5px;
  border: 0.5px solid var(--eggsoup-pv-border);
  border-radius: 5px;
  background: var(--eggsoup-pv-input);
}
.eggsoup-preview-composer-line {
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background: var(--eggsoup-pv-muted);
  opacity: 0.4;
}
.eggsoup-preview-send {
  flex: none;
  width: 9px;
  height: 9px;
  border-radius: 2px;
  background: var(--eggsoup-pv-secondary);
}
.eggsoup-theme-meta {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  padding: 0 2px 2px;
}
.eggsoup-theme-name { min-width: 0; font-size: 14px; line-height: 22px; }
.eggsoup-theme-badge {
  flex: none;
  padding: 0 7px;
  border: 0.5px solid var(--dsw-alias-border-l2);
  border-radius: 999px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-secondary);
  font-size: 11px;
  line-height: 17px;
  white-space: nowrap;
}
.eggsoup-theme-check {
  position: absolute;
  top: 12px;
  right: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--eggsoup-pv-accent);
  color: var(--eggsoup-pv-bg);
  font-size: 11px;
  font-weight: 700;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.32);
}
`;

    const byId = id => THEMES.find(theme => theme.id === id);
    let themeService = null;
    let overrideDisposer = null;
    let selectedId = null;
    let themeCssTag = null;
    const listeners = new Set();
    const notify = () => { for (const listener of listeners) listener(); };
    const setSelected = id => {
      if (selectedId === id) return;
      selectedId = id;
      notify();
    };
    const setThemeCss = id => {
      if (themeCssTag !== null) themeCssTag.textContent = byId(id)?.css ?? '';
    };
    const readStored = () => {
      try { return window.localStorage.getItem(STORAGE_KEY); } catch { return null; }
    };
    const writeStored = value => {
      try {
        if (value === null) window.localStorage.removeItem(STORAGE_KEY);
        else window.localStorage.setItem(STORAGE_KEY, value);
      } catch {}
    };
    const applySelection = (id) => {
      if (themeService === null) return false;
      if (overrideDisposer !== null) {
        overrideDisposer();
        overrideDisposer = null;
      }
      const definition = byId(id);
      if (definition !== undefined) {
        overrideDisposer = themeService.overrideTokens(OVERRIDE_SOURCE, definition.tokens);
      }
      setThemeCss(definition?.id ?? null);
      setSelected(definition?.id ?? null);
      return true;
    };
    const manager = {
      list: () => THEMES,
      selected: () => selectedId,
      subscribe: listener => {
        listeners.add(listener);
        return () => listeners.delete(listener);
      },
      select: id => {
        if (!applySelection(id)) return;
        writeStored(id === null ? 'builtin' : id);
      },
    };

    function ThemeIcon({ size = 16, active = false }) {
      return h('svg', {
        width: size,
        height: size,
        viewBox: '0 0 16 16',
        fill: 'none',
        'aria-hidden': 'true',
        focusable: 'false',
      },
        h('rect', {
          x: 2.5,
          y: 2.5,
          width: 7.5,
          height: 7.5,
          rx: 2,
          stroke: 'currentColor',
          strokeWidth: 1.3,
          opacity: active ? 1 : 0.75,
        }),
        h('rect', {
          x: 6,
          y: 6,
          width: 7.5,
          height: 7.5,
          rx: 2,
          fill: 'currentColor',
          fillOpacity: 0.18,
          stroke: 'currentColor',
          strokeWidth: 1.3,
        }),
      );
    }

    function ThemePreview() {
      return h('span', { className: 'eggsoup-theme-preview', 'aria-hidden': 'true' },
        h('span', { className: 'eggsoup-preview-sidebar' },
          h('span', { className: 'eggsoup-preview-brand' }),
          h('span', { className: 'eggsoup-preview-row eggsoup-preview-row-wide' }),
          h('span', { className: 'eggsoup-preview-row' }),
          h('span', { className: 'eggsoup-preview-row eggsoup-preview-row-wide' }),
          h('span', { className: 'eggsoup-preview-row' }),
        ),
        h('span', { className: 'eggsoup-preview-main' },
          h('span', { className: 'eggsoup-preview-bubble' }),
          h('span', { className: 'eggsoup-preview-line eggsoup-preview-line-wide' }),
          h('span', { className: 'eggsoup-preview-line' }),
          h('span', { className: 'eggsoup-preview-line eggsoup-preview-line-short' }),
          h('span', { className: 'eggsoup-preview-composer' },
            h('span', { className: 'eggsoup-preview-composer-line' }),
            h('span', { className: 'eggsoup-preview-send' }),
          ),
        ),
      );
    }

    function ThemeSection({ t }) {
      const [selected, setSelected] = React.useState(manager.selected());
      React.useEffect(() => manager.subscribe(() => setSelected(manager.selected())), []);
      const text = (key, fallback) => {
        const value = typeof t === 'function' ? t(key) : undefined;
        return value === undefined || value === key ? fallback : value;
      };
      const options = [{ id: null, name: text('theme.default', 'DSH default'), preview: null }].concat(THEMES);
      return h('section', { className: 'eggsoup-themes-section' },
        h('h2', { className: 'eggsoup-themes-title' }, text('title', 'Themes')),
        h('p', { className: 'eggsoup-themes-description' }, text('description', 'Choose a theme for the interface.')),
        h('div', { className: 'eggsoup-themes-list', role: 'group', 'aria-label': text('title', 'Themes') },
          options.map(theme => h('button', {
            key: theme.id ?? 'default',
            type: 'button',
            className: 'eggsoup-theme',
            style: previewStyle(theme),
            'aria-pressed': selected === theme.id,
            onClick: () => manager.select(theme.id),
          },
            theme.id === null
              ? h('span', {
                  key: 'preview',
                  className: 'eggsoup-theme-preview eggsoup-theme-preview-default',
                  'aria-hidden': 'true',
                }, h('span', { className: 'eggsoup-preview-default-word' }, 'DSH'))
              : h(ThemePreview, { key: 'preview' }),
            h('span', { className: 'eggsoup-theme-meta' },
              h('span', { className: 'eggsoup-theme-name' }, text('theme.' + (theme.id ?? 'default'), theme.name)),
              h('span', { className: 'eggsoup-theme-badge' },
                theme.id === null
                  ? text('badge.default', 'Follows appearance')
                  : theme.darkOnly
                    ? text('badge.darkOnly', 'Dark only')
                    : text('badge.lightAndDark', 'Light + dark'),
              ),
            ),
            selected === theme.id ? h('span', { className: 'eggsoup-theme-check', 'aria-hidden': 'true' }, '✓') : null,
          )),
        ),
      );
    }

    const installTag = (id, text) => {
      document.querySelector(`style[data-plugin-css="${id}"]`)?.remove();
      const tag = document.createElement('style');
      tag.dataset.plugin = 'eggsoup-dsh-themes';
      tag.dataset.pluginCss = id;
      tag.textContent = text;
      document.head.appendChild(tag);
      return tag;
    };

    return {
      inject: ['theme', 'slots', 'locale'],
      apply(ctx) {
        const theme = ctx.get('theme');
        if (theme === undefined) return;
        themeService = theme;
        const t = ctx.locale.bind(NS);

        ctx.effect(() => ctx.locale.register(NS, {
          en: {
            title: 'Themes',
            description: 'Choose a theme. Themes follow the current Appearance setting; the Nyx themes are dark-only. Picking DSH default removes the theme layer.',
            'theme.default': 'DSH default',
            'theme.eggsoup-vitesse-nyx': 'Vitesse Nyx',
            'theme.eggsoup-vitesse-nyx-emerald': 'Vitesse Nyx Emerald',
            'theme.eggsoup-catppuccin-mocha-nyx': 'Catppuccin Mocha Nyx',
            'theme.eggsoup-inkstone-xuanmo-nyx': 'Inkstone Xuanmo Nyx',
            'theme.eggsoup-aurora-nyx': 'Aurora Nyx',
            'theme.eggsoup-gruvbox-nyx': 'Gruvbox Nyx',
            'theme.eggsoup-ocean': 'Ocean',
            'badge.default': 'Follows appearance',
            'badge.darkOnly': 'Dark only',
            'badge.lightAndDark': 'Light + dark',
          },
          zh: {
            title: '主题',
            description: '选择界面主题。主题会跟随当前外观设置，Nyx 系列主题仅提供深色配色；选择“DSH 默认”会移除主题层。',
            'theme.default': 'DSH 默认',
            'theme.eggsoup-vitesse-nyx': 'Vitesse Nyx',
            'theme.eggsoup-vitesse-nyx-emerald': 'Vitesse Nyx Emerald',
            'theme.eggsoup-catppuccin-mocha-nyx': 'Catppuccin Mocha Nyx',
            'theme.eggsoup-inkstone-xuanmo-nyx': 'Inkstone Xuanmo Nyx',
            'theme.eggsoup-aurora-nyx': 'Aurora Nyx',
            'theme.eggsoup-gruvbox-nyx': 'Gruvbox Nyx',
            'theme.eggsoup-ocean': 'Ocean',
            'badge.default': '跟随外观',
            'badge.darkOnly': '仅深色',
            'badge.lightAndDark': '浅色 + 深色',
          },
        }), 'eggsoup-themes: dictionaries');

        ctx.effect(() => {
          const tag = installTag('eggsoup-dsh-themes/ui.css', UI_CSS);
          return () => tag.remove();
        }, 'eggsoup-themes: settings styles');

        ctx.effect(() => {
          themeCssTag = installTag('eggsoup-dsh-themes/theme.css', '');
          return () => {
            themeCssTag?.remove();
            themeCssTag = null;
          };
        }, 'eggsoup-themes: theme styles');

        ctx.effect(() => () => {
          overrideDisposer?.();
          overrideDisposer = null;
        }, 'eggsoup-themes: token layer');

        const stored = readStored();
        const initial = stored === null
          ? DEFAULT_THEME
          : stored === 'builtin'
            ? null
            : byId(stored) !== undefined ? stored : null;
        applySelection(initial);
        if (initial !== null) writeStored(initial);

        ctx.effect(() => ctx.slots.inject('settings.section', () => ctx.slots.register({
          name: 'settings.section',
          id: 'eggsoup-themes',
          order: 5,
          label: () => t('title'),
          locale: NS,
        }, ThemeSection)), 'eggsoup-themes: settings section');

        ctx.effect(() => ctx.slots.inject('settings.section.icon', () => ctx.slots.register({
          name: 'settings.section.icon',
          id: 'eggsoup-themes',
        }, ThemeIcon)), 'eggsoup-themes: settings icon');
      },
    };
  },
});
