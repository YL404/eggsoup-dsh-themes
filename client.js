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
    const THEMES = [
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
    "css": "\n/* Vitesse Nyx surface skin (DSH port).\n   Dark mode only: the light palette keeps DSH's own tokens. */\nbody[data-ds-dark-theme] {\n  --nyx-art: url(\"data:image/png;base64,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\");\n  --nyx-grid:\n    linear-gradient(90deg, rgba(0, 0, 0, 0.5) 1px, transparent 1px),\n    linear-gradient(0deg, rgba(0, 0, 0, 0.5) 1px, transparent 1px);\n  --nyx-w: max(1920px, 100vw, calc(100dvh * 16 / 9));\n  --nyx-d: calc(var(--nyx-w) / 400);\n}\n\n/* One fixed pixel-art sky behind every column: the frame is the stacking\n   context, so the layer sits above its base fill and below column content. */\nbody[data-ds-dark-theme] [data-slot='root'] > div {\n  isolation: isolate;\n}\nbody[data-ds-dark-theme] [data-slot='root'] > div::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  pointer-events: none;\n  background-image: var(--nyx-grid), var(--nyx-art);\n  background-size: var(--nyx-d) var(--nyx-d), var(--nyx-d) var(--nyx-d), var(--nyx-w) auto;\n  background-position: right bottom;\n  background-repeat: repeat, repeat, no-repeat;\n  image-rendering: pixelated;\n  contain: strict;\n}\n\n/* DSH paints the darwin centre and right tracks with an opaque base fill;\n   clear them so the sky can show through the conversation surfaces. */\nbody[data-ds-dark-theme] [data-slot='root'] > div > div:has([data-slot='sidebar']) {\n  background: transparent !important;\n  border-right-color: #0e0c0a !important;\n}\nbody[data-ds-dark-theme] [data-slot='root'] > div > div:has([data-slot='main']) {\n  background: transparent !important;\n  border-left-color: rgba(255, 255, 255, 0.06) !important;\n}\nbody[data-ds-dark-theme] [data-slot='root'] > div > div:has([data-slot='rightbar']) {\n  background: transparent !important;\n}\n\n/* Sidebar: one translucent warm-black sheet over the sky. */\nbody[data-ds-dark-theme] [data-slot='sidebar'] > div {\n  background:\n    linear-gradient(to bottom, rgba(189, 151, 106, 0.05) 0%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.18) 78%, rgba(0, 0, 0, 0.38) 100%),\n    rgba(11, 9, 7, 0.88) !important;\n}\n\n/* Chat: transparent on the empty home, near-opaque over the sky once messages exist. */\nbody[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase] {\n  background: rgba(18, 18, 18, 0.93) !important;\n}\nbody[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase='hero'] {\n  background: transparent !important;\n}\nbody[data-ds-dark-theme] [data-slot='conversation.header'] header {\n  background: rgba(18, 18, 18, 0.93) !important;\n  border-bottom-color: rgba(255, 255, 255, 0.06) !important;\n}\nbody[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase='hero'] [data-slot='conversation.header'] header {\n  background: transparent !important;\n  border-bottom-color: transparent !important;\n}\n/* Only the open panel paints; the closed one stays mounted off-track. */\nbody[data-ds-dark-theme] [data-sidebar-right-panel][data-sidebar-right-open] {\n  background-color: rgba(13, 12, 10, 0.93) !important;\n}\n\n/* Composer card and send action: warm glass with the theme's inset light. */\nbody[data-ds-dark-theme] [data-composer-card] {\n  background-image: linear-gradient(135deg, rgba(189, 151, 106, 0.10), rgba(0, 0, 0, 0) 55%) !important;\n  box-shadow: var(--dsw-elevation-soft), inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;\n}\nbody[data-ds-dark-theme] [data-composer-card] button[class*='primary']:not(:disabled) {\n  background:\n    radial-gradient(100% 60% at 50% 0%, rgba(255, 255, 255, 0.12), transparent 70%),\n    linear-gradient(150deg, rgba(189, 151, 106, 0.50), rgba(77, 147, 117, 0.15) 60%, rgba(47, 107, 85, 0.15)),\n    #14110d !important;\n  color: #f7ecd9 !important;\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, 0.18),\n    inset 0 -8px 14px -10px rgba(217, 189, 146, 0.80),\n    0 0 0 1px rgba(224, 203, 168, 0.22) !important;\n}\nbody[data-ds-dark-theme] [data-composer-card] button[class*='primary']:not(:disabled):hover {\n  background:\n    radial-gradient(100% 60% at 50% 0%, rgba(255, 255, 255, 0.20), transparent 70%),\n    linear-gradient(150deg, rgba(189, 151, 106, 0.62), rgba(77, 147, 117, 0.20) 60%, rgba(47, 107, 85, 0.20)),\n    #17130f !important;\n  color: #fff6e8 !important;\n}\n\n/* User bubble: the Nyx warm gradient edge plus the inset hairline. */\nbody[data-ds-dark-theme] [data-message-bubble] {\n  background:\n    linear-gradient(90deg, rgba(189, 151, 106, 0.18) 0%, rgba(77, 147, 117, 0.06) 60%, rgba(77, 147, 117, 0) 100%),\n    rgba(25, 36, 30, 0.72) !important;\n  box-shadow: inset 0 -1px 0 rgba(189, 151, 106, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.04) !important;\n  border-radius: 14px !important;\n}\n\n/* Empty home: the cream crescent floats above the composer card. */\nbody[data-ds-dark-theme] [data-content-phase='hero'] [data-composer-card] {\n  isolation: isolate;\n}\nbody[data-ds-dark-theme] [data-content-phase='hero'] [data-composer-card]::before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  bottom: calc(100% + 150px);\n  width: clamp(100px, 10vw, 140px);\n  aspect-ratio: 1;\n  border-radius: 50%;\n  transform: translateX(-50%);\n  z-index: 0;\n  pointer-events: none;\n  background: #f7ecd9;\n  -webkit-mask-image: radial-gradient(circle at 66% 36%, transparent 0 46%, #000 48%);\n  mask-image: radial-gradient(circle at 66% 36%, transparent 0 46%, #000 48%);\n  filter: drop-shadow(0 0 26px rgba(189, 151, 106, 0.40));\n  opacity: 0.78;\n}\nbody[data-ds-dark-theme] [data-content-phase='hero'] [data-composer-card]::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  bottom: calc(100% + 150px);\n  width: calc(clamp(100px, 10vw, 140px) * 2.8);\n  aspect-ratio: 1;\n  transform: translate(-50%, 4%);\n  z-index: -1;\n  pointer-events: none;\n  background: radial-gradient(circle closest-side, rgba(18, 18, 18, 0.90) 0%, rgba(18, 18, 18, 0.58) 55%, transparent 100%);\n}\n",
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
    "css": "\n/* Vitesse Nyx Emerald surface skin (DSH port).\n   Dark mode only: the light palette keeps DSH's own tokens. */\nbody[data-ds-dark-theme] {\n  --nyx-art: url(\"data:image/png;base64,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\");\n  --nyx-grid:\n    linear-gradient(90deg, rgba(0, 0, 0, 0.5) 1px, transparent 1px),\n    linear-gradient(0deg, rgba(0, 0, 0, 0.5) 1px, transparent 1px);\n  --nyx-w: max(1920px, 100vw, calc(100dvh * 16 / 9));\n  --nyx-d: calc(var(--nyx-w) / 400);\n}\n\n/* One fixed pixel-art sky behind every column: the frame is the stacking\n   context, so the layer sits above its base fill and below column content. */\nbody[data-ds-dark-theme] [data-slot='root'] > div {\n  isolation: isolate;\n}\nbody[data-ds-dark-theme] [data-slot='root'] > div::before {\n  content: '';\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  pointer-events: none;\n  background-image: var(--nyx-grid), var(--nyx-art);\n  background-size: var(--nyx-d) var(--nyx-d), var(--nyx-d) var(--nyx-d), var(--nyx-w) auto;\n  background-position: right bottom;\n  background-repeat: repeat, repeat, no-repeat;\n  image-rendering: pixelated;\n  contain: strict;\n}\n\n/* DSH paints the darwin centre and right tracks with an opaque base fill;\n   clear them so the sky can show through the conversation surfaces. */\nbody[data-ds-dark-theme] [data-slot='root'] > div > div:has([data-slot='sidebar']) {\n  background: transparent !important;\n  border-right-color: #080c0a !important;\n}\nbody[data-ds-dark-theme] [data-slot='root'] > div > div:has([data-slot='main']) {\n  background: transparent !important;\n  border-left-color: rgba(255, 255, 255, 0.06) !important;\n}\nbody[data-ds-dark-theme] [data-slot='root'] > div > div:has([data-slot='rightbar']) {\n  background: transparent !important;\n}\n\n/* Sidebar: one translucent green-black sheet over the sky. */\nbody[data-ds-dark-theme] [data-slot='sidebar'] > div {\n  background:\n    linear-gradient(to bottom, rgba(77, 147, 117, 0.06) 0%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.18) 78%, rgba(0, 0, 0, 0.38) 100%),\n    rgba(7, 11, 9, 0.88) !important;\n}\n\n/* Chat: transparent on the empty home, near-opaque over the sky once messages exist. */\nbody[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase] {\n  background: rgba(13, 18, 16, 0.93) !important;\n}\nbody[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase='hero'] {\n  background: transparent !important;\n}\nbody[data-ds-dark-theme] [data-slot='conversation.header'] header {\n  background: rgba(11, 16, 14, 0.93) !important;\n  border-bottom-color: rgba(255, 255, 255, 0.06) !important;\n}\nbody[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase='hero'] [data-slot='conversation.header'] header {\n  background: transparent !important;\n  border-bottom-color: transparent !important;\n}\n/* Only the open panel paints; the closed one stays mounted off-track. */\nbody[data-ds-dark-theme] [data-sidebar-right-panel][data-sidebar-right-open] {\n  background-color: rgba(8, 16, 13, 0.93) !important;\n}\n\n/* Composer card and send action: green glass with the theme's inset light. */\nbody[data-ds-dark-theme] [data-composer-card] {\n  background-image: linear-gradient(135deg, rgba(77, 147, 117, 0.10), rgba(0, 0, 0, 0) 55%) !important;\n  box-shadow: var(--dsw-elevation-soft), inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;\n}\nbody[data-ds-dark-theme] [data-composer-card] button[class*='primary']:not(:disabled) {\n  background:\n    radial-gradient(100% 60% at 50% 0%, rgba(255, 255, 255, 0.12), transparent 70%),\n    linear-gradient(150deg, rgba(77, 147, 117, 0.55), rgba(47, 107, 85, 0.16) 60%, rgba(28, 58, 47, 0.16)),\n    #0b1210 !important;\n  color: #d8efdd !important;\n  box-shadow:\n    inset 0 1px 0 rgba(255, 255, 255, 0.18),\n    inset 0 -8px 14px -10px rgba(143, 206, 176, 0.80),\n    0 0 0 1px rgba(184, 223, 199, 0.22) !important;\n}\nbody[data-ds-dark-theme] [data-composer-card] button[class*='primary']:not(:disabled):hover {\n  background:\n    radial-gradient(100% 60% at 50% 0%, rgba(255, 255, 255, 0.20), transparent 70%),\n    linear-gradient(150deg, rgba(77, 147, 117, 0.68), rgba(47, 107, 85, 0.22) 60%, rgba(28, 58, 47, 0.22)),\n    #0d1713 !important;\n  color: #e8f5ec !important;\n}\n\n/* User bubble: the Nyx gradient edge plus the inset hairline. */\nbody[data-ds-dark-theme] [data-message-bubble] {\n  background:\n    linear-gradient(90deg, rgba(77, 147, 117, 0.18) 0%, rgba(47, 107, 85, 0.06) 60%, rgba(47, 107, 85, 0) 100%),\n    rgba(25, 36, 30, 0.72) !important;\n  box-shadow: inset 0 -1px 0 rgba(77, 147, 117, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.04) !important;\n  border-radius: 14px !important;\n}\n\n/* Empty home: the crescent moon floats above the composer card. */\nbody[data-ds-dark-theme] [data-content-phase='hero'] [data-composer-card] {\n  isolation: isolate;\n}\nbody[data-ds-dark-theme] [data-content-phase='hero'] [data-composer-card]::before {\n  content: '';\n  position: absolute;\n  left: 50%;\n  bottom: calc(100% + 150px);\n  width: clamp(100px, 10vw, 140px);\n  aspect-ratio: 1;\n  transform: translateX(-50%);\n  z-index: 0;\n  pointer-events: none;\n  background: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGlkPSJtIiBjeD0iMzYlIiBjeT0iMzAlIiByPSI3OCUiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Q4ZWZkZCIvPjxzdG9wIG9mZnNldD0iLjUyIiBzdG9wLWNvbG9yPSIjOGZjZWIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNWI3ZjZlIi8+PC9yYWRpYWxHcmFkaWVudD48bWFzayBpZD0iY3V0Ij48cmVjdCB3aWR0aD0iMjIwIiBoZWlnaHQ9IjIyMCIgZmlsbD0iI2ZmZiIvPjxjaXJjbGUgY3g9IjE0MiIgY3k9IjgwIiByPSI4NiIgZmlsbD0iIzAwMCIvPjwvbWFzaz48L2RlZnM+PGNpcmNsZSBjeD0iMTg4IiBjeT0iNDYiIHI9IjEuNCIgZmlsbD0iI2Q4ZWZkZCIgb3BhY2l0eT0iLjU1Ii8+PGcgbWFzaz0idXJsKCNjdXQpIj48Y2lyY2xlIGN4PSIxMTAiIGN5PSIxMTIiIHI9Ijk0IiBmaWxsPSJ1cmwoI20pIi8+PGNpcmNsZSBjeD0iMTEwIiBjeT0iMTEyIiByPSI5MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDhlZmRkIiBzdHJva2Utb3BhY2l0eT0iLjI2IiBzdHJva2Utd2lkdGg9IjEuNSIvPjwvZz48L3N2Zz4=\") center / contain no-repeat;\n  filter: drop-shadow(0 0 6px rgba(77, 147, 117, 0.62)) drop-shadow(0 0 26px rgba(77, 147, 117, 0.36));\n  opacity: 0.70;\n}\nbody[data-ds-dark-theme] [data-content-phase='hero'] [data-composer-card]::after {\n  content: '';\n  position: absolute;\n  left: 50%;\n  bottom: calc(100% + 150px);\n  width: calc(clamp(100px, 10vw, 140px) * 2.8);\n  aspect-ratio: 1;\n  transform: translate(-50%, 4%);\n  z-index: -1;\n  pointer-events: none;\n  background: radial-gradient(circle closest-side, rgba(14, 14, 14, 0.90) 0%, rgba(14, 14, 14, 0.58) 55%, transparent 100%);\n}\n",
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
    const NS = 'eggsoup.themes';
    const STORAGE_KEY = 'eggsoup-dsh-themes:selected';
    const DEFAULT_THEME = 'eggsoup-vitesse-nyx';
    const OVERRIDE_SOURCE = 'eggsoup-dsh-themes';
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
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  min-height: 92px;
  padding: 12px 14px;
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
.eggsoup-theme-swatches { display: flex; gap: 4px; flex: none; }
.eggsoup-theme-swatch {
  width: 18px;
  height: 18px;
  border-radius: 5px;
  box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.18);
}
.eggsoup-theme-default-dot {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid var(--dsw-alias-border-l3);
  background: var(--dsw-alias-bg-base);
}
.eggsoup-theme-name { font-size: 14px; line-height: 22px; }
.eggsoup-theme-check {
  position: absolute;
  top: 10px;
  right: 12px;
  color: var(--dsw-alias-state-success-primary);
  font-size: 13px;
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
            'aria-pressed': selected === theme.id,
            onClick: () => manager.select(theme.id),
          },
            theme.preview === null
              ? h('span', { className: 'eggsoup-theme-default-dot', 'aria-hidden': 'true' })
              : h('span', { className: 'eggsoup-theme-swatches', 'aria-hidden': 'true' },
                theme.preview.map((color, index) => h('span', {
                  key: index,
                  className: 'eggsoup-theme-swatch',
                  style: { background: color },
                })),
              ),
            h('span', { className: 'eggsoup-theme-name' }, text('theme.' + (theme.id ?? 'default'), theme.name)),
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
            description: 'Choose a theme. Themes follow the current Appearance setting; the Vitesse themes are dark-only. Picking DSH default removes the theme layer.',
            'theme.default': 'DSH default',
            'theme.eggsoup-vitesse-nyx': 'Vitesse Nyx',
            'theme.eggsoup-vitesse-nyx-emerald': 'Vitesse Nyx Emerald',
            'theme.eggsoup-ocean': 'Ocean',
          },
          zh: {
            title: '主题',
            description: '选择界面主题。主题会跟随当前外观设置，Vitesse 两个主题仅提供深色配色；选择“DSH 默认”会移除主题层。',
            'theme.default': 'DSH 默认',
            'theme.eggsoup-vitesse-nyx': 'Vitesse Nyx',
            'theme.eggsoup-vitesse-nyx-emerald': 'Vitesse Nyx Emerald',
            'theme.eggsoup-ocean': 'Ocean',
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
