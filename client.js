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
    const LIGHT_DEFAULTS = {
      "--dsw-alias-bg-base": "var(--dsw-static-neutral-bluish-00)",
      "--dsw-alias-bg-document-preview": "var(--dsw-static-neutral-bluish-100)",
      "--dsw-alias-bg-document-selection": "color-mix(in srgb, var(--dsw-static-blue-500) 40%, transparent)",
      "--dsw-alias-bg-layer-1": "var(--dsw-static-neutral-bluish-00)",
      "--dsw-alias-bg-layer-2": "var(--dsw-static-neutral-bluish-00)",
      "--dsw-alias-bg-layer-3": "var(--dsw-static-neutral-bluish-00)",
      "--dsw-alias-bg-mask-1": "rgba(0, 0, 0, 0.24)",
      "--dsw-alias-bg-mask-2": "rgba(0, 0, 0, 0.12)",
      "--dsw-alias-bg-mask-3": "rgba(0, 0, 0, 0.48)",
      "--dsw-alias-bg-mask-drop": "rgba(255, 255, 255, 0.7)",
      "--dsw-alias-bg-mask-photo": "rgba(0, 0, 0, 0.88)",
      "--dsw-alias-bg-module-platform": "var(--dsw-static-neutral-bluish-60)",
      "--dsw-alias-bg-multi-select": "var(--dsw-static-neutral-bluish-60)",
      "--dsw-alias-bg-overlay": "var(--dsw-static-neutral-bluish-150)",
      "--dsw-alias-bg-skeleton": "rgba(0, 0, 0, 0.04)",
      "--dsw-alias-border-inverted": "rgba(0, 0, 0, 0)",
      "--dsw-alias-border-inverted2": "rgba(0, 0, 0, 0)",
      "--dsw-alias-border-l1": "rgba(0, 0, 0, 0.04)",
      "--dsw-alias-border-l2": "rgba(0, 0, 0, 0.1)",
      "--dsw-alias-border-l2-darkmode-thin": "rgba(0, 0, 0, 0.1)",
      "--dsw-alias-border-l3": "rgba(0, 0, 0, 0.12)",
      "--dsw-alias-border-l4": "rgba(0, 0, 0, 0.16)",
      "--dsw-alias-border-selected": "var(--dsw-static-neutral-bluish-400)",
      "--dsw-alias-brand-primary": "var(--dsw-static-neutral-bluish-1000)",
      "--dsw-alias-brand-primary-invert": "var(--dsw-static-neutral-bluish-1000)",
      "--dsw-alias-brand-primary-new-colorprimary-new-color": "rgb(65, 118, 230)",
      "--dsw-alias-brand-text": "var(--dsw-static-neutral-bluish-1000)",
      "--dsw-alias-button-contrast-fill": "var(--dsw-static-neutral-bluish-700)",
      "--dsw-alias-button-elevated-fill": "var(--dsw-static-neutral-bluish-00)",
      "--dsw-alias-button-floating-fill": "var(--dsw-static-neutral-bluish-00)",
      "--dsw-alias-button-floating-hover": "var(--dsw-static-neutral-bluish-75)",
      "--dsw-alias-button-ghost-active-border": "var(--dsw-static-neutral-bluish-500)",
      "--dsw-alias-button-ghost-active-fill": "var(--dsw-static-neutral-bluish-100)",
      "--dsw-alias-button-ghost-active-hover": "var(--dsw-static-neutral-bluish-150)",
      "--dsw-alias-button-info-fill": "var(--dsw-static-deepseek-500)",
      "--dsw-alias-button-info-hover": "var(--dsw-static-deepseek-400)",
      "--dsw-alias-button-primary-dimmed": "var(--dsw-static-neutral-bluish-100)",
      "--dsw-alias-button-primary-fill": "var(--dsw-alias-brand-primary)",
      "--dsw-alias-button-primary-hover": "var(--dsw-static-neutral-bluish-750)",
      "--dsw-alias-button-tool-bar-fill": "rgba(84, 85, 87, 0.5)",
      "--dsw-alias-button-tool-bar-fill-invisible": "rgba(31, 31, 31, 0.36)",
      "--dsw-alias-button-tool-bar-hover": "rgba(84, 85, 87, 0.6)",
      "--dsw-alias-card-fill": "var(--dsw-static-neutral-50)",
      "--dsw-alias-card-fill-hover": "var(--dsw-static-neutral-100)",
      "--dsw-alias-card-tile-fill": "color-mix(in srgb, var(--dsw-static-neutral-00) 50%, transparent)",
      "--dsw-alias-chart-messages": "var(--dsw-static-blue-450)",
      "--dsw-alias-chart-system": "var(--dsw-static-neutral-bluish-400)",
      "--dsw-alias-chart-tools": "var(--dsw-static-violet-400)",
      "--dsw-alias-code-diff-added": "var(--dsw-static-green-500-a08)",
      "--dsw-alias-code-diff-deleted": "var(--dsw-static-red-600-a08)",
      "--dsw-alias-file-diff-added-bg": "rgb(230, 244, 231)",
      "--dsw-alias-file-diff-added-gutter": "rgb(237, 247, 237)",
      "--dsw-alias-file-diff-added-marker": "rgb(1, 162, 65)",
      "--dsw-alias-file-diff-deleted-bg": "rgb(252, 230, 226)",
      "--dsw-alias-file-diff-deleted-gutter": "rgb(253, 236, 233)",
      "--dsw-alias-file-diff-deleted-marker": "rgb(186, 39, 35)",
      "--dsw-alias-hovercard-bg": "var(--dsw-static-neutral-bluish-850)",
      "--dsw-alias-hovercard-label-primary": "var(--dsw-static-neutral-bluish-00)",
      "--dsw-alias-hovercard-label-secondary": "var(--dsw-static-neutral-bluish-300)",
      "--dsw-alias-hovercard-label-tertiary": "var(--dsw-static-neutral-bluish-400)",
      "--dsw-alias-hovercard-state-done": "var(--dsw-static-violet-400)",
      "--dsw-alias-hovercard-state-error": "var(--dsw-static-red-400)",
      "--dsw-alias-illustration-background": "var(--dsw-static-neutral-bluish-55)",
      "--dsw-alias-illustration-backing": "var(--dsw-static-neutral-bluish-310)",
      "--dsw-alias-illustration-detail": "var(--dsw-static-neutral-bluish-310)",
      "--dsw-alias-illustration-inset": "var(--dsw-alias-illustration-surface)",
      "--dsw-alias-illustration-shadow": "var(--dsw-alias-illustration-surface)",
      "--dsw-alias-illustration-surface": "var(--dsw-static-neutral-bluish-90)",
      "--dsw-alias-interactive-bg-active": "rgba(38, 49, 72, 0.1)",
      "--dsw-alias-interactive-bg-hover": "rgba(38, 49, 72, 0.06)",
      "--dsw-alias-interactive-bg-hover-accent": "rgba(38, 49, 72, 0.14)",
      "--dsw-alias-interactive-bg-hover-danger": "rgba(236, 19, 19, 0.05)",
      "--dsw-alias-interactive-bg-hover-solid": "var(--dsw-static-neutral-bluish-75)",
      "--dsw-alias-json-tree-hover": "rgb(60 64 67 / 4%)",
      "--dsw-alias-json-tree-icon": "#5f6368",
      "--dsw-alias-json-tree-keyword": "#1c00cf",
      "--dsw-alias-json-tree-number": "#1c00cf",
      "--dsw-alias-json-tree-property": "#881391",
      "--dsw-alias-json-tree-punctuation": "#202124",
      "--dsw-alias-json-tree-string": "#c41a16",
      "--dsw-alias-label-caption": "var(--dsw-static-neutral-bluish-400)",
      "--dsw-alias-label-deep-diving": "color-mix(in srgb, var(--dsw-static-deepseek-500) 70%, var(--dsw-static-blue-950))",
      "--dsw-alias-label-deep-diving-shimmer": "color-mix(in srgb, var(--dsw-static-deepseek-500) 30%, var(--dsw-static-blue-950))",
      "--dsw-alias-label-dimmed": "var(--dsw-static-neutral-bluish-200)",
      "--dsw-alias-label-document-preview": "var(--dsw-static-neutral-bluish-700)",
      "--dsw-alias-label-on-color": "var(--dsw-static-neutral-bluish-00)",
      "--dsw-alias-label-primary": "var(--dsw-static-neutral-bluish-1000)",
      "--dsw-alias-label-primary-bluish": "var(--dsw-static-blue-900)",
      "--dsw-alias-label-primary-dimmed": "var(--dsw-static-neutral-bluish-950)",
      "--dsw-alias-label-primary-foreground": "var(--dsw-static-neutral-bluish-00)",
      "--dsw-alias-label-primary-inverted": "var(--dsw-static-neutral-bluish-00)",
      "--dsw-alias-label-secondary": "var(--dsw-static-neutral-bluish-700)",
      "--dsw-alias-label-shimmer": "color-mix(in srgb, var(--dsw-static-neutral-1000) 30%, transparent)",
      "--dsw-alias-label-tertiary": "var(--dsw-static-neutral-bluish-600)",
      "--dsw-alias-link": "var(--dsw-static-deepseek-500)",
      "--dsw-alias-markdown-citation": "var(--dsw-static-neutral-bluish-100)",
      "--dsw-alias-markdown-code-block": "var(--dsw-static-neutral-bluish-50)",
      "--dsw-alias-markdown-code-block-banner": "var(--dsw-static-neutral-bluish-50)",
      "--dsw-alias-markdown-code-segment-selected": "var(--dsw-static-neutral-bluish-00)",
      "--dsw-alias-markdown-code-segment-unselected": "var(--dsw-static-neutral-bluish-75)",
      "--dsw-alias-markdown-inline-code": "var(--dsw-static-neutral-50)",
      "--dsw-alias-markdown-placeholder": "var(--dsw-static-neutral-bluish-60)",
      "--dsw-alias-markdown-tag": "var(--dsw-static-neutral-bluish-75)",
      "--dsw-alias-menu-group-header-fill": "rgba(248, 249, 250, 0.94)",
      "--dsw-alias-menu-icon": "var(--dsw-static-neutral-bluish-800)",
      "--dsw-alias-scrollbar-bg-l1": "var(--dsw-static-neutral-200)",
      "--dsw-alias-scrollbar-bg-l2": "var(--dsw-static-neutral-200)",
      "--dsw-alias-scrollbar-hover-l1": "var(--dsw-static-neutral-300)",
      "--dsw-alias-scrollbar-hover-l2": "var(--dsw-static-neutral-300)",
      "--dsw-alias-state-business-primary": "var(--dsw-static-deepseek-500)",
      "--dsw-alias-state-business-tertiary": "var(--dsw-static-deepseek-100)",
      "--dsw-alias-state-done-primary": "var(--dsw-static-violet-600)",
      "--dsw-alias-state-error-primary": "var(--dsw-static-red-600)",
      "--dsw-alias-state-error-secondary": "var(--dsw-static-red-400)",
      "--dsw-alias-state-idle-primary": "var(--dsw-static-neutral-300)",
      "--dsw-alias-state-success-primary": "var(--dsw-static-green-500)",
      "--dsw-alias-state-success-secondary": "var(--dsw-static-green-400)",
      "--dsw-alias-state-success-tertiary": "var(--dsw-static-green-100)",
      "--dsw-alias-state-warn-label": "var(--dsw-static-amber-600)",
      "--dsw-alias-state-warn-primary": "var(--dsw-static-amber-500)",
      "--dsw-alias-state-warn-secondary": "var(--dsw-static-amber-400)",
      "--dsw-alias-state-warn-tertiary": "var(--dsw-static-amber-100)",
      "--dsw-alias-switch-thumb": "var(--dsw-static-neutral-bluish-00)",
      "--dsw-alias-toast-action": "var(--dsw-static-deepseek-400)",
      "--dsw-alias-toast-bg": "var(--dsw-static-neutral-bluish-800)",
      "--dsw-alias-toast-label": "var(--dsw-static-neutral-bluish-00)",
      "--dsw-alias-tooltip-bg": "var(--dsw-static-neutral-bluish-850)",
      "--dsw-alias-tooltip-key-bg": "color-mix(in srgb, var(--dsw-alias-tooltip-bg), white 18%)",
      "--dsw-alias-tooltip-label": "var(--dsw-static-neutral-bluish-00)",
      "--dsw-alias-trajectory-accent": "var(--dsw-static-blue-500)",
      "--dsw-alias-turn-trigger-bg": "var(--dsw-alias-markdown-code-block)",
      "--dsw-alias-turn-trigger-bg-hover": "var(--dsw-alias-interactive-bg-hover)",
      "--dsw-focus-ring-color": "#4176E6",
      "--dsw-menu-surface-fill": "rgba(252, 253, 254, 0.7)",
      "--dsw-specific-bubble": "var(--dsw-static-deepseek-50)",
      "--dsw-specific-bubble-highlight": "var(--dsw-static-deepseek-200)",
      "--dsw-specific-file-upload-track": "rgba(0, 0, 0, 0.08)",
      "--dsw-specific-guide-hero": "var(--dsw-static-neutral-200)",
      "--dsw-specific-input-major": "var(--dsw-static-neutral-bluish-00)",
      "--dsw-specific-login-input": "var(--dsw-static-neutral-bluish-50)",
      "--dsw-specific-menu": "rgba(248, 249, 250, 0.94)",
      "--dsw-specific-selector": "var(--dsw-static-neutral-bluish-60)",
      "--dsw-specific-sidebar-fill": "var(--dsw-static-neutral-bluish-50)",
      "--dsw-specific-sidebar-glass-collapsed-fill": "transparent",
      "--dsw-specific-sidebar-glass-collapsed-hover": "var(--dsw-alias-interactive-bg-hover)",
      "--dsw-specific-sidebar-glass-fill": "rgb(255 255 255 / 0.55)",
      "--dsw-specific-sidebar-glass-hover": "rgb(255 255 255 / 0.3)",
      "--dsw-specific-sidebar-nav-item-active": "var(--dsw-static-neutral-bluish-100)",
      "--dsw-specific-sidebar-nav-item-active-accent": "var(--dsw-static-deepseek-100)",
      "--dsw-specific-sidebar-right-flash": "var(--dsw-alias-brand-primary-new-colorprimary-new-color)",
      "--dsw-specific-sidebar-tint": "color-mix(in srgb, color-mix(in srgb, var(--dsw-specific-sidebar-fill) 97%, rgb(122 155 240)) 40%, transparent)",
      "--dsw-specific-sidebar-wash-bottom": "rgb(143 137 184 / 0.09)",
      "--dsw-specific-sidebar-wash-bottom-clear": "rgb(143 137 184 / 0)",
      "--dsw-specific-sidebar-wash-top": "rgb(122 155 240 / 0.1)",
      "--dsw-specific-sidebar-wash-top-clear": "rgb(122 155 240 / 0)",
      "--dsw-specific-tip": "var(--dsw-static-neutral-bluish-60)",
      "--shiki-foreground": "var(--dsw-alias-label-primary)",
      "--shiki-background": "var(--dsw-alias-markdown-code-block)",
      "--shiki-token-constant": "#1c7ed6",
      "--shiki-token-string": "#2f9e44",
      "--shiki-token-comment": "#868e96",
      "--shiki-token-keyword": "#d6336c",
      "--shiki-token-parameter": "#e8590c",
      "--shiki-token-function": "#6741d9",
      "--shiki-token-string-expression": "#2b8a3e",
      "--shiki-token-punctuation": "#495057",
      "--shiki-token-link": "#1971c2"
    };
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
        '--dsw-specific-sidebar-fill': hexRgba(spec.sidebarBg ?? c.sidebar, 0.88),
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
      const sidebarBg = spec.sidebarBg ?? c.sidebar;
      const sidebarTint = spec.sidebarTint ?? c.accent;
      const conversationBg = spec.conversationBg ?? c.canvas;
      const headerBg = spec.headerBg ?? c.canvas;
      const glowPrimary = spec.glowPrimary ?? c.accent;
      const glowSecondary = spec.glowSecondary ?? spec.secondaryGlow;
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
  border-right-color: ${spec.sidebarBorder ?? c.sidebarBorder} !important;
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
    linear-gradient(to bottom, ${hexRgba(sidebarTint, 0.05)} 0%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.18) 78%, rgba(0, 0, 0, 0.38) 100%),
    ${hexRgba(sidebarBg, 0.86)} !important;
}
body[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase] {
  background: ${hexRgba(conversationBg, 0.93)} !important;
}
/* The hero keeps the art visible but sinks a soft vignette under the headline;
   the gradient paints behind the label-primary text, never over it. */
body[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase='hero'] {
  background:
    radial-gradient(ellipse 68% 58% at 50% 50%, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0) 76%) !important;
}
body[data-ds-dark-theme] [data-slot='main.conversation'] > div[data-phase='hero'] [class*='headline'] {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 0 16px rgba(0, 0, 0, 0.25);
}
body[data-ds-dark-theme] [data-slot='conversation.header'] header {
  background: ${hexRgba(headerBg, 0.94)} !important;
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
  background-image: linear-gradient(135deg, ${hexRgba(glowPrimary, 0.10)}, ${hexRgba(glowSecondary, 0.04)} 45%, rgba(0, 0, 0, 0) 65%) !important;
  box-shadow: var(--dsw-elevation-soft), inset 0 1px 0 rgba(255, 255, 255, 0.05) !important;
}
body[data-ds-dark-theme] [data-composer-card] button[class*='primary']:not(:disabled) {
  background:
    radial-gradient(100% 60% at 50% 0%, rgba(255, 255, 255, 0.12), transparent 70%),
    linear-gradient(150deg, ${hexRgba(glowPrimary, 0.48)}, ${hexRgba(glowSecondary, 0.18)} 60%, ${hexRgba(glowPrimary, 0.14)}),
    ${spec.sendBase} !important;
  color: ${spec.sendText} !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.18),
    inset 0 -8px 14px -10px ${hexRgba(spec.sendShadow ?? glowPrimary, 0.68)},
    0 0 0 1px ${hexRgba(spec.sendRing ?? glowPrimary, 0.24)} !important;
}
body[data-ds-dark-theme] [data-composer-card] button[class*='primary']:not(:disabled):hover {
  background:
    radial-gradient(100% 60% at 50% 0%, rgba(255, 255, 255, 0.20), transparent 70%),
    linear-gradient(150deg, ${hexRgba(glowPrimary, 0.60)}, ${hexRgba(glowSecondary, 0.24)} 60%, ${hexRgba(glowPrimary, 0.18)}),
    ${spec.sendBase} !important;
  color: ${spec.sendHoverText} !important;
}
body[data-ds-dark-theme] [data-message-bubble] {
  background:
    linear-gradient(90deg, ${hexRgba(glowPrimary, 0.16)} 0%, ${hexRgba(glowSecondary, 0.07)} 60%, rgba(0, 0, 0, 0) 100%),
    ${hexRgba(c.messageSurface, 0.80)} !important;
  box-shadow: inset 0 -1px 0 ${hexRgba(glowPrimary, 0.30)}, inset 0 1px 0 rgba(255, 255, 255, 0.04) !important;
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
  opacity: ${spec.emblemOpacity ?? 0.92};
}
/* Plugin manager page: the artwork is painted behind every column and this
   page has no opaque surface of its own, so its list text sits directly on
   the pixel grid. Give the page a near-opaque themed backdrop. The card fill
   and stroke aliases already resolve to this theme's layer-2/border tokens,
   so they need no separate override here. */
body[data-ds-dark-theme] [data-plugin-panel] {
  background: ${hexRgba(conversationBg, 0.96)};
}
/* The built-in header shrinks on scroll. A soft shadow on the scrolled paint
   and a stronger divider on the compact bar make the height change read as a
   deliberate sticky surface instead of text sliding over the artwork. */
body[data-ds-dark-theme] [data-plugin-bar][data-natural][data-scrolled]::before {
  box-shadow: 0 6px 16px -10px rgba(0, 0, 0, 0.6);
}
body[data-ds-dark-theme] [data-plugin-bar][data-natural][data-compact]::after {
  border-bottom-color: ${mixHex(c.border, c.text, 0.12)} !important;
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
    "id": "eggsoup-vitesse-nyx",
    "name": "Vitesse Nyx",
    "colors": {
      "canvas": "#121212",
      "chrome": "#121212",
      "toolbar": "#121212",
      "toolbarForeground": "#ddd9cd",
      "toolbarBorder": "#242424",
      "toolbarControl": "#1b1b1b",
      "toolbarControlForeground": "#ddd9cd",
      "toolbarControlHover": "#282828",
      "surface": "#1e1e1e",
      "surfaceRaised": "#1b1b1b",
      "surfaceOverlay": "#1b1b1b",
      "text": "#ddd9cd",
      "textMuted": "#878781",
      "border": "#242424",
      "input": "#1b1b1b",
      "focus": "#4d9375",
      "accent": "#4d9375",
      "accentForeground": "#000000",
      "secondary": "#1b1b1b",
      "secondaryForeground": "#ddd9cd",
      "muted": "#0e0e0e",
      "mutedForeground": "#878781",
      "placeholder": "#878781",
      "secondaryLabel": "#878781",
      "iconMuted": "#878781",
      "error": "#cb7676",
      "errorForeground": "#ffdcda",
      "errorSurface": "#4e050e",
      "warning": "#d4976c",
      "warningForeground": "#ffe9bb",
      "warningSurface": "#461403",
      "update": "#6394bf",
      "updateForeground": "#caffff",
      "updateSurface": "#03274c",
      "accentSurface": "#1b1b1b",
      "accentSurfaceForeground": "#ddd9cd",
      "messageSurface": "#19241e",
      "messageForeground": "#ddd9cd",
      "messageAction": "#4d9375",
      "messageActionForeground": "#000000",
      "messageActionHover": "#4d9375",
      "codeBackground": "#101010",
      "codeForeground": "#bd976a",
      "searchMatchBackground": "#272727",
      "searchMatchForeground": "#ddd9cd",
      "searchMatchActiveBackground": "#305344",
      "searchMatchActiveForeground": "#ddd9cd",
      "sidebar": "#0e0e0e",
      "sidebarForeground": "#ddd9cd",
      "sidebarMutedForeground": "#878781",
      "sidebarControlSurface": "#1b1b1b",
      "sidebarRowHover": "#282828",
      "sidebarRowActive": "#323232",
      "sidebarRowSelected": "#272727",
      "sidebarBorder": "#222222",
      "terminalBackground": "#121212",
      "terminalForeground": "#ddd9cd",
      "terminalCursor": "#CECDC3",
      "terminalSelection": "#272727",
      "terminalScrollbar": "#1b1b1b",
      "terminalScrollbarHover": "#282828"
    },
    "layer1": "#1b1b1b",
    "layer2": "#1e1e1e",
    "layer3": "#282828",
    "skyBg": "#000000",
    "sidebarBg": "#0b0907",
    "sidebarTint": "#bd976a",
    "sidebarBorder": "#0e0c0a",
    "panelBg": "#0d0c0a",
    "menuBg": "#0d0b08",
    "conversationBg": "#121212",
    "headerBg": "#121212",
    "gridAlpha": 0.5,
    "glowPrimary": "#bd976a",
    "glowSecondary": "#4d9375",
    "secondaryGlow": "#bd976a",
    "sendBase": "#14110d",
    "sendText": "#f7ecd9",
    "sendHoverText": "#fff6e8",
    "sendShadow": "#d9bd92",
    "sendRing": "#e0cba8",
    "addedColor": "#4d9375",
    "doneColor": "#6394bf",
    "successColor": "#4d9375",
    "emblemFilter": "drop-shadow(0 0 6px rgba(77, 147, 117, 0.53)) drop-shadow(0 0 22px rgba(189, 151, 106, 0.30))",
    "emblemOpacity": 0.96,
    "preview": [
      "#121212",
      "#1b1b1b",
      "#4d9375",
      "#bd976a"
    ],
    "shiki": {
      "constant": "#6394bf",
      "string": "#4d9375",
      "comment": "#878781",
      "keyword": "#cb7676",
      "parameter": "#d4976c",
      "function": "#8fceb0",
      "stringExpression": "#6bb392",
      "punctuation": "#878781",
      "link": "#8fceb0"
    },
    "art": "data:image/png;base64,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",
    "emblem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnNDFfdG9wIiB4MT0iMCIgeTE9IjEiIHgyPSIxIiB5Mj0iMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2M5YzJiMiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iI2Y3ZjBlMiIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJnNDFfd2luZyIgeDE9IjAiIHkxPSIwIiB4Mj0iMSIgeTI9IjEiPjxzdG9wIG9mZnNldD0iMCUiIHN0b3AtY29sb3I9IiM3MGMyOWUiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMyYzVlNDkiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNMzAgMTY0IEw4MiAxMzQiIHN0cm9rZT0iI2Q0OTc2YyIgc3Ryb2tlLW9wYWNpdHk9IjAuODgiIHN0cm9rZS13aWR0aD0iMy4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNNDYgMTc2IEw5MiAxNDkiIHN0cm9rZT0iIzRkOTM3NSIgc3Ryb2tlLW9wYWNpdHk9IjAuNjUiIHN0cm9rZS13aWR0aD0iMi4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjM0LDkyIDE4Niw0NCA5NiwxMTIiIGZpbGw9InVybCgjZzQxX3RvcCkiIHN0cm9rZT0iI2Y3ZjBlMiIgc3Ryb2tlLW9wYWNpdHk9IjAuODIiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSI5NiwxMTIgMTg2LDQ0IDExNCwxMzAgOTIsMTYyIiBmaWxsPSIjMjM0NzM4IiBzdHJva2U9IiM2ZGMyOWQiIHN0cm9rZS1vcGFjaXR5PSIwLjciIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxMTQsMTMwIDE4Niw0NCAxNTYsMTc0IiBmaWxsPSJ1cmwoI2c0MV93aW5nKSIgc3Ryb2tlPSIjYTNlNmM3IiBzdHJva2Utb3BhY2l0eT0iMC42OCIgc3Ryb2tlLXdpZHRoPSIxLjgiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L3N2Zz4="
  },
  {
    "id": "eggsoup-vitesse-nyx-emerald",
    "name": "Vitesse Nyx Emerald",
    "colors": {
      "canvas": "#121212",
      "chrome": "#121212",
      "toolbar": "#121212",
      "toolbarForeground": "#ddd9cd",
      "toolbarBorder": "#242424",
      "toolbarControl": "#1b1b1b",
      "toolbarControlForeground": "#ddd9cd",
      "toolbarControlHover": "#282828",
      "surface": "#1e1e1e",
      "surfaceRaised": "#1b1b1b",
      "surfaceOverlay": "#1b1b1b",
      "text": "#ddd9cd",
      "textMuted": "#878781",
      "border": "#242424",
      "input": "#1b1b1b",
      "focus": "#4d9375",
      "accent": "#4d9375",
      "accentForeground": "#000000",
      "secondary": "#1b1b1b",
      "secondaryForeground": "#ddd9cd",
      "muted": "#0e0e0e",
      "mutedForeground": "#878781",
      "placeholder": "#878781",
      "secondaryLabel": "#878781",
      "iconMuted": "#878781",
      "error": "#cb7676",
      "errorForeground": "#ffdcda",
      "errorSurface": "#4e050e",
      "warning": "#d4976c",
      "warningForeground": "#ffe9bb",
      "warningSurface": "#461403",
      "update": "#6394bf",
      "updateForeground": "#caffff",
      "updateSurface": "#03274c",
      "accentSurface": "#1b1b1b",
      "accentSurfaceForeground": "#ddd9cd",
      "messageSurface": "#19241e",
      "messageForeground": "#ddd9cd",
      "messageAction": "#4d9375",
      "messageActionForeground": "#000000",
      "messageActionHover": "#4d9375",
      "codeBackground": "#101010",
      "codeForeground": "#bd976a",
      "searchMatchBackground": "#272727",
      "searchMatchForeground": "#ddd9cd",
      "searchMatchActiveBackground": "#305344",
      "searchMatchActiveForeground": "#ddd9cd",
      "sidebar": "#0e0e0e",
      "sidebarForeground": "#ddd9cd",
      "sidebarMutedForeground": "#878781",
      "sidebarControlSurface": "#1b1b1b",
      "sidebarRowHover": "#282828",
      "sidebarRowActive": "#323232",
      "sidebarRowSelected": "#272727",
      "sidebarBorder": "#222222",
      "terminalBackground": "#121212",
      "terminalForeground": "#ddd9cd",
      "terminalCursor": "#CECDC3",
      "terminalSelection": "#272727",
      "terminalScrollbar": "#1b1b1b",
      "terminalScrollbarHover": "#282828"
    },
    "layer1": "#1b1b1b",
    "layer2": "#1e1e1e",
    "layer3": "#282828",
    "skyBg": "#000000",
    "sidebarBg": "#070b09",
    "sidebarTint": "#4d9375",
    "sidebarBorder": "#080c0a",
    "panelBg": "#08100d",
    "menuBg": "#08100d",
    "conversationBg": "#0d1210",
    "headerBg": "#0b100e",
    "gridAlpha": 0.5,
    "glowPrimary": "#4d9375",
    "glowSecondary": "#8fceb0",
    "secondaryGlow": "#8fceb0",
    "sendBase": "#0b1210",
    "sendText": "#d8efdd",
    "sendHoverText": "#eafff0",
    "sendShadow": "#8fceb0",
    "sendRing": "#b8dfc7",
    "addedColor": "#4d9375",
    "doneColor": "#8fceb0",
    "successColor": "#4d9375",
    "emblemFilter": "drop-shadow(0 0 6px rgba(77, 147, 117, 0.65)) drop-shadow(0 0 26px rgba(143, 206, 176, 0.36))",
    "emblemOpacity": 0.96,
    "preview": [
      "#121212",
      "#1b1b1b",
      "#4d9375",
      "#8fceb0"
    ],
    "shiki": {
      "constant": "#6394bf",
      "string": "#4d9375",
      "comment": "#878781",
      "keyword": "#cb7676",
      "parameter": "#d4976c",
      "function": "#8fceb0",
      "stringExpression": "#6bb392",
      "punctuation": "#878781",
      "link": "#8fceb0"
    },
    "art": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADhBAMAAAAUmP4vAAAAIVBMVEUHCwkLEhAQIxxjlL9vro4WNSr06tYfSjksY1A/emNNk3X2ghLSAAAPvklEQVR4AbyYQXbbRhBEQdAH8KN8AAoksxb1HK8ty9lkqWSe9skZ9OAbhLxBnHU25inTKKLSQA2HwyEpVaVtKEweJHxVdw+qjCaoyBNUoeqBZ5NZ3ZV4ti8x/lu6Hpa7qt6/f88q1BwV+xZ1O0ft/frKQ8ghmBaBIAY+/rwUk5hoq8sg3A5rPsBwBwxZFA3KvcSf9/gTn11ChLpqOhwMkRzE8vhFUagT6SGRV0wHKqOGteR1sQRAMiF3VheCqAVFsepDRZcQOfTwB8kQUwUJeerLfTqgohlSkJB1bobEs8OVnicsSYj9XZ07Q+iLUyJaXGeOTN4lU1IuTcmDp6R4jqhn+rXCePxcNkPmp6dk+THTsiQZl032d/mEFItQvrB9pbasfDIkISh4ROTD2TPkNkqHJOT1NQTw+JDbsspByBzJNixNRt69TiaSSIf6TTEwYQurK86QDJwYEPAkSs8c9GxUxMKMUHfH0/E5k5ClY3p7PGkI7l7vPk6O6/EhBUGTwjppsXUA8v+5Tty1COJzJiHLLILF1RMCdypIyPlyOOs6hhTXFJ8kzXQ4jtLzSGaroheeDhaJ/Hn1lkXJGeS8RlWzsr7nQ083rGS7mo5nEeRITiJydH68kdYH0vFkJpRrzZA6rvizHDx+lkkakFCAaKrOTkgZkkVJ75pHRQmQYUYA4O7chPBRjvu//oaLP93zqtACg0jwSXVBQvK6/jQhjAYeILngLa8DicbyUSDJ1GTTwXsJDqg6Px2iBj5ba09EXHKfDsaTFRPVOYUgnw4m46AU0U00H6ZWpebdGhiaEEmVB7G0SqfjD/7GQrjq3029hnAvCvcgknxCZKkVIEMkTQpJJiUnzScF4gk5OSMfBm2LWCjH4WpKgaQTobJ0LJ5MkhA7SBmR4oSweTiI1Wz186r7p1k1eFiie6LxbaokGaM02r26++CaQBJE5ofnBxy1j4ECL14pLQLecRoSZkSQOJokEgdij2esWQTlxtMiicmb+Am/x26qawJZ5zLSt6zFPh0f4nQ4jBBezCFGAiiXT/XGkxglZN7ZUaTP4Z/W/aX38xhGgHs1ZgejqstMGLybJ2Q2oYTIPHaHYbFHsTzYz4FiKMcSpwUuUzO8FxwlBFiqXiMs6YSMgcwI4zk87xViKPnXh5mXKrwXhYTskxYTcSgo6NjZYwgEal/a1qqH8vIkaVmcCUSTqCOdCfGMuKb5VZcNxNTDaJ/bvXowz4aJ8tlSLk0igXhCYiK+USXnB9WMcLTtX9DGDDkahdOYmZhR0WhzzW9WMNXB8KbYaEK671XSkdt6HEjjOL5Bm07dxRBMCEwNE1OkJsKx0nNIRMQhZE7mBAIcbYdjs/nb9B029VhGYA6PfRag4FpAMBkvwSwJ+YlAmJGik/kNm4gJ2QCK7Xb7vdd2a1gcDNFwxozgsAQCMBCEzqhZ40jMrmpOGJ3ntKKI2ojhIAz79n/8+LEzm74DyoZ5QWJaguGDzYu58CnlCSESpgSpZkZc+ZZFIMCxBY1/TLvdrvsLUJgWMxMTzDL84RnwwCuiEMU4OiCiyhPiEMYJGWhtD4P5aHscBmO3+7XXbudQNgqFOo4lcHMzx+uC49A5oo89fzp3HIBhKP6lOihdUByKpAUKkhlRoE3PcNB5VPvqS1X62KF56vzxO3AgH8RhNL5SIyT7pDgWgGErGwNyixwh1bU4SOfI+MELlKkeBx9/6R4ZZkfXqywTwPF1L0OCjKB1UcgJoNAOxpNDE4Kb6JgQaVnetY4giVdQI/Ky57ExHoLDZH2LbYsiDjewAIxVXkyUtCxJdCUrLX9gTYZvV54P4/E/jn1CEBAf8BRRDL/KS9dpILnndxjNkeiFyPH1k/NDeXQdiziYC0dA2bX/+1YAwVRyWyMSTQmIjICwTxOHnD0CgGwIBNqZOEF820qKn2XQBMUhQ10zwiz4G9VGkkH5srthw+L04FBHNvwh05A/cpcAy+LwlhXPEbQlpoC9WpPBDo9ll0BMGOacHcRxcgJa91EgREIplAdkRJLg5waB0ePwCUIZCg5zX3sTbWkESqU4MGFClJBGE7L8iDniCVk1/qM7IscRAoBww+oEEg4jiSOgTlcIEQ6fIgoERJiRRt/fUsTBB+rnD4Loh3gnpiMvBRTDO/yezHHoHOEMYRb4Km81guEvStr2G88gm+0GGg7w58ulu1ickOQcIRAcxmQVJQ4H0iExKLBJtym2qbwOg5CzS0ghESyWEbatZoiEQCAAARKHQrVE0Uoi4PhaCgp04OY1hJFLCOeIIqGIhEAGUIDFNRzQV5HC4AzRoZ6YIytXdGLGwxpBcQmOUgV36MqBeGJzCYnnSIDjhAgUSDapy3Gk54fOEE0IzyNEQhBMiIrnBVUqHfIZS21a0S5PiOKoj+5aQJI8QcspWmbA9RQIQ3BoQhJzpN6/r7rpMTRJJGxgl0uhKBAd6o6EUA7PkU/rJonETSQlastwOJBMQgQLMzL1BZi6kVd+kpSEMwk5LRk6PzIzxDMyHx0R/+vuDHYbN5ogTEvGfyZg4z9zJSFnjuDkbFFAHmA3vidI3v8Z4hVSq3HR1ZrSSENgu9F+AH34uoa0RKK59CKrswJmCBQCxsA5kv3fnGqjkWTZ8qYwiIrN0PmhMwSODJ99D0oh8U3xzGAg4v/1Okf4lgmD0WjQGgsMseyAH1nxulI5AihowkLJglypRIFTFWDYhpxzpAjIJgaSWRIVgEg7BBIyZJ9D4RxBbdIPIJsCIHewY6+RKCzIEViif7oJMPoExtli5wZnB6PQ6wpEev2V0Yum0AnMwKBzw0GR/8ezy4BIHDBFAxFZ8ublBrJjbgdBUTmigeg8MXAYuaHzQ2OZ/X8EWM6mOHnCllxnhzLkgWCIHIEjviWMxM4NjSI2JLcEjqTMkmxx2SevvMmMAjsoO7QhYnV1jMOxBB/yNXb8WmSHNuT7bDNLOvUlB6DJK7ZEd2CGyo4chQBBRMQ3Tuj05WYJEORmUG74dohTFhwhGBTx2hIN5E0AsbKD7Fh9+BK3dKQk3Df+qQtIYAaa69sHJDI/GAvQ9MgRZYmTJQCDCYvsKDNkTTCYyMmQi5akiycu0TDjsh04XQkYIkPIEYaBPNFZ4gHxs4O+lLqSGUKOFJy4ZLiHQL5mpyqCIvPjoiH58oIl5AhZggNxWZaUYNj9hyH7Et0URbkGwUSKflfIWcJgdDOE48QY/ngJ8mNXZkhPjojfFuoLRR/JDneWN4CSEZljOU6AgpZEaGkpS5AmPpCoZH5siIjMkAFgmIg8ccVZYiypMDsoznNDViWOfCk6cTESBoNBOSj0qtLLash6TmRVaomNBC2gSCwyQ8iRLVDEliB8YyA2lM05P8gQ56QlHCFTMiwCDKPZEAIy4wxizxgyFBpElCMwRS4wAlNS3zQGtkODiDOEc8TKEgBROAgLcgNQ9rEdhIUzRFeHlVUQ7QBiV3zg1VfoJacskSMiS4QlmSncwIAARwe18jNEOFJ04tIRb6IgQ+wMCXLEt0TgICwCip8hBGZNjuDXVAaO5oaIDOEcsbKEwJxGNuVGjMHIkDR35PTbkbHUlAzLqa34RiPES0EkwkDXIqcBEd8SXl08Lhhg8TMEjojfrbunLgONsMM3JANDRGxLAEZMae3ZEAMGiGS/0OUTF7CkGRQ2ZdIfP9sBQ7IuqNgS5IhtCdfuRa0sAw5Fu2EJORKeuMgSXlzTdYsrN2RfgiWwpNM/DS387+Kz4YJGML3PHicsCnPDkZ5NidCQKccJeLjJitOINbX7pxwDIMQ5Ii2RpmgiDpppniHe8bcDCG2KhkEovtIINAKMbwhWFxyptqTekCBDrBxBPV1lCTKFRthhgLAsAQrTEt8PA82Dbwl+z24+aW6DPDlO+Oh153ji1WWjOQ0cKX7aXH7qQvtE4idfr6iN6nouferScEQn56H8h8oc8Z/HeJ/F9fxyRuOuLiLCpkSWMIyv8XAzHCZiGwJHLEs4T1a+HcoQ35LQkThLPFO+5KPLRjGwKYyhnSUakWsJEWFLCnFszNaAfnmfivta/tNL2RRubUJshw1BEwmvTZJEU1HbGxnSD8Uo1n+v2BTGENnAo/FoOB6RMYOxzU9dY9kbd/TYZfx/BI6syRLjFRalLmgEbImGYRGxruAblDBlCxiwhAyJiyxRplwY540K+2I4nf8U7IVLZAk/69cyhW0BJjHT2QhYgTGfIY9aCyIxnFo0u5ebn7Z+G7PvNHJ7pnxqC26uU09lC0wHvUlEmDIcGr99x8sSGKLfpqBeCCNf+AJj9Dyo4a7JEQ3mlSzRaLatUGyRJeyInSfIlMyUdX3Mm6ZoIvLaZGFLdkGWmO8d0YDsFu/siQAcD64jRp4MDZfVTl+XsCMOCrm2eGBQPIezHZ4hayZimeLHu5X7/gLLDDEsWTMcTEVPpabUODJoS5qbQihEjpgLS0MQxrAZerQpPhHDkuUvGe/5prcVj9mGIUTkyTIFeMgWmgaGvM846HVlmRKurr+kOSm3B81mxYDMZB/GITJlWNqQmSMaTlWxKXvTEoyfI44lOR7GtPNxmShgiTQEXbemjoeijEH/yA//xNWVw9CWaFN2dzVF5EiFKanaGt8On4g2pcCWrciYG+dIPzCE+rdPex9+YmN4SkO+c2G8vs/wf74zHEV8gxwZtSPq2gR3t6xKDSyxHXmNLMlH9L0s0YZ4lhimcNdbYhGRIOo+/nQrNADS4j3t/sHAqO47EsZiAyJIsTW+MUPB/9uZwO3zxMoW3Q+PK39r2abktvTJ+PgNRY6HmR2J7mvFpZdY23r0c8SHU2yKfwTQhiBDpCO3zxM/W/yA764FsfsMgLmobhnvgGCbcjx0D2sfkX8mc3PEzZPn/kP9KY0haITNaELAz0Xham+KNscocuTJM6Ug3L2lZUc74LAj9hU8ZvnqYkN8QH629I4dbAhaE+Gv1S2P4V7JbgAwTBEj8GRwGMQ4Z/M/NkVjaouKcwStbWliDTqRDeiBzcjfAawdaXAlv7wjI/6U2CLC3V9chInhdEYtbQmfytLMkZ7GOnC91psSTiI7yBDhiHni+v3g33ps74hHZLjaFGP0+tJEHEgSWQNzutN0J0eoC0wZ6/KFp7h7zLyqISwe6b4jbg2OOYWjAVUZsqwpHYYdkYY0gGaMKBPC8rGeKhxpuqJGc30NBhH7WOybE6PseLjZkXpTlisbQuHHnZpEe4aoW+6jH64ag4gBKM1xPLq2GMMdOTKSIeJ0pW9OHl+XccReU3y3i/sx+phvVzNUhh3L2uIT8U0JMgUWNWjYofOkYT1ff/nTINCNZXU8XL24+CZKu3qKibhVb0gCpEX7vfqf47R1c0PSIrHufznoZyBiAAunxgQ53b+Q6LXFZHGY5QAAAABJRU5ErkJggg==",
    "emblem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PHBvbHlnb24gcG9pbnRzPSIxMTAsMjQgMTY2LDY4IDE1MiwxNjIgMTEwLDE5NiA2OCwxNjIgNTQsNjgiIGZpbGw9IiMxNzI4MjEiIHN0cm9rZT0iIzhmY2ViMCIgc3Ryb2tlLXdpZHRoPSIyLjUiLz48cG9seWdvbiBwb2ludHM9IjExMCwyNCA2OCwxNjIgNTQsNjgiIGZpbGw9IiMzYTc1NWMiLz48cG9seWdvbiBwb2ludHM9IjExMCwyNCAxNjYsNjggMTUyLDE2MiIgZmlsbD0iIzJiNWE0NyIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDI0IDE0MCw4NiAxMTAsMTE0IDgwLDg2IiBmaWxsPSIjZDhlZmRkIi8+PHBvbHlnb24gcG9pbnRzPSI4MCw4NiAxMTAsMTE0IDY4LDE2MiA1NCw2OCIgZmlsbD0iIzhmY2ViMCIvPjxwb2x5Z29uIHBvaW50cz0iMTQwLDg2IDE2Niw2OCAxNTIsMTYyIDExMCwxMTQiIGZpbGw9IiM0ZDkzNzUiLz48cG9seWdvbiBwb2ludHM9IjExMCwxMTQgMTUyLDE2MiAxMTAsMTk2IDY4LDE2MiIgZmlsbD0iIzIzNDgzOSIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDI0IDE2Niw2OCAxNTIsMTYyIDExMCwxOTYgNjgsMTYyIDU0LDY4IiBmaWxsPSJub25lIiBzdHJva2U9IiNkOGVmZGQiIHN0cm9rZS1vcGFjaXR5PSIuNiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTgwIDg2IEwxMTAgMTE0IEwxNDAgODYgTTExMCAxMTQgTDExMCAxOTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q4ZWZkZCIgc3Ryb2tlLW9wYWNpdHk9Ii40NSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48L3N2Zz4="
  },
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
    "id": "eggsoup-lilac-soft-nyx",
    "name": "Lilac Soft Nyx",
    "colors": {
      "canvas": "#1d1c23",
      "chrome": "#1d1c23",
      "toolbar": "#1d1c23",
      "toolbarForeground": "#e3e0ee",
      "toolbarBorder": "#302f3b",
      "toolbarControl": "#262532",
      "toolbarControlForeground": "#e3e0ee",
      "toolbarControlHover": "#302e3d",
      "surface": "#1d1c23",
      "surfaceRaised": "#252431",
      "surfaceOverlay": "#2b2938",
      "text": "#e3e0ee",
      "textMuted": "#a09db2",
      "border": "#302f3b",
      "input": "#3a3848",
      "focus": "#a89ddb",
      "accent": "#a89ddb",
      "accentForeground": "#171425",
      "secondary": "#252431",
      "secondaryForeground": "#e3e0ee",
      "muted": "#181720",
      "mutedForeground": "#a09db2",
      "placeholder": "#b2aec4",
      "secondaryLabel": "#a09db2",
      "iconMuted": "#a09db2",
      "error": "#d6949f",
      "errorForeground": "#f2c6cb",
      "errorSurface": "#372428",
      "warning": "#cfae7e",
      "warningForeground": "#eed5ae",
      "warningSurface": "#352d21",
      "update": "#a89ddb",
      "updateForeground": "#cbc2ec",
      "updateSurface": "#2c283e",
      "accentSurface": "#302c40",
      "accentSurfaceForeground": "#e3e0ee",
      "messageSurface": "#252431",
      "messageForeground": "#e3e0ee",
      "messageAction": "#a89ddb",
      "messageActionForeground": "#171425",
      "messageActionHover": "#bdb3e6",
      "codeBackground": "#181720",
      "codeForeground": "#e3e0ee",
      "searchMatchBackground": "#3b3550",
      "searchMatchForeground": "#e3e0ee",
      "searchMatchActiveBackground": "#c3b9e8",
      "searchMatchActiveForeground": "#171425",
      "sidebar": "#191820",
      "sidebarForeground": "#e3e0ee",
      "sidebarMutedForeground": "#9a96ad",
      "sidebarControlSurface": "#252431",
      "sidebarRowHover": "#252431",
      "sidebarRowActive": "#2c2a3a",
      "sidebarRowSelected": "#2c2a3a",
      "sidebarBorder": "#2b2936",
      "terminalBackground": "#1d1c23",
      "terminalForeground": "#e3e0ee",
      "terminalCursor": "#c5b9ea",
      "terminalSelection": "#322f40",
      "terminalScrollbar": "#3a3848",
      "terminalScrollbarHover": "#4c4960"
    },
    "layer1": "#252431",
    "layer2": "#2b2938",
    "layer3": "#302e3d",
    "skyBg": "#181720",
    "panelBg": "#1f1e29",
    "menuBg": "#181720",
    "gridAlpha": 0.5,
    "secondaryGlow": "#d6949f",
    "sendBase": "#282634",
    "sendText": "#c5b9ea",
    "sendHoverText": "#ffffff",
    "addedColor": "#a0c9b8",
    "doneColor": "#bdb3e6",
    "successColor": "#a0c9b8",
    "emblemFilter": "drop-shadow(0 0 6px rgba(168, 157, 219, 0.65)) drop-shadow(0 0 26px rgba(197, 185, 234, 0.31))",
    "preview": [
      "#1d1c23",
      "#2b2938",
      "#a89ddb",
      "#d6949f"
    ],
    "shiki": {
      "constant": "#cfae7e",
      "string": "#a0c9b8",
      "comment": "#8f8ca3",
      "keyword": "#d6949f",
      "parameter": "#d9bc8d",
      "function": "#cbc2ec",
      "stringExpression": "#a0c9b8",
      "punctuation": "#a09db2",
      "link": "#c5b9ea"
    },
    "art": "data:image/png;base64,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",
    "emblem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PHBvbHlnb24gcG9pbnRzPSIxMTAsMTEwIDUyLDUyIDg0LDY4IiBmaWxsPSIjNWI1MzdkIi8+PHBvbHlnb24gcG9pbnRzPSIxMTAsMTEwIDUyLDUyIDY4LDg0IiBmaWxsPSIjM2YzOTU5Ii8+PHBvbHlnb24gcG9pbnRzPSIxMTAsMTEwIDE2OCw1MiAxNTIsODQiIGZpbGw9IiM1YjUzN2QiLz48cG9seWdvbiBwb2ludHM9IjExMCwxMTAgMTY4LDUyIDEzNiw2OCIgZmlsbD0iIzNmMzk1OSIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDExMCA1MiwxNjggNjgsMTM2IiBmaWxsPSIjNGQ0NjZiIi8+PHBvbHlnb24gcG9pbnRzPSIxMTAsMTEwIDUyLDE2OCA4NCwxNTIiIGZpbGw9IiMzMjJkNDciLz48cG9seWdvbiBwb2ludHM9IjExMCwxMTAgMTY4LDE2OCAxMzYsMTUyIiBmaWxsPSIjNGQ0NjZiIi8+PHBvbHlnb24gcG9pbnRzPSIxMTAsMTEwIDE2OCwxNjggMTUyLDEzNiIgZmlsbD0iIzMyMmQ0NyIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDI0IDExMCwxMTAgODAsNjgiIGZpbGw9IiNlZmVjZjgiLz48cG9seWdvbiBwb2ludHM9IjExMCwyNCAxNDAsNjggMTEwLDExMCIgZmlsbD0iI2I3YWVlNiIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDE5NiA4MCwxNTIgMTEwLDExMCIgZmlsbD0iI2E4OWRkYiIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDE5NiAxMTAsMTEwIDE0MCwxNTIiIGZpbGw9IiM2ZjY1OWMiLz48cG9seWdvbiBwb2ludHM9IjI0LDExMCA2OCw4MCAxMTAsMTEwIiBmaWxsPSIjZGNkNmYyIi8+PHBvbHlnb24gcG9pbnRzPSIyNCwxMTAgMTEwLDExMCA2OCwxNDAiIGZpbGw9IiM4YjgwYmQiLz48cG9seWdvbiBwb2ludHM9IjE5NiwxMTAgMTUyLDgwIDExMCwxMTAiIGZpbGw9IiNjNWI5ZWEiLz48cG9seWdvbiBwb2ludHM9IjE5NiwxMTAgMTEwLDExMCAxNTIsMTQwIiBmaWxsPSIjNjQ1YjhmIi8+PHBhdGggZD0iTTExMCAyNCBMMTQwIDY4IEwxMTAgMTEwIEw4MCA2OCBaIE0xMTAgMTk2IEwxNDAgMTUyIEwxMTAgMTEwIEw4MCAxNTIgWiBNMjQgMTEwIEw2OCA4MCBMMTEwIDExMCBMNjggMTQwIFogTTE5NiAxMTAgTDE1MiA4MCBMMTEwIDExMCBMMTUyIDE0MCBaIiBmaWxsPSJub25lIiBzdHJva2U9IiNlZmVjZjgiIHN0cm9rZS1vcGFjaXR5PSIuNTUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTExMCAyNCBMMTEwIDE5NiBNMjQgMTEwIEwxOTYgMTEwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlZmVjZjgiIHN0cm9rZS1vcGFjaXR5PSIuNDIiIHN0cm9rZS13aWR0aD0iMS40Ii8+PHBvbHlnb24gcG9pbnRzPSIxMTAsOTIgMTI4LDExMCAxMTAsMTI4IDkyLDExMCIgZmlsbD0iIzhjNzI0YiIgc3Ryb2tlPSIjZjNlN2QwIiBzdHJva2Utd2lkdGg9IjEuNiIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDkyIDExMCwxMTAgOTIsMTEwIiBmaWxsPSIjZjdlYmQyIi8+PHBvbHlnb24gcG9pbnRzPSIxMTAsOTIgMTI4LDExMCAxMTAsMTEwIiBmaWxsPSIjZDliNzg0Ii8+PHBvbHlnb24gcG9pbnRzPSI5MiwxMTAgMTEwLDExMCAxMTAsMTI4IiBmaWxsPSIjY2ZhZTdlIi8+PC9zdmc+"
  },
  {
    "id": "eggsoup-visual-studio-dark-nyx",
    "name": "Visual Studio Dark Nyx",
    "colors": {
      "canvas": "#1E1E1E",
      "chrome": "#1E1E1E",
      "toolbar": "#1E1E1E",
      "toolbarForeground": "#E8F0F5",
      "toolbarBorder": "#39424A",
      "toolbarControl": "#2F353A",
      "toolbarControlForeground": "#E8F0F5",
      "toolbarControlHover": "#3A4249",
      "surface": "#1E2226",
      "surfaceRaised": "#262B2E",
      "surfaceOverlay": "#252526",
      "text": "#D4D4D4",
      "textMuted": "#83878A",
      "border": "#3F484E",
      "input": "#4C555D",
      "focus": "#3B9CFF",
      "accent": "#007ACC",
      "accentForeground": "#FFFFFF",
      "secondary": "#2D3841",
      "secondaryForeground": "#E8F0F5",
      "muted": "#262E34",
      "mutedForeground": "#83878A",
      "placeholder": "#CBD2D8",
      "secondaryLabel": "#83878A",
      "iconMuted": "#83878A",
      "error": "#FB414A",
      "errorForeground": "#FF6467",
      "errorSurface": "#412425",
      "warning": "#FE9A00",
      "warningForeground": "#FFB900",
      "warningSurface": "#423219",
      "update": "#4FC1FF",
      "updateForeground": "#E8F0F5",
      "updateSurface": "#36434D",
      "accentSurface": "#33404A",
      "accentSurfaceForeground": "#E8F0F5",
      "messageSurface": "#1c2933",
      "messageForeground": "#f2faff",
      "messageAction": "#007ACC",
      "messageActionForeground": "#FFFFFF",
      "messageActionHover": "#1A8CD8",
      "codeBackground": "#23272A",
      "codeForeground": "#E8F0F5",
      "searchMatchBackground": "#415A6D",
      "searchMatchForeground": "#D4D4D4",
      "searchMatchActiveBackground": "#748FA3",
      "searchMatchActiveForeground": "#000000",
      "sidebar": "#232A2F",
      "sidebarForeground": "#E8F0F5",
      "sidebarMutedForeground": "#9A9FA3",
      "sidebarControlSurface": "#30383D",
      "sidebarRowHover": "#29333B",
      "sidebarRowActive": "#313E47",
      "sidebarRowSelected": "#35434E",
      "sidebarBorder": "#414A52",
      "terminalBackground": "#1E1E1E",
      "terminalForeground": "#E8F0F5",
      "terminalCursor": "#4FC1FF",
      "terminalSelection": "#404E58",
      "terminalScrollbar": "#52575C",
      "terminalScrollbarHover": "#696E72"
    },
    "layer1": "#1E2226",
    "layer2": "#262B2E",
    "layer3": "#3A4249",
    "skyBg": "#0c0f14",
    "panelBg": "#22262b",
    "menuBg": "#1a1e22",
    "gridAlpha": 0.5,
    "secondaryGlow": "#4FC1FF",
    "sendBase": "#212224",
    "sendText": "#c9e5ff",
    "sendHoverText": "#ffffff",
    "addedColor": "#0DBC79",
    "doneColor": "#C586C0",
    "successColor": "#0DBC79",
    "emblemFilter": "drop-shadow(0 0 6px rgba(0, 122, 204, 0.67)) drop-shadow(0 0 26px rgba(79, 193, 255, 0.33))",
    "preview": [
      "#1E1E1E",
      "#262B2E",
      "#007ACC",
      "#4FC1FF"
    ],
    "shiki": {
      "constant": "#4FC1FF",
      "string": "#0DBC79",
      "comment": "#8F959B",
      "keyword": "#3B9CFF",
      "parameter": "#FE9A00",
      "function": "#DCDCAA",
      "stringExpression": "#0DBC79",
      "punctuation": "#9BA1A6",
      "link": "#4FC1FF"
    },
    "art": "data:image/png;base64,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",
    "emblem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PHBvbHlnb24gcG9pbnRzPSIzNiw3OCA1OCw2NCAxNTYsMTYyIDE1MiwxODggNDYsOTYiIGZpbGw9IiMwZDM1NTkiLz48cG9seWdvbiBwb2ludHM9IjE1MiwzMiAxODQsNDggMTUyLDU4IiBmaWxsPSIjMTc1ZDk5Ii8+PHBvbHlnb24gcG9pbnRzPSIzNiwxNDIgNTYsMTU4IDE1Miw2MiAxNTIsMzIiIGZpbGw9IiMxNTYzYTYiLz48cG9seWdvbiBwb2ludHM9IjM2LDE0MiA5NiwxMTAgMTUyLDMyIiBmaWxsPSIjMmM4OGQ0Ii8+PHBvbHlnb24gcG9pbnRzPSIxNTIsMzIgMTg0LDQ4IDE4NCwxNzIgMTUyLDE4OCIgZmlsbD0iIzAwN2FjYyIvPjxwb2x5Z29uIHBvaW50cz0iMTUyLDMyIDE4NCw0OCAxNjgsMTEwIDE1Miw4OCIgZmlsbD0iIzRmYzFmZiIvPjxwb2x5Z29uIHBvaW50cz0iMTY4LDExMCAxODQsNDggMTg0LDE3MiIgZmlsbD0iIzBiNjZhOCIvPjxwb2x5Z29uIHBvaW50cz0iMTUyLDg4IDE2OCwxMTAgMTUyLDE4OCIgZmlsbD0iIzFhOGVlMCIvPjxwb2x5Z29uIHBvaW50cz0iMzYsNzggNTYsNjIgMTUyLDE1OCAxNTIsMTg4IiBmaWxsPSIjNGZjMWZmIi8+PHBvbHlnb24gcG9pbnRzPSIzNiw3OCA1Niw2MiAxMDQsMTEwIDg2LDEyNiIgZmlsbD0iI2RmZjJmZiIvPjxwb2x5Z29uIHBvaW50cz0iMTA0LDExMCAxNTIsMTU4IDE1MiwxODggODYsMTI2IiBmaWxsPSIjMjc5YWU4Ii8+PHBvbHlnb24gcG9pbnRzPSIzNiw3OCA2NiwxMTAgMzYsMTQyIDI2LDExMCIgZmlsbD0iIzE0MjMzMyIgc3Ryb2tlPSIjNGZjMWZmIiBzdHJva2Utb3BhY2l0eT0iLjUiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHBvbHlnb24gcG9pbnRzPSIzNiw3OCA1MiwxMTAgMzYsMTQyIDI2LDExMCIgZmlsbD0iIzFhMzQ0ZCIvPjxwYXRoIGQ9Ik0xNTIgMzIgTDE4NCA0OCBMMTg0IDE3MiBMMTUyIDE4OCBMODYgMTI2IEw1NiAxNTggTDM2IDE0MiBMNjYgMTEwIEwzNiA3OCBMNTYgNjIgTDg2IDk0IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2RmZjJmZiIgc3Ryb2tlLW9wYWNpdHk9Ii42IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTUyIDMyIEwxNTIgMTg4IE0xNTIgMzIgTDE2OCAxMTAgTDE4NCA0OCBNMTY4IDExMCBMMTg0IDE3MiBNODYgOTQgTDE1MiAxNTggTTg2IDEyNiBMMTUyIDYyIiBmaWxsPSJub25lIiBzdHJva2U9IiNkZmYyZmYiIHN0cm9rZS1vcGFjaXR5PSIuNDIiIHN0cm9rZS13aWR0aD0iMS40IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxNjgsMjAgMTc2LDI4IDE2OCwzNiAxNjAsMjgiIGZpbGw9IiNmZTlhMDAiIHN0cm9rZT0iI2ZmZjJjYyIgc3Ryb2tlLXdpZHRoPSIxLjIiLz48L3N2Zz4="
  },
  {
    "id": "eggsoup-neutral-slate-nyx",
    "name": "Neutral Slate Nyx",
    "colors": {
      "canvas": "#1c2128",
      "chrome": "#1c2128",
      "toolbar": "#1c2128",
      "toolbarForeground": "#e6edf3",
      "toolbarBorder": "#373e47",
      "toolbarControl": "#22272e",
      "toolbarControlForeground": "#e6edf3",
      "toolbarControlHover": "#282e37",
      "surface": "#22272e",
      "surfaceRaised": "#2d333b",
      "surfaceOverlay": "#282e37",
      "text": "#e6edf3",
      "textMuted": "#919ca8",
      "border": "#373e47",
      "input": "#444d57",
      "focus": "#6ca4d6",
      "accent": "#6ca4d6",
      "accentForeground": "#101720",
      "secondary": "#22272e",
      "secondaryForeground": "#e6edf3",
      "muted": "#22272e",
      "mutedForeground": "#919ca8",
      "placeholder": "#b8c2cc",
      "secondaryLabel": "#919ca8",
      "iconMuted": "#919ca8",
      "error": "#e06c75",
      "errorForeground": "#f2a9ad",
      "errorSurface": "#3b2427",
      "warning": "#d9a441",
      "warningForeground": "#e6c275",
      "warningSurface": "#3a3020",
      "update": "#6fae8e",
      "updateForeground": "#9dd4b6",
      "updateSurface": "#23342c",
      "accentSurface": "#22344a",
      "accentSurfaceForeground": "#e6edf3",
      "messageSurface": "#2d333b",
      "messageForeground": "#e6edf3",
      "messageAction": "#6ca4d6",
      "messageActionForeground": "#101720",
      "messageActionHover": "#87b7e3",
      "codeBackground": "#1c2128",
      "codeForeground": "#e6edf3",
      "searchMatchBackground": "#4a4020",
      "searchMatchForeground": "#e6edf3",
      "searchMatchActiveBackground": "#d9a441",
      "searchMatchActiveForeground": "#101720",
      "sidebar": "#1c2128",
      "sidebarForeground": "#e6edf3",
      "sidebarMutedForeground": "#919ca8",
      "sidebarControlSurface": "#22272e",
      "sidebarRowHover": "#282e37",
      "sidebarRowActive": "#323944",
      "sidebarRowSelected": "#2d3540",
      "sidebarBorder": "#373e47",
      "terminalBackground": "#1c2128",
      "terminalForeground": "#e6edf3",
      "terminalCursor": "#6ca4d6",
      "terminalSelection": "#2d3540",
      "terminalScrollbar": "#444d57",
      "terminalScrollbarHover": "#7d8793"
    },
    "layer1": "#22272e",
    "layer2": "#2d333b",
    "layer3": "#323944",
    "skyBg": "#0c0f14",
    "panelBg": "#242a32",
    "menuBg": "#1a1f26",
    "gridAlpha": 0.5,
    "secondaryGlow": "#6fae8e",
    "sendBase": "#242a32",
    "sendText": "#b0d2ee",
    "sendHoverText": "#ffffff",
    "addedColor": "#6fae8e",
    "doneColor": "#87b7e3",
    "successColor": "#6fae8e",
    "emblemFilter": "drop-shadow(0 0 6px rgba(108, 164, 214, 0.62)) drop-shadow(0 0 26px rgba(108, 164, 214, 0.36))",
    "preview": [
      "#1c2128",
      "#2d333b",
      "#6ca4d6",
      "#6fae8e"
    ],
    "shiki": {
      "constant": "#d9a441",
      "string": "#9dd4b6",
      "comment": "#919ca8",
      "keyword": "#e06c75",
      "parameter": "#e6c275",
      "function": "#87b7e3",
      "stringExpression": "#9dd4b6",
      "punctuation": "#919ca8",
      "link": "#6ca4d6"
    },
    "art": "data:image/png;base64,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",
    "emblem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PGRlZnM+PGNsaXBQYXRoIGlkPSJjMjEiPjxjaXJjbGUgY3g9IjExMCIgY3k9IjExMCIgcj0iNzgiLz48L2NsaXBQYXRoPjxsaW5lYXJHcmFkaWVudCBpZD0iZzIxYmVhbSIgeDE9IjAiIHkxPSIuNSIgeDI9IjEiIHkyPSIuMyI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2YzZjhmYyIgc3RvcC1vcGFjaXR5PSIuOTUiLz48c3RvcCBvZmZzZXQ9IjQ1JSIgc3RvcC1jb2xvcj0iIzZjYTRkNiIgc3RvcC1vcGFjaXR5PSIuNDgiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiM2Y2E0ZDYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJnMjF0d3IiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIwIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZTZlZGYzIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjOGRhOWM0Ii8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTEwIiBjeT0iMTEwIiByPSI3OCIgZmlsbD0iIzE0MWEyMiIgc3Ryb2tlPSIjNmNhNGQ2IiBzdHJva2Utb3BhY2l0eT0iLjQyIiBzdHJva2Utd2lkdGg9IjIuNSIvPjxnIGNsaXAtcGF0aD0idXJsKCNjMjEpIj48cG9seWdvbiBwb2ludHM9Ijk0LDc2IDE5OCw0MiAxOTgsMTA4IDk0LDg0IiBmaWxsPSJ1cmwoI2cyMWJlYW0pIi8+PHBhdGggZD0iTTI2IDE0NCBRNzIgMTM2IDExNiAxNDQgVDIwMCAxNDIgTDIwMCAxOTYgTDI2IDE5NiBaIiBmaWxsPSIjMjczNDQ0Ii8+PHBhdGggZD0iTTQwIDE2MCBROTUgMTUyIDE1MCAxNjAgVDIwMCAxNTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzZmYWU4ZSIgc3Ryb2tlLW9wYWNpdHk9Ii40NSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cG9seWdvbiBwb2ludHM9Ijc4LDE1NCA4NCw4OCA5OCw4OCAxMDQsMTU0IiBmaWxsPSJ1cmwoI2cyMXR3cikiLz48cmVjdCB4PSI4MSIgeT0iNzQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIxNCIgcng9IjIiIGZpbGw9IiNlNmVkZjMiLz48cGF0aCBkPSJNNzggNzQgTDkxIDYxIEwxMDQgNzQgWiIgZmlsbD0iIzZjYTRkNiIvPjxjaXJjbGUgY3g9IjkxIiBjeT0iODEiIHI9IjQuNSIgZmlsbD0iI2ZmZmJlNiIvPjxyZWN0IHg9IjgzIiB5PSIxMDYiIHdpZHRoPSIxNiIgaGVpZ2h0PSI5IiBmaWxsPSIjM2E0YzYwIi8+PHJlY3QgeD0iODEiIHk9IjEyOCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjkiIGZpbGw9IiMzYTRjNjAiLz48L2c+PGNpcmNsZSBjeD0iMTEwIiBjeT0iMTEwIiByPSI3OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTZlZGYzIiBzdHJva2Utb3BhY2l0eT0iLjIyIiBzdHJva2Utd2lkdGg9IjEuNSIvPjwvc3ZnPg=="
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
    "id": "eggsoup-inkstone-canghai-nyx",
    "name": "Inkstone Canghai Nyx",
    "colors": {
      "canvas": "#0d1822",
      "chrome": "#0d1822",
      "toolbar": "#0d1822",
      "toolbarForeground": "#c8d4dd",
      "toolbarBorder": "#1b2b36",
      "toolbarControl": "#152430",
      "toolbarControlForeground": "#c8d4dd",
      "toolbarControlHover": "#1a2c38",
      "surface": "#12202b",
      "surfaceRaised": "#182833",
      "surfaceOverlay": "#1f3340",
      "text": "#c8d4dd",
      "textMuted": "#9aadbb",
      "border": "#29404f",
      "input": "#3d5a6d",
      "focus": "#63bbd0",
      "accent": "#63bbd0",
      "accentForeground": "#0d1822",
      "secondary": "#12202b",
      "secondaryForeground": "#c8d4dd",
      "muted": "#0a131b",
      "mutedForeground": "#899fb1",
      "placeholder": "#c2cfd8",
      "secondaryLabel": "#9aadbb",
      "iconMuted": "#8ea4b5",
      "error": "#e25737",
      "errorForeground": "#ff7352",
      "errorSurface": "#2b2125",
      "warning": "#d6a01d",
      "warningForeground": "#d6a01d",
      "warningSurface": "#292b21",
      "update": "#63bbd0",
      "updateForeground": "#63bbd0",
      "updateSurface": "#1a303c",
      "accentSurface": "#1f3340",
      "accentSurfaceForeground": "#c8d4dd",
      "messageSurface": "#152530",
      "messageForeground": "#c8d4dd",
      "messageAction": "#63bbd0",
      "messageActionForeground": "#0d1822",
      "messageActionHover": "#76c3d6",
      "codeBackground": "#0f1e28",
      "codeForeground": "#c8d4dd",
      "searchMatchBackground": "#4a3d16",
      "searchMatchForeground": "#f0e4c4",
      "searchMatchActiveBackground": "#d6a01d",
      "searchMatchActiveForeground": "#0d1822",
      "sidebar": "#0a131b",
      "sidebarForeground": "#c8d4dd",
      "sidebarMutedForeground": "#899fb1",
      "sidebarControlSurface": "#152430",
      "sidebarRowHover": "#172733",
      "sidebarRowActive": "#20323f",
      "sidebarRowSelected": "#1d3644",
      "sidebarBorder": "#1b2b36",
      "terminalBackground": "#0a131b",
      "terminalForeground": "#c8d4dd",
      "terminalCursor": "#63bbd0",
      "terminalSelection": "#1d3644",
      "terminalScrollbar": "#29404f",
      "terminalScrollbarHover": "#3d5a6d"
    },
    "layer1": "#12202b",
    "layer2": "#182833",
    "layer3": "#20323f",
    "skyBg": "#060c12",
    "panelBg": "#11202a",
    "menuBg": "#0a131b",
    "gridAlpha": 0.5,
    "secondaryGlow": "#76c3d6",
    "sendBase": "#1b2d39",
    "sendText": "#d6ecf4",
    "sendHoverText": "#ffffff",
    "addedColor": "#74b08e",
    "doneColor": "#76c3d6",
    "successColor": "#74b08e",
    "emblemFilter": "drop-shadow(0 0 6px rgba(99, 187, 208, 0.60)) drop-shadow(0 0 22px rgba(99, 187, 208, 0.30))",
    "preview": [
      "#0d1822",
      "#182833",
      "#63bbd0",
      "#76c3d6"
    ],
    "shiki": {
      "constant": "#d6a01d",
      "string": "#74b08e",
      "comment": "#899fb1",
      "keyword": "#e25737",
      "parameter": "#e0b34e",
      "function": "#8ec0d8",
      "stringExpression": "#74b08e",
      "punctuation": "#9aadbb",
      "link": "#63bbd0"
    },
    "art": "data:image/png;base64,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",
    "emblem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnMjRfd2F2ZTEiIHgxPSIwIiB5MT0iMCIgeDI9IjEiIHkyPSIxIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjZThmM2Y4Ii8+PHN0b3Agb2Zmc2V0PSI0MCUiIHN0b3AtY29sb3I9IiM2M2JiZDAiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiMxOTQyNTciLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZzI0X3dhdmUyIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iIzNiOGFhNiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzEwMjczOCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xNjIgNDAgTDE2NiA1NCBMMTgwIDU4IEwxNjYgNjIgTDE2MiA3NiBMMTU4IDYyIEwxNDQgNTggTDE1OCA1NCBaIiBmaWxsPSIjZDZhMDFkIi8+PGNpcmNsZSBjeD0iMTYyIiBjeT0iNTgiIHI9IjMuNSIgZmlsbD0iI2ZmZjRjOCIvPjxwYXRoIGQ9Ik0zMCAxNjQgQzMyIDk0IDc0IDUyIDEyNiA1NiBDMTQwIDU3IDE1MCA2NiAxNDQgNzYgQzEzNCA2OCAxMTggNzAgMTEyIDgwIEMxMjIgODAgMTMwIDg4IDEyNCA5NiBDMTEyIDg2IDk4IDkyIDk0IDEwOCBDODggMTI4IDExMCAxNDQgMTQ2IDEzNiBDMTY4IDEzMiAxODIgMTQwIDE5MCAxNTIgTDE5MCAxNzIgTDMwIDE3MiBaIiBmaWxsPSJ1cmwoI2cyNF93YXZlMSkiIHN0cm9rZT0iI2UxZWRmNCIgc3Ryb2tlLW9wYWNpdHk9IjAuNzIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0zMCAxNjYgQzY2IDE0NCAxMDggMTQ4IDEzOCAxNjIgQzE1OCAxNzAgMTc2IDE2NCAxOTAgMTU2IEwxOTAgMTgyIEwzMCAxODIgWiIgZmlsbD0idXJsKCNnMjRfd2F2ZTIpIiBzdHJva2U9IiM2M2JiZDAiIHN0cm9rZS1vcGFjaXR5PSIwLjYiIHN0cm9rZS13aWR0aD0iMS44Ii8+PHBhdGggZD0iTTU0IDEwNiBRNzQgNjIgMTI0IDYwIiBmaWxsPSJub25lIiBzdHJva2U9IiNmMmY5ZmMiIHN0cm9rZS13aWR0aD0iMy4yIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48Y2lyY2xlIGN4PSIxNTIiIGN5PSI4NiIgcj0iMy40IiBmaWxsPSIjZTFlZGY0Ii8+PGNpcmNsZSBjeD0iMTQ0IiBjeT0iMTAwIiByPSIyLjQiIGZpbGw9IiM2M2JiZDAiLz48Y2lyY2xlIGN4PSIxNjAiIGN5PSI5OCIgcj0iMiIgZmlsbD0iI2UxZWRmNCIgb3BhY2l0eT0iMC44NSIvPjwvc3ZnPg=="
  },
  {
    "id": "eggsoup-misty-teal-nyx",
    "name": "Misty Teal Nyx",
    "colors": {
      "canvas": "#172022",
      "chrome": "#172022",
      "toolbar": "#172022",
      "toolbarForeground": "#dce9e8",
      "toolbarBorder": "#2a3a3c",
      "toolbarControl": "#202c2e",
      "toolbarControlForeground": "#dce9e8",
      "toolbarControlHover": "#273639",
      "surface": "#172022",
      "surfaceRaised": "#202c2e",
      "surfaceOverlay": "#263437",
      "text": "#dce9e8",
      "textMuted": "#94a8a8",
      "border": "#2a3a3c",
      "input": "#35484a",
      "focus": "#7fb9b5",
      "accent": "#7fb9b5",
      "accentForeground": "#101d1f",
      "secondary": "#202c2e",
      "secondaryForeground": "#dce9e8",
      "muted": "#131c1e",
      "mutedForeground": "#94a8a8",
      "placeholder": "#a7bcbc",
      "secondaryLabel": "#94a8a8",
      "iconMuted": "#94a8a8",
      "error": "#d98f8a",
      "errorForeground": "#f2c4c0",
      "errorSurface": "#372523",
      "warning": "#d8ae70",
      "warningForeground": "#f0d7a8",
      "warningSurface": "#372f20",
      "update": "#7fb9b5",
      "updateForeground": "#b8dedb",
      "updateSurface": "#203334",
      "accentSurface": "#25383a",
      "accentSurfaceForeground": "#dce9e8",
      "messageSurface": "#202c2e",
      "messageForeground": "#dce9e8",
      "messageAction": "#7fb9b5",
      "messageActionForeground": "#101d1f",
      "messageActionHover": "#96cbc7",
      "codeBackground": "#131c1e",
      "codeForeground": "#dce9e8",
      "searchMatchBackground": "#2b4540",
      "searchMatchForeground": "#dce9e8",
      "searchMatchActiveBackground": "#a9d8d4",
      "searchMatchActiveForeground": "#101d1f",
      "sidebar": "#141d1f",
      "sidebarForeground": "#dce9e8",
      "sidebarMutedForeground": "#8ea2a2",
      "sidebarControlSurface": "#202c2e",
      "sidebarRowHover": "#202c2e",
      "sidebarRowActive": "#263437",
      "sidebarRowSelected": "#263437",
      "sidebarBorder": "#243335",
      "terminalBackground": "#172022",
      "terminalForeground": "#dce9e8",
      "terminalCursor": "#a4d4d0",
      "terminalSelection": "#2a3c3e",
      "terminalScrollbar": "#33484a",
      "terminalScrollbarHover": "#465f61"
    },
    "layer1": "#202c2e",
    "layer2": "#263437",
    "layer3": "#273639",
    "skyBg": "#090e10",
    "panelBg": "#1b2427",
    "menuBg": "#131c1e",
    "gridAlpha": 0.5,
    "secondaryGlow": "#96cbc7",
    "sendBase": "#233033",
    "sendText": "#a4d4d0",
    "sendHoverText": "#ffffff",
    "addedColor": "#7fb9b5",
    "doneColor": "#a4d4d0",
    "successColor": "#7fb9b5",
    "emblemFilter": "drop-shadow(0 0 6px rgba(127, 185, 181, 0.53)) drop-shadow(0 0 22px rgba(127, 185, 181, 0.27))",
    "preview": [
      "#172022",
      "#263437",
      "#7fb9b5",
      "#96cbc7"
    ],
    "shiki": {
      "constant": "#d8ae70",
      "string": "#a4d4d0",
      "comment": "#94a8a8",
      "keyword": "#d98f8a",
      "parameter": "#f0d7a8",
      "function": "#96cbc7",
      "stringExpression": "#a4d4d0",
      "punctuation": "#9cb0b0",
      "link": "#b8dedb"
    },
    "art": "data:image/png;base64,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",
    "emblem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJnMzBfbGl0IiB4MT0iMCIgeTE9IjAiIHgyPSIwIiB5Mj0iMSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2U4ZjNmMiIvPjxzdG9wIG9mZnNldD0iNTUlIiBzdG9wLWNvbG9yPSIjN2ZiOWI1Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMzY1YzViIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgaWQ9ImczMF9taXN0IiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMCI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2RjZTllOCIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIyOCUiIHN0b3AtY29sb3I9IiNkY2U5ZTgiIHN0b3Atb3BhY2l0eT0iMC45Ii8+PHN0b3Agb2Zmc2V0PSI3MiUiIHN0b3AtY29sb3I9IiM3ZmI5YjUiIHN0b3Atb3BhY2l0eT0iMC44NiIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzdmYjliNSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGNpcmNsZSBjeD0iMTU2IiBjeT0iNTQiIHI9IjUiIGZpbGw9IiNkOGFlNzAiLz48Y2lyY2xlIGN4PSIxNTYiIGN5PSI1NCIgcj0iMTAiIGZpbGw9IiNkOGFlNzAiIG9wYWNpdHk9IjAuMjIiLz48cG9seWdvbiBwb2ludHM9IjI4LDE1OCA3Miw4MiAxMTQsMTU4IiBmaWxsPSIjMjMzNzM4IiBzdHJva2U9IiM3ZmI5YjUiIHN0cm9rZS1vcGFjaXR5PSIwLjUiIHN0cm9rZS13aWR0aD0iMS42IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIyOCwxNTggNzIsODIgNzIsMTU4IiBmaWxsPSIjNTE4MzgwIi8+PHBvbHlnb24gcG9pbnRzPSIxMDgsMTU4IDE1Miw4OCAxOTIsMTU4IiBmaWxsPSIjMWYzMTMzIiBzdHJva2U9IiM3ZmI5YjUiIHN0cm9rZS1vcGFjaXR5PSIwLjQ1IiBzdHJva2Utd2lkdGg9IjEuNiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTA4LDE1OCAxNTIsODggMTUyLDE1OCIgZmlsbD0iIzQ2NzU3MiIvPjxwb2x5Z29uIHBvaW50cz0iNTYsMTYyIDExMCw0NCAxNjYsMTYyIiBmaWxsPSIjMjYzZTQwIiBzdHJva2U9IiNkY2U5ZTgiIHN0cm9rZS1vcGFjaXR5PSIwLjY1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cG9seWdvbiBwb2ludHM9IjU2LDE2MiAxMTAsNDQgMTEwLDE2MiIgZmlsbD0idXJsKCNnMzBfbGl0KSIvPjxwYXRoIGQ9Ik0yNCAxMzYgUTY2IDEyNCAxMTAgMTM0IFQxOTYgMTMyIEwxOTYgMTQyIFExNTIgMTQ2IDExMCAxNDAgVDI0IDE0MiBaIiBmaWxsPSJ1cmwoI2czMF9taXN0KSIvPjxwYXRoIGQ9Ik0zOCAxNTQgUTgyIDE0NiAxMjQgMTU0IFQxODYgMTUyIEwxODYgMTYwIFExNDQgMTY0IDExMCAxNTkgVDM4IDE2MCBaIiBmaWxsPSJ1cmwoI2czMF9taXN0KSIgb3BhY2l0eT0iMC43OCIvPjwvc3ZnPg=="
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
    "id": "eggsoup-verdant-soft-nyx",
    "name": "Verdant Soft Nyx",
    "colors": {
      "canvas": "#1c211e",
      "chrome": "#1c211e",
      "toolbar": "#1c211e",
      "toolbarForeground": "#dfe7e1",
      "toolbarBorder": "#303832",
      "toolbarControl": "#252c28",
      "toolbarControlForeground": "#dfe7e1",
      "toolbarControlHover": "#2e3731",
      "surface": "#1c211e",
      "surfaceRaised": "#242b27",
      "surfaceOverlay": "#2a322d",
      "text": "#dfe7e1",
      "textMuted": "#9aa89f",
      "border": "#303832",
      "input": "#39433c",
      "focus": "#86b598",
      "accent": "#86b598",
      "accentForeground": "#121a15",
      "secondary": "#242b27",
      "secondaryForeground": "#dfe7e1",
      "muted": "#171c19",
      "mutedForeground": "#9aa89f",
      "placeholder": "#a8b7ad",
      "secondaryLabel": "#9aa89f",
      "iconMuted": "#9aa89f",
      "error": "#d98f8a",
      "errorForeground": "#f2c4c0",
      "errorSurface": "#372523",
      "warning": "#d8ae70",
      "warningForeground": "#f0d7a8",
      "warningSurface": "#372f20",
      "update": "#86b598",
      "updateForeground": "#bfe0c9",
      "updateSurface": "#24352a",
      "accentSurface": "#2b3a30",
      "accentSurfaceForeground": "#dfe7e1",
      "messageSurface": "#242b27",
      "messageForeground": "#dfe7e1",
      "messageAction": "#86b598",
      "messageActionForeground": "#121a15",
      "messageActionHover": "#9cc7ab",
      "codeBackground": "#171c19",
      "codeForeground": "#dfe7e1",
      "searchMatchBackground": "#3a4630",
      "searchMatchForeground": "#dfe7e1",
      "searchMatchActiveBackground": "#b6d4bf",
      "searchMatchActiveForeground": "#121a15",
      "sidebar": "#181d1a",
      "sidebarForeground": "#dfe7e1",
      "sidebarMutedForeground": "#94a299",
      "sidebarControlSurface": "#242b27",
      "sidebarRowHover": "#242b27",
      "sidebarRowActive": "#2b342e",
      "sidebarRowSelected": "#2b342e",
      "sidebarBorder": "#2b332e",
      "terminalBackground": "#1c211e",
      "terminalForeground": "#dfe7e1",
      "terminalCursor": "#a8c9b3",
      "terminalSelection": "#303a33",
      "terminalScrollbar": "#3a443d",
      "terminalScrollbarHover": "#4d5a51"
    },
    "layer1": "#242b27",
    "layer2": "#2b342e",
    "layer3": "#2e3731",
    "skyBg": "#080b09",
    "panelBg": "#1e2420",
    "menuBg": "#171c19",
    "gridAlpha": 0.5,
    "secondaryGlow": "#d8ae70",
    "sendBase": "#272e29",
    "sendText": "#a8c9b3",
    "sendHoverText": "#ffffff",
    "addedColor": "#86b598",
    "doneColor": "#9cc7ab",
    "successColor": "#86b598",
    "emblemFilter": "drop-shadow(0 0 6px rgba(134, 181, 152, 0.65)) drop-shadow(0 0 26px rgba(216, 174, 112, 0.29))",
    "preview": [
      "#1c211e",
      "#2b342e",
      "#86b598",
      "#d8ae70"
    ],
    "shiki": {
      "constant": "#d8ae70",
      "string": "#86b598",
      "comment": "#9aa89f",
      "keyword": "#d98f8a",
      "parameter": "#e0b083",
      "function": "#9cc7ab",
      "stringExpression": "#86b598",
      "punctuation": "#a8b5ac",
      "link": "#bfe0c9"
    },
    "art": "data:image/png;base64,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",
    "emblem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PHBvbHlnb24gcG9pbnRzPSIxMDQsMTYyIDQ2LDg0IDU0LDEzMiIgZmlsbD0iIzJkNGEzOSIvPjxwb2x5Z29uIHBvaW50cz0iMTA0LDE2MiA0Niw4NCA4OCwxMDgiIGZpbGw9IiM1ZThjNzAiLz48cG9seWdvbiBwb2ludHM9IjQ2LDg0IDEwNCwxNjIgNTQsMTMyIiBmaWxsPSJub25lIiBzdHJva2U9IiNhOGM5YjMiIHN0cm9rZS1vcGFjaXR5PSIuNTUiIHN0cm9rZS13aWR0aD0iMS44IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBvbHlnb24gcG9pbnRzPSIxMDQsMTg2IDEwOCwxMzYgMTY4LDM4IDE1OCwxMTggMTM0LDE1OCIgZmlsbD0iIzI3NDAzMSIvPjxwb2x5Z29uIHBvaW50cz0iMTA0LDE3OCA4MiwxMTQgMTE4LDYyIDE2OCwzOCAxMjQsMTE2IiBmaWxsPSIjYThjOWIzIi8+PHBvbHlnb24gcG9pbnRzPSIxMTgsNjIgMTY4LDM4IDEzNCw4OCIgZmlsbD0iI2U1ZWZlOCIvPjxwb2x5Z29uIHBvaW50cz0iODIsMTE0IDExOCw2MiAxMjQsMTE2IiBmaWxsPSIjYzdkZWQwIi8+PHBvbHlnb24gcG9pbnRzPSIxNjgsMzggMTU4LDExOCAxMjQsMTE2IiBmaWxsPSIjNWE4NzZjIi8+PHBvbHlnb24gcG9pbnRzPSIxMjQsMTE2IDE1OCwxMTggMTM0LDE1OCAxMDQsMTc4IiBmaWxsPSIjM2E2MTRhIi8+PHBvbHlnb24gcG9pbnRzPSIxMDQsMTc4IDgyLDExNCAxMTgsNjIgMTY4LDM4IDE1OCwxMTggMTM0LDE1OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZGZlN2UxIiBzdHJva2Utb3BhY2l0eT0iLjYyIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTA0IDE4OCBMMTI0IDExNiBMMTY4IDM4IE04MiAxMTQgTDEyNCAxMTYgTDE1OCAxMTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2RmZTdlMSIgc3Ryb2tlLW9wYWNpdHk9Ii40NiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cG9seWdvbiBwb2ludHM9IjYwLDUyIDY2LDU4IDYwLDY0IDU0LDU4IiBmaWxsPSIjZjNkNjk2IiBzdHJva2U9IiNmZmY3ZGYiIHN0cm9rZS13aWR0aD0iMSIvPjxwb2x5Z29uIHBvaW50cz0iMTc0LDE0MiAxODAsMTQ4IDE3NCwxNTQgMTY4LDE0OCIgZmlsbD0iI2Q4YWU3MCIvPjxwb2x5Z29uIHBvaW50cz0iNzgsMTYyIDgyLDE2NiA3OCwxNzAgNzQsMTY2IiBmaWxsPSIjZjNkNjk2Ii8+PC9zdmc+"
  },
  {
    "id": "eggsoup-fields-of-the-shire-nyx",
    "name": "Fields of the Shire Nyx",
    "colors": {
      "canvas": "#1b1815",
      "chrome": "#1b1815",
      "toolbar": "#1b1815",
      "toolbarForeground": "#e9decf",
      "toolbarBorder": "#2b2825",
      "toolbarControl": "#24211e",
      "toolbarControlForeground": "#e9decf",
      "toolbarControlHover": "#312e2b",
      "surface": "#282320",
      "surfaceRaised": "#24211e",
      "surfaceOverlay": "#24211e",
      "text": "#e9decf",
      "textMuted": "#988e7f",
      "border": "#2b2825",
      "input": "#4a4641",
      "focus": "#809062",
      "accent": "#809062",
      "accentForeground": "#0c0a08",
      "secondary": "#24211e",
      "secondaryForeground": "#e9decf",
      "muted": "#161311",
      "mutedForeground": "#988e7f",
      "placeholder": "#bfb5a5",
      "secondaryLabel": "#988e7f",
      "iconMuted": "#988e7f",
      "error": "#c47466",
      "errorForeground": "#f3d6d1",
      "errorSurface": "#51160e",
      "warning": "#c47a3a",
      "warningForeground": "#f2d8c5",
      "warningSurface": "#4c1e00",
      "update": "#798d99",
      "updateForeground": "#d8dfe3",
      "updateSurface": "#1e303a",
      "accentSurface": "#312e27",
      "accentSurfaceForeground": "#e9decf",
      "messageSurface": "#28281e",
      "messageForeground": "#e9decf",
      "messageAction": "#809062",
      "messageActionForeground": "#0c0a08",
      "messageActionHover": "#8a996f",
      "codeBackground": "#191613",
      "codeForeground": "#e9decf",
      "searchMatchBackground": "#3c3e2e",
      "searchMatchForeground": "#e9decf",
      "searchMatchActiveBackground": "#555c41",
      "searchMatchActiveForeground": "#e9decf",
      "sidebar": "#161311",
      "sidebarForeground": "#e9decf",
      "sidebarMutedForeground": "#948b7c",
      "sidebarControlSurface": "#24211e",
      "sidebarRowHover": "#24211f",
      "sidebarRowActive": "#2e2b29",
      "sidebarRowSelected": "#312d29",
      "sidebarBorder": "#2a2724",
      "terminalBackground": "#1b1815",
      "terminalForeground": "#e9decf",
      "terminalCursor": "#e9decf",
      "terminalSelection": "#353629",
      "terminalScrollbar": "#24211e",
      "terminalScrollbarHover": "#312e2b"
    },
    "layer1": "#282320",
    "layer2": "#2e2b29",
    "layer3": "#312e2b",
    "skyBg": "#0c0a08",
    "panelBg": "#1d1a16",
    "menuBg": "#161311",
    "gridAlpha": 0.5,
    "secondaryGlow": "#c47a3a",
    "sendBase": "#211e1c",
    "sendText": "#e9decf",
    "sendHoverText": "#ffffff",
    "addedColor": "#8a996f",
    "doneColor": "#798d99",
    "successColor": "#809062",
    "emblemFilter": "drop-shadow(0 0 6px rgba(128, 144, 98, 0.60)) drop-shadow(0 0 26px rgba(196, 122, 58, 0.31))",
    "preview": [
      "#1b1815",
      "#2e2b29",
      "#809062",
      "#c47a3a"
    ],
    "shiki": {
      "constant": "#d18f4e",
      "string": "#a3b37e",
      "comment": "#988e7f",
      "keyword": "#d68a7c",
      "parameter": "#d8c08a",
      "function": "#9fb287",
      "stringExpression": "#a3b37e",
      "punctuation": "#a39a8b",
      "link": "#798d99"
    },
    "art": "data:image/png;base64,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",
    "emblem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PHBvbHlnb24gcG9pbnRzPSIyOCwxNjYgNDQsOTYgMTEwLDQ0IDE3Niw5NiAxOTIsMTY2IiBmaWxsPSIjMmEzMDIwIiBzdHJva2U9IiNhNWI4ODAiIHN0cm9rZS1vcGFjaXR5PSIuNTUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMjgsMTY2IDQ0LDk2IDExMCw0NCAxMTAsNzIgNjQsMTE0IDYwLDE2NiIgZmlsbD0iIzVlNmU0NCIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDQ0IDE3Niw5NiAxOTIsMTY2IDE2MCwxNjYgMTU2LDExNCAxMTAsNzIiIGZpbGw9IiMzZTQ5MmQiLz48cG9seWdvbiBwb2ludHM9IjQ0LDk2IDExMCw0NCAxMTAsNzIgNjQsMTE0IiBmaWxsPSIjOGZhMzZiIi8+PHBvbHlnb24gcG9pbnRzPSIxMTAsNzAgMTQ0LDg0IDE1OCwxMTggMTQ0LDE1MiAxMTAsMTY2IDc2LDE1MiA2MiwxMTggNzYsODQiIGZpbGw9IiNlOWRlY2YiIHN0cm9rZT0iI2ZmZjZlOCIgc3Ryb2tlLW9wYWNpdHk9Ii42IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDc4IDEzOCw5MCAxNTAsMTE4IDEzOCwxNDYgMTEwLDE1OCA4MiwxNDYgNzAsMTE4IDgyLDkwIiBmaWxsPSIjNGY1YzM5Ii8+PHBvbHlnb24gcG9pbnRzPSIxMTAsNzggMTM4LDkwIDExMCwxMTggODIsOTAiIGZpbGw9IiM5NWE4NzIiLz48cG9seWdvbiBwb2ludHM9IjgyLDkwIDExMCwxMTggODIsMTQ2IDcwLDExOCIgZmlsbD0iIzc3ODc1OSIvPjxwb2x5Z29uIHBvaW50cz0iMTM4LDkwIDE1MCwxMTggMTM4LDE0NiAxMTAsMTE4IiBmaWxsPSIjNWQ2YjQ0Ii8+PHBvbHlnb24gcG9pbnRzPSI4MiwxNDYgMTEwLDExOCAxMzgsMTQ2IDExMCwxNTgiIGZpbGw9IiMzZjRhMmUiLz48cGF0aCBkPSJNOTUgODUgVjE1MSBNMTI1IDg1IFYxNTEiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzI4MjMxZCIgc3Ryb2tlLW9wYWNpdHk9Ii41NSIgc3Ryb2tlLXdpZHRoPSIxLjgiLz48cG9seWdvbiBwb2ludHM9IjExMCw3OCAxMzgsOTAgMTUwLDExOCAxMzgsMTQ2IDExMCwxNTggODIsMTQ2IDcwLDExOCA4Miw5MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZTlkZWNmIiBzdHJva2Utb3BhY2l0eT0iLjUiIHN0cm9rZS13aWR0aD0iMS41Ii8+PHBvbHlnb24gcG9pbnRzPSIxMTAsMTA4IDEyMCwxMTggMTEwLDEyOCAxMDAsMTE4IiBmaWxsPSIjYzQ3YTNhIiBzdHJva2U9IiNmZmYwY2YiIHN0cm9rZS13aWR0aD0iMS42Ii8+PHBvbHlnb24gcG9pbnRzPSIxMTAsMTA4IDExMCwxMTggMTAwLDExOCIgZmlsbD0iI2ZmZTZhOCIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDEwOCAxMjAsMTE4IDExMCwxMTgiIGZpbGw9IiNlOGI0NjgiLz48cG9seWdvbiBwb2ludHM9IjIyLDE2NiAxOTgsMTY2IDE4NCwxNzggMzYsMTc4IiBmaWxsPSIjMmUyNzIwIiBzdHJva2U9IiM4MDkwNjIiIHN0cm9rZS1vcGFjaXR5PSIuNSIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48L3N2Zz4="
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
  },
  {
    "id": "eggsoup-flexoki-dark-nyx",
    "name": "Flexoki Dark Nyx",
    "colors": {
      "canvas": "#1C1B1A",
      "chrome": "#1C1B1A",
      "toolbar": "#1C1B1A",
      "toolbarForeground": "#CECDC3",
      "toolbarBorder": "#343331",
      "toolbarControl": "#2a2928",
      "toolbarControlForeground": "#CECDC3",
      "toolbarControlHover": "#31302e",
      "surface": "#282726",
      "surfaceRaised": "#2d2c2b",
      "surfaceOverlay": "#32312f",
      "text": "#CECDC3",
      "textMuted": "#8E8C86",
      "border": "#343331",
      "input": "#3c3b38",
      "focus": "#DA702C",
      "accent": "#DA702C",
      "accentForeground": "#160d0a",
      "secondary": "#252422",
      "secondaryForeground": "#CECDC3",
      "muted": "#252422",
      "mutedForeground": "#8E8C86",
      "placeholder": "#ABA9A2",
      "secondaryLabel": "#8E8C86",
      "iconMuted": "#8E8C86",
      "error": "#E06154",
      "errorForeground": "#edb8b3",
      "errorSurface": "#32211f",
      "warning": "#D0A215",
      "warningForeground": "#ffffff",
      "warningSurface": "#322b19",
      "update": "#3AA99F",
      "updateForeground": "#ffffff",
      "updateSurface": "#202c2a",
      "accentSurface": "#2f241c",
      "accentSurfaceForeground": "#ffffff",
      "messageSurface": "#2f2620",
      "messageForeground": "#faf9ef",
      "messageAction": "#DA702C",
      "messageActionForeground": "#160d0a",
      "messageActionHover": "#E88846",
      "codeBackground": "#1C1B1A",
      "codeForeground": "#CECDC3",
      "searchMatchBackground": "#493d19",
      "searchMatchForeground": "#CECDC3",
      "searchMatchActiveBackground": "#6d5818",
      "searchMatchActiveForeground": "#FAF9EF",
      "sidebar": "#100F0F",
      "sidebarForeground": "#CECDC3",
      "sidebarMutedForeground": "#878580",
      "sidebarControlSurface": "#1f1e1d",
      "sidebarRowHover": "#1b1a1a",
      "sidebarRowActive": "#232221",
      "sidebarRowSelected": "#2e1e13",
      "sidebarBorder": "#343331",
      "terminalBackground": "#100F0F",
      "terminalForeground": "#CECDC3",
      "terminalCursor": "#DA702C",
      "terminalSelection": "#4d2c18",
      "terminalScrollbar": "#272625",
      "terminalScrollbarHover": "#363533"
    },
    "layer1": "#282726",
    "layer2": "#2d2c2b",
    "layer3": "#31302e",
    "skyBg": "#0b0a0a",
    "panelBg": "#222120",
    "menuBg": "#141312",
    "gridAlpha": 0.5,
    "secondaryGlow": "#3AA99F",
    "sendBase": "#2c2b29",
    "sendText": "#f7e9db",
    "sendHoverText": "#ffffff",
    "addedColor": "#879A39",
    "doneColor": "#CE5D97",
    "successColor": "#3AA99F",
    "emblemFilter": "drop-shadow(0 0 6px rgba(218, 112, 44, 0.65)) drop-shadow(0 0 26px rgba(58, 169, 159, 0.33))",
    "preview": [
      "#1C1B1A",
      "#2d2c2b",
      "#DA702C",
      "#3AA99F"
    ],
    "shiki": {
      "constant": "#3AA99F",
      "string": "#879A39",
      "comment": "#8E8C86",
      "keyword": "#CE5D97",
      "parameter": "#D0A215",
      "function": "#E88846",
      "stringExpression": "#879A39",
      "punctuation": "#A09E96",
      "link": "#6CBFDF"
    },
    "art": "data:image/png;base64,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",
    "emblem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PHBvbHlnb24gcG9pbnRzPSI3NCwxNTggMTQ2LDE1OCAxNDAsMTg2IDgwLDE4NiIgZmlsbD0iIzIwNTQ0ZiIgc3Ryb2tlPSIjNzhkY2QyIiBzdHJva2Utb3BhY2l0eT0iLjU1IiBzdHJva2Utd2lkdGg9IjEuOCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iNzQsMTU4IDExMCwxNTggMTEwLDE4NiA4MCwxODYiIGZpbGw9IiMzYWE5OWYiLz48cG9seWdvbiBwb2ludHM9Ijc0LDE1OCA5NiwxNTggODgsMTg2IDgwLDE4NiIgZmlsbD0iIzc4ZGNkMiIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDI0IDE2MiwxMDIgMTQyLDE1OCA3OCwxNTggNTgsMTAyIiBmaWxsPSIjNGYyNjBlIi8+PHBvbHlnb24gcG9pbnRzPSIxMTAsMjQgMTEwLDEwNCA1OCwxMDIiIGZpbGw9IiNmNWU2ZDMiLz48cG9seWdvbiBwb2ludHM9IjU4LDEwMiAxMTAsMTA0IDExMCwxNTggNzgsMTU4IiBmaWxsPSIjZjA5NzU5Ii8+PHBvbHlnb24gcG9pbnRzPSIxMTAsMjQgMTYyLDEwMiAxMTAsMTA0IiBmaWxsPSIjZGE3MDJjIi8+PHBvbHlnb24gcG9pbnRzPSIxMTAsMTA0IDE2MiwxMDIgMTQyLDE1OCAxMTAsMTU4IiBmaWxsPSIjOGY0NTE4Ii8+PHBvbHlnb24gcG9pbnRzPSIxMTAsMjQgMTYyLDEwMiAxNDIsMTU4IDc4LDE1OCA1OCwxMDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Y1ZTZkMyIgc3Ryb2tlLW9wYWNpdHk9Ii42NSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTU4IDEwMiBMMTEwIDEwNCBMMTYyIDEwMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZjVlNmQzIiBzdHJva2Utb3BhY2l0eT0iLjQyIiBzdHJva2Utd2lkdGg9IjEuNCIvPjxsaW5lIHgxPSIxMTAiIHkxPSIyNiIgeDI9IjExMCIgeTI9IjEwNCIgc3Ryb2tlPSIjMWMxYjFhIiBzdHJva2Utd2lkdGg9IjMiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDk0IDEyMSwxMDYgMTEwLDExOCA5OSwxMDYiIGZpbGw9IiMzYWE5OWYiIHN0cm9rZT0iI2Y1ZTZkMyIgc3Ryb2tlLXdpZHRoPSIxLjYiLz48cG9seWdvbiBwb2ludHM9IjExMCw5NCAxMTAsMTA2IDk5LDEwNiIgZmlsbD0iIzllZjJlYSIvPjwvc3ZnPg=="
  },
  {
    "id": "eggsoup-openchamber-dark-nyx",
    "name": "OpenChamber Dark Nyx",
    "colors": {
      "canvas": "#120f0e",
      "chrome": "#120f0e",
      "toolbar": "#120f0e",
      "toolbarForeground": "#dbd7cc",
      "toolbarBorder": "#1f1e1e",
      "toolbarControl": "#1b1918",
      "toolbarControlForeground": "#dbd7cc",
      "toolbarControlHover": "#282726",
      "surface": "#171616",
      "surfaceRaised": "#1b1918",
      "surfaceOverlay": "#1b1918",
      "text": "#dbd7cc",
      "textMuted": "#89867c",
      "border": "#1f1e1e",
      "input": "#1b1918",
      "focus": "#da7c47",
      "accent": "#da7c47",
      "accentForeground": "#000000",
      "secondary": "#1b1918",
      "secondaryForeground": "#dbd7cc",
      "muted": "#0e0c0b",
      "mutedForeground": "#89867c",
      "placeholder": "#89867c",
      "secondaryLabel": "#89867c",
      "iconMuted": "#89867c",
      "error": "#da5b4a",
      "errorForeground": "#ffccb6",
      "errorSurface": "#520000",
      "warning": "#c67f13",
      "warningForeground": "#ffe78c",
      "warningSurface": "#4d0804",
      "update": "#479fe6",
      "updateForeground": "#a9ffff",
      "updateSurface": "#02205e",
      "accentSurface": "#1b1918",
      "accentSurfaceForeground": "#dbd7cc",
      "messageSurface": "#2d1c12",
      "messageForeground": "#dbd7cc",
      "messageAction": "#da7c47",
      "messageActionForeground": "#000000",
      "messageActionHover": "#eb8c57",
      "codeBackground": "#100e0d",
      "codeForeground": "#c69457",
      "searchMatchBackground": "#312e2d",
      "searchMatchForeground": "#dbd7cc",
      "searchMatchActiveBackground": "#76462b",
      "searchMatchActiveForeground": "#dbd7cc",
      "sidebar": "#0e0c0b",
      "sidebarForeground": "#dbd7cc",
      "sidebarMutedForeground": "#89867c",
      "sidebarControlSurface": "#1b1918",
      "sidebarRowHover": "#282726",
      "sidebarRowActive": "#323030",
      "sidebarRowSelected": "#312e2d",
      "sidebarBorder": "#302e2b",
      "terminalBackground": "#120f0e",
      "terminalForeground": "#dbd7cc",
      "terminalCursor": "#da7c47",
      "terminalSelection": "#312e2d",
      "terminalScrollbar": "#1b1918",
      "terminalScrollbarHover": "#282726"
    },
    "layer1": "#171616",
    "layer2": "#1b1918",
    "layer3": "#282726",
    "skyBg": "#080707",
    "panelBg": "#141211",
    "menuBg": "#0e0c0b",
    "gridAlpha": 0.5,
    "secondaryGlow": "#479fe6",
    "sendBase": "#191716",
    "sendText": "#f7e4d4",
    "sendHoverText": "#ffffff",
    "addedColor": "#74b08e",
    "doneColor": "#7ab3ef",
    "successColor": "#74b08e",
    "emblemFilter": "drop-shadow(0 0 6px rgba(218, 124, 71, 0.60)) drop-shadow(0 0 26px rgba(71, 159, 230, 0.33))",
    "preview": [
      "#120f0e",
      "#1b1918",
      "#da7c47",
      "#479fe6"
    ],
    "shiki": {
      "constant": "#479fe6",
      "string": "#74b08e",
      "comment": "#89867c",
      "keyword": "#da5b4a",
      "parameter": "#e0a53c",
      "function": "#eb8c57",
      "stringExpression": "#74b08e",
      "punctuation": "#9c978b",
      "link": "#7ab3ef"
    },
    "art": "data:image/png;base64,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",
    "emblem": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMjAiIGhlaWdodD0iMjIwIiB2aWV3Qm94PSIwIDAgMjIwIDIyMCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMsLTMpIj48cG9seWdvbiBwb2ludHM9IjExMCwyNiAxNjQsNjIgNTYsMTcwIDQwLDExMCA1Niw2MiIgZmlsbD0iIzgyM2YxYyIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDI2IDEzOCw2OCA5Miw5OCA1Niw2MiIgZmlsbD0iI2ZmZTFjOSIvPjxwb2x5Z29uIHBvaW50cz0iNTYsNjIgOTIsOTggNzYsMTQ0IDQwLDExMCIgZmlsbD0iI2YwYTQ3NSIvPjxwb2x5Z29uIHBvaW50cz0iMTEwLDI2IDE2NCw2MiAxMzgsNjgiIGZpbGw9IiNkYTdjNDciLz48cG9seWdvbiBwb2ludHM9IjkyLDk4IDEzOCw2OCAxMTMsMTEzIDc2LDE0NCIgZmlsbD0iI2RhN2M0NyIvPjxwb2x5Z29uIHBvaW50cz0iNDAsMTEwIDc2LDE0NCA1NiwxNzAiIGZpbGw9IiNhNjUyMjYiLz48cG9seWdvbiBwb2ludHM9IjExMCwyNiAxNjQsNjIgNTYsMTcwIDQwLDExMCA1Niw2MiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZlMWM5IiBzdHJva2Utb3BhY2l0eT0iLjY1IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNTYgNjIgTDkyIDk4IEwxMzggNjggTTkyIDk4IEw3NiAxNDQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZTFjOSIgc3Ryb2tlLW9wYWNpdHk9Ii40MiIgc3Ryb2tlLXdpZHRoPSIxLjQiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCw0KSI+PHBvbHlnb24gcG9pbnRzPSIxNjQsNjIgMTgwLDExMCAxNjQsMTU4IDExMCwxOTQgNTYsMTcwIiBmaWxsPSIjMTMzMDRkIi8+PHBvbHlnb24gcG9pbnRzPSIxNjQsNjIgMTgwLDExMCAxNDQsMTIyIDEyNiwxMDAiIGZpbGw9IiNkNGVkZmYiLz48cG9seWdvbiBwb2ludHM9IjE4MCwxMTAgMTY0LDE1OCAxMjgsMTUwIDE0NCwxMjIiIGZpbGw9IiM0NzlmZTYiLz48cG9seWdvbiBwb2ludHM9IjEyNiwxMDAgMTQ0LDEyMiAxMjgsMTUwIDk2LDEzMCIgZmlsbD0iIzJjNzViNSIvPjxwb2x5Z29uIHBvaW50cz0iMTY0LDE1OCAxMTAsMTk0IDEyOCwxNTAiIGZpbGw9IiMxYjRkN2EiLz48cG9seWdvbiBwb2ludHM9IjU2LDE3MCA5NiwxMzAgMTI4LDE1MCAxMTAsMTk0IiBmaWxsPSIjMjM1ZTk0Ii8+PHBvbHlnb24gcG9pbnRzPSIxNjQsNjIgMTgwLDExMCAxNjQsMTU4IDExMCwxOTQgNTYsMTcwIiBmaWxsPSJub25lIiBzdHJva2U9IiNkNGVkZmYiIHN0cm9rZS1vcGFjaXR5PSIuNjUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xMjYgMTAwIEwxNDQgMTIyIEwxODAgMTEwIE0xNDQgMTIyIEwxMjggMTUwIEwxMTAgMTk0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkNGVkZmYiIHN0cm9rZS1vcGFjaXR5PSIuNDIiIHN0cm9rZS13aWR0aD0iMS40Ii8+PC9nPjwvc3ZnPg=="
  }

];
    const THEMES = NYX_SPECS.map(buildNyxTheme);
    const NS = 'eggsoup.themes';
    const STORAGE_KEY = 'eggsoup-dsh-themes:selected';
    const DEFAULT_THEME = 'eggsoup-vitesse-nyx';
    const OVERRIDE_SOURCE = 'eggsoup-dsh-themes';
    const REPO_URL = 'https://github.com/YL404/eggsoup-dsh-themes';
    const REPO_LABEL = 'YL404/eggsoup-dsh-themes';
    const AUTHOR_LABEL = 'eggsoup';

    // Theme previews borrow the real pixel-art backdrop and the palette
    // that gives each theme its identity. Nyx themes are dark-only and use
    // their dark palette + pixel-art sky.
    const previewArt = theme => {
      const match = /--nyx-art: url\("(data:image\/png;base64,[^"]+)"\)/.exec(theme.css);
      return match === null ? null : match[1];
    };
    const previewPalette = (theme, scheme = 'dark') => {
      const mode = theme.darkOnly ? 'dark' : (scheme === 'light' ? 'light' : 'dark');
      const token = name => theme.tokens[name]?.[mode];
      const bg = token('--dsw-alias-bg-base') ?? theme.preview?.[0];
      return {
        bg,
        sidebar: token('--dsw-specific-sidebar-fill') ?? token('--dsw-alias-bg-layer-1') ?? theme.preview?.[1],
        surface: token('--dsw-alias-bg-layer-2') ?? theme.preview?.[1],
        input: token('--dsw-specific-input-major') ?? token('--dsw-alias-bg-layer-2') ?? theme.preview?.[1],
        bubble: token('--dsw-specific-bubble') ?? token('--dsw-alias-bg-layer-2') ?? theme.preview?.[1],
        accent: token('--dsw-alias-brand-primary') ?? theme.preview?.[2],
        onAccent: token('--dsw-alias-label-primary-foreground') ?? token('--dsw-alias-label-on-color') ?? bg,
        secondary: theme.darkOnly
          ? theme.preview?.[3] ?? token('--dsw-alias-border-l3')
          : token('--dsw-alias-brand-primary') ?? theme.preview?.[2],
        text: token('--dsw-alias-label-primary') ?? theme.preview?.[3],
        muted: token('--dsw-alias-label-secondary') ?? theme.preview?.[2],
        border: token('--dsw-alias-border-l2') ?? theme.preview?.[1],
      };
    };
    const previewBackdrop = (theme, scheme = 'dark') => {
      const art = previewArt(theme);
      if (art !== null) return `url("${art}")`;
      const palette = previewPalette(theme, scheme);
      return `radial-gradient(120% 90% at 78% 18%, color-mix(in srgb, ${palette.accent} 30%, transparent), transparent 62%), linear-gradient(155deg, ${palette.bg}, ${palette.surface})`;
    };
    const previewStyle = (theme, scheme = 'dark') => {
      if (theme.id === null) return undefined;
      const palette = previewPalette(theme, scheme);
      return {
        '--eggsoup-pv-bg': palette.bg,
        '--eggsoup-pv-sidebar': palette.sidebar,
        '--eggsoup-pv-surface': palette.surface,
        '--eggsoup-pv-input': palette.input,
        '--eggsoup-pv-bubble': palette.bubble,
        '--eggsoup-pv-accent': palette.accent,
        '--eggsoup-pv-on-accent': palette.onAccent,
        '--eggsoup-pv-secondary': palette.secondary,
        '--eggsoup-pv-text': palette.text,
        '--eggsoup-pv-muted': palette.muted,
        '--eggsoup-pv-border': palette.border,
        '--eggsoup-pv-art': previewBackdrop(theme, scheme),
      };
    };
    const previewSwatches = (theme, scheme = 'dark') => {
      if (theme.id === null) return null;
      if (!theme.darkOnly && scheme === 'light') {
        const p = previewPalette(theme, 'light');
        return [p.bg, p.sidebar, p.accent, p.text];
      }
      return theme.preview;
    };
    const UI_CSS = `
/* Themes settings page: header with GitHub attribution, active theme summary,
   and the Nyx dark series (3-col) grid. */
.eggsoup-themes-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 720px;
  padding-bottom: 8px;
  color: var(--dsw-alias-label-primary);
}
.eggsoup-themes-header {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.eggsoup-themes-title-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 12px;
}
.eggsoup-themes-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  line-height: 26px;
}
.eggsoup-themes-repo {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  max-width: 100%;
  padding: 3px 9px;
  border: 0.5px solid var(--dsw-alias-border-l2);
  border-radius: 999px;
  background: var(--dsw-alias-bg-layer-1);
  color: var(--dsw-alias-label-secondary);
  font-size: 11.5px;
  line-height: 17px;
  text-decoration: none;
  transition: border-color .15s, background .15s, color .15s;
}
@media (hover: hover) {
  .eggsoup-themes-repo:hover {
    border-color: var(--dsw-alias-border-l4);
    background: var(--dsw-alias-interactive-bg-hover);
    color: var(--dsw-alias-label-primary);
  }
}
.eggsoup-themes-repo:focus-visible {
  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));
  outline-offset: 2px;
}
.eggsoup-themes-repo-author {
  font-weight: 500;
  color: var(--dsw-alias-label-primary);
}
.eggsoup-themes-repo-sep {
  opacity: 0.45;
}
.eggsoup-themes-repo-slug {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.eggsoup-themes-description {
  margin: 0;
  font-size: 13px;
  line-height: 20px;
  color: var(--dsw-alias-label-tertiary);
}
.eggsoup-themes-status-stack {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.eggsoup-themes-status {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 12px;
  padding: 10px 12px;
  border: 0.5px solid var(--dsw-alias-border-l2);
  border-radius: var(--dsw-radius-lg);
  background: var(--dsw-alias-bg-layer-1);
}
.eggsoup-themes-status-main {
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
}
.eggsoup-themes-status-text {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 8px;
  min-width: 0;
}
.eggsoup-themes-status-label {
  font-size: 12px;
  color: var(--dsw-alias-label-tertiary);
}
.eggsoup-themes-status-name {
  font-size: 13.5px;
  font-weight: 500;
  color: var(--dsw-alias-label-primary);
}
.eggsoup-themes-reset {
  flex: none;
  padding: 4px 10px;
  border: 0.5px solid var(--dsw-alias-border-l3);
  border-radius: var(--dsw-radius-sm);
  background: transparent;
  color: var(--dsw-alias-label-secondary);
  font: inherit;
  font-size: 12px;
  line-height: 18px;
  cursor: pointer;
  transition: border-color .15s, background .15s, color .15s;
}
@media (hover: hover) {
  .eggsoup-themes-reset:hover:not(:disabled) {
    background: var(--dsw-alias-interactive-bg-hover);
    color: var(--dsw-alias-label-primary);
  }
}
.eggsoup-themes-reset:disabled {
  opacity: 0.45;
  cursor: default;
}
.eggsoup-themes-reset:focus-visible {
  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));
  outline-offset: 2px;
}
.eggsoup-themes-notice {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px 12px;
  padding: 9px 12px;
  border: 0.5px solid var(--dsw-alias-border-l2);
  border-radius: var(--dsw-radius-md);
  background: var(--dsw-alias-state-warn-tertiary);
  color: var(--dsw-alias-state-warn-label);
  font-size: 12.5px;
  line-height: 18px;
}
.eggsoup-themes-notice-action {
  flex: none;
  padding: 3px 10px;
  border: 0.5px solid color-mix(in srgb, var(--dsw-alias-state-warn-label) 35%, transparent);
  border-radius: var(--dsw-radius-sm);
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  cursor: pointer;
  transition: background .15s;
}
@media (hover: hover) {
  .eggsoup-themes-notice-action:hover {
    background: color-mix(in srgb, var(--dsw-alias-state-warn-label) 12%, transparent);
  }
}
.eggsoup-themes-notice-action:focus-visible {
  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));
  outline-offset: 2px;
}
.eggsoup-themes-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.eggsoup-themes-group-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.eggsoup-themes-group-title {
  margin: 0;
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  color: var(--dsw-alias-label-secondary);
}
.eggsoup-themes-group-meta {
  font-size: 11.5px;
  line-height: 18px;
  color: var(--dsw-alias-label-tertiary);
}
.eggsoup-themes-grid-nyx {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}
@media (max-width: 600px) {
  .eggsoup-themes-grid-nyx {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 360px) {
  .eggsoup-themes-grid-nyx {
    grid-template-columns: minmax(0, 1fr);
  }
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
  --eggsoup-pv-on-accent: var(--dsw-alias-label-primary-foreground);
  --eggsoup-pv-secondary: var(--dsw-alias-border-l3);
  --eggsoup-pv-text: var(--dsw-alias-label-primary);
  --eggsoup-pv-muted: var(--dsw-alias-label-secondary);
  --eggsoup-pv-border: var(--dsw-alias-border-l2);
  --eggsoup-pv-art: linear-gradient(155deg, var(--dsw-alias-bg-base), var(--dsw-alias-bg-layer-2));
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 7px;
  min-width: 0;
  padding: 6px;
  border: 0.5px solid var(--dsw-alias-settings-card-stroke);
  border-radius: var(--dsw-radius-lg);
  background: var(--dsw-alias-settings-card-fill);
  color: var(--dsw-alias-label-primary);
  font: inherit;
  font-size: 13px;
  line-height: 20px;
  text-align: left;
  cursor: pointer;
  transition: border-color .16s, background .16s, box-shadow .16s;
}
@media (hover: hover) {
  .eggsoup-theme:hover:not([aria-pressed='true']) {
    background: var(--dsw-alias-interactive-bg-hover);
  }
}
.eggsoup-theme[aria-pressed='true'] {
  border-color: var(--dsw-alias-border-selected);
  background: var(--dsw-alias-bg-module-platform);
  box-shadow: 0 0 0 1px var(--dsw-alias-border-selected);
}
.eggsoup-theme:focus-visible {
  outline: var(--dsw-focus-ring-width) solid var(--dsw-focus-ring-color, var(--dsw-alias-state-business-primary));
  outline-offset: -2px;
}
.eggsoup-theme-preview {
  position: relative;
  display: flex;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: var(--dsw-radius-md);
  background-color: var(--eggsoup-pv-bg);
  background-image: var(--eggsoup-pv-art);
  background-position: right bottom;
  background-size: cover;
  box-shadow: inset 0 0 0 0.5px rgba(0, 0, 0, 0.16);
}
.eggsoup-preview-sidebar {
  box-sizing: border-box;
  flex: none;
  width: 28%;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 6px 5px;
  background: var(--eggsoup-pv-sidebar);
  border-right: 0.5px solid var(--eggsoup-pv-border);
}
.eggsoup-preview-brand {
  width: 54%;
  height: 4px;
  margin-bottom: 2px;
  border-radius: 2px;
  background: var(--eggsoup-pv-text);
  opacity: 0.8;
}
.eggsoup-preview-row {
  width: 100%;
  height: 4px;
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
  gap: 3.5px;
  padding: 6px;
  background: color-mix(in srgb, var(--eggsoup-pv-surface) 68%, transparent);
}
.eggsoup-preview-bubble {
  align-self: flex-end;
  width: 48%;
  height: 10px;
  border: 0.5px solid color-mix(in srgb, var(--eggsoup-pv-secondary) 55%, transparent);
  border-radius: 4px;
  background: linear-gradient(90deg,
    color-mix(in srgb, var(--eggsoup-pv-accent) 28%, var(--eggsoup-pv-bubble)),
    var(--eggsoup-pv-bubble));
}
.eggsoup-preview-line {
  width: 90%;
  height: 3.5px;
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
  gap: 4px;
  height: 14px;
  margin-top: auto;
  padding: 0 4px;
  border: 0.5px solid var(--eggsoup-pv-border);
  border-radius: 4px;
  background: var(--eggsoup-pv-input);
}
.eggsoup-preview-composer-line {
  flex: 1;
  height: 3.5px;
  border-radius: 2px;
  background: var(--eggsoup-pv-muted);
  opacity: 0.4;
}
.eggsoup-preview-send {
  flex: none;
  width: 7px;
  height: 7px;
  border-radius: 2px;
  background: var(--eggsoup-pv-secondary);
}
.eggsoup-theme-meta {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 6px;
  width: 100%;
  padding: 0 3px 2px;
}
.eggsoup-themes-grid-nyx .eggsoup-theme-meta {
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
.eggsoup-theme-name {
  flex: 1;
  min-width: 0;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 500;
  line-height: 18px;
}
.eggsoup-themes-grid-nyx .eggsoup-theme-name {
  flex: none;
  width: 100%;
  font-size: 12.5px;
}
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
.eggsoup-theme-swatches {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 2.5px;
}
.eggsoup-theme-swatch {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  box-shadow: inset 0 0 0 0.5px rgba(128, 128, 128, 0.35);
}
.eggsoup-theme-swatch-default {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--dsw-alias-bg-base) 50%, var(--dsw-alias-label-primary) 50%);
  box-shadow: inset 0 0 0 0.5px var(--dsw-alias-border-l3);
}
.eggsoup-theme-check {
  position: absolute;
  top: 10px;
  right: 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--eggsoup-pv-accent);
  color: var(--eggsoup-pv-on-accent);
  font-size: 10.5px;
  font-weight: 700;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.32);
}
`;

    const byId = id => THEMES.find(theme => theme.id === id);
    let themeService = null;
    let overrideDisposer = null;
    let selectedId = null;
    let currentScheme = 'dark';
    let themeCssTag = null;
    const listeners = new Set();
    const notify = () => { for (const listener of listeners) listener(); };
    const setSelected = id => {
      if (selectedId === id) return;
      selectedId = id;
      notify();
    };
    const setColorScheme = scheme => {
      if (scheme !== 'light' && scheme !== 'dark') return;
      if (currentScheme === scheme) return;
      currentScheme = scheme;
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
      colorScheme: () => currentScheme,
      subscribe: listener => {
        listeners.add(listener);
        return () => listeners.delete(listener);
      },
      select: id => {
        if (!applySelection(id)) return;
        writeStored(id === null ? 'builtin' : id);
      },
      setAppearance: mode => {
        if (themeService === null) return;
        try { themeService.setTheme(mode); } catch {}
      },
    };

    function GitHubIcon({ size = 13 }) {
      return h('svg', {
        width: size,
        height: size,
        viewBox: '0 0 16 16',
        fill: 'currentColor',
        'aria-hidden': 'true',
        focusable: 'false',
      },
        h('path', {
          d: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z',
        }),
      );
    }

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

    function SwatchDots({ colors }) {
      if (!Array.isArray(colors) || colors.length === 0) {
        return h('span', { className: 'eggsoup-theme-swatch-default', 'aria-hidden': 'true' });
      }
      return h('span', { className: 'eggsoup-theme-swatches', 'aria-hidden': 'true' },
        colors.map((color, index) => h('span', {
          key: index,
          className: 'eggsoup-theme-swatch',
          style: { backgroundColor: color },
        })),
      );
    }

    function ThemeSection({ t }) {
      const [selected, setSelected] = React.useState(manager.selected());
      const [scheme, setScheme] = React.useState(manager.colorScheme());
      React.useEffect(() => manager.subscribe(() => {
        setSelected(manager.selected());
        setScheme(manager.colorScheme());
      }), []);
      const text = (key, fallback) => {
        const value = typeof t === 'function' ? t(key) : undefined;
        return value === undefined || value === key ? fallback : value;
      };
      const defaultOption = { id: null, name: text('theme.default', 'DSH default'), darkOnly: false, preview: null };
      const nyxThemes = THEMES;
      const activeTheme = selected === null ? defaultOption : (byId(selected) ?? defaultOption);
      const activeName = text('theme.' + (activeTheme.id ?? 'default'), activeTheme.name);
      const activeBadge = activeTheme.id === null
        ? text('badge.default', 'Follows appearance')
        : text('badge.darkOnly', 'Dark only');
      const showLightWarning = scheme === 'light' && activeTheme.darkOnly === true;

      const renderCard = theme => {
        const displayName = text('theme.' + theme.id, theme.name);
        const isSelected = selected === theme.id;
        return h('button', {
          key: theme.id,
          type: 'button',
          className: 'eggsoup-theme',
          style: previewStyle(theme, scheme),
          title: displayName,
          'aria-pressed': isSelected,
          onClick: () => manager.select(theme.id),
        },
          h(ThemePreview, { key: 'preview' }),
          h('span', { className: 'eggsoup-theme-meta' },
            h('span', { className: 'eggsoup-theme-name' }, displayName),
            h(SwatchDots, { colors: previewSwatches(theme, scheme) }),
          ),
          isSelected ? h('span', { className: 'eggsoup-theme-check', 'aria-hidden': 'true' }, '✓') : null,
        );
      };

      return h('section', { className: 'eggsoup-themes-section' },
        h('header', { className: 'eggsoup-themes-header' },
          h('div', { className: 'eggsoup-themes-title-row' },
            h('h2', { className: 'eggsoup-themes-title' }, text('title', 'Themes')),
            h('a', {
              className: 'eggsoup-themes-repo',
              href: REPO_URL,
              target: '_blank',
              rel: 'noopener noreferrer',
              title: REPO_URL,
              'aria-label': text('repo.aria', `${AUTHOR_LABEL} — GitHub repository ${REPO_LABEL} (opens in new tab)`),
            },
              h(GitHubIcon, { size: 13 }),
              h('span', { className: 'eggsoup-themes-repo-author' }, AUTHOR_LABEL),
              h('span', { className: 'eggsoup-themes-repo-sep', 'aria-hidden': 'true' }, '·'),
              h('span', { className: 'eggsoup-themes-repo-slug' }, REPO_LABEL),
              h('span', { 'aria-hidden': 'true' }, '↗'),
            ),
          ),
          h('p', { className: 'eggsoup-themes-description' }, text('description', 'Choose a theme for the interface.')),
        ),
        h('div', { className: 'eggsoup-themes-status-stack' },
          h('div', { className: 'eggsoup-themes-status' },
            h('div', { className: 'eggsoup-themes-status-main' },
              h(SwatchDots, { colors: previewSwatches(activeTheme, scheme) }),
              h('div', { className: 'eggsoup-themes-status-text' },
                h('span', { className: 'eggsoup-themes-status-label' }, text('status.active', 'Active')),
                h('span', { className: 'eggsoup-themes-status-name' }, activeName),
                h('span', { className: 'eggsoup-theme-badge' }, activeBadge),
              ),
            ),
            h('button', {
              type: 'button',
              className: 'eggsoup-themes-reset',
              disabled: selected === null,
              onClick: () => manager.select(null),
            }, text('action.reset', 'Reset to default')),
          ),
          showLightWarning
            ? h('div', { className: 'eggsoup-themes-notice', role: 'status' },
                h('span', null, text('notice.lightMode', 'Light appearance is active; Nyx themes only apply in dark appearance.')),
                h('button', {
                  type: 'button',
                  className: 'eggsoup-themes-notice-action',
                  onClick: () => manager.setAppearance('dark'),
                }, text('action.switchDark', 'Switch to dark')),
              )
            : null,
        ),
        h('div', { className: 'eggsoup-themes-group' },
          h('div', { className: 'eggsoup-themes-group-head' },
            h('h3', { className: 'eggsoup-themes-group-title' }, text('group.nyx', 'Nyx dark series')),
            h('span', { className: 'eggsoup-themes-group-meta' },
              `${text('badge.darkOnly', 'Dark only')} · ${nyxThemes.length}`,
            ),
          ),
          h('div', {
            className: 'eggsoup-themes-grid-nyx',
            role: 'group',
            'aria-label': text('group.nyx', 'Nyx dark series'),
          }, nyxThemes.map(renderCard)),
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
      // Static theme set, exposed so offline tooling can validate the data.
      themes: THEMES,
      apply(ctx) {
        const theme = ctx.get('theme');
        if (theme === undefined) return;
        themeService = theme;
        setColorScheme(theme.getTheme().active.colorScheme);
        const t = ctx.locale.bind(NS);

        ctx.effect(() => ctx.locale.register(NS, {
          en: {
            title: 'Themes',
            description: 'Choose a theme from the Nyx dark series (dark appearance only). Resetting to default removes the theme layer.',
            'repo.aria': 'eggsoup — GitHub repository YL404/eggsoup-dsh-themes (opens in new tab)',
            'status.active': 'Current',
            'action.reset': 'Reset to default',
            'action.switchDark': 'Switch to dark',
            'notice.lightMode': 'Light appearance is active; Nyx themes only take effect in dark appearance.',
            'group.nyx': 'Nyx dark series',
            'theme.default': 'DSH default',
            'theme.eggsoup-vitesse-nyx': 'Vitesse Nyx',
            'theme.eggsoup-vitesse-nyx-emerald': 'Vitesse Nyx Emerald',
            'theme.eggsoup-catppuccin-mocha-nyx': 'Catppuccin Mocha Nyx',
            'theme.eggsoup-lilac-soft-nyx': 'Lilac Soft Nyx',
            'theme.eggsoup-visual-studio-dark-nyx': 'Visual Studio Dark Nyx',
            'theme.eggsoup-neutral-slate-nyx': 'Neutral Slate Nyx',
            'theme.eggsoup-inkstone-xuanmo-nyx': 'Inkstone Xuanmo Nyx',
            'theme.eggsoup-inkstone-canghai-nyx': 'Inkstone Canghai Nyx',
            'theme.eggsoup-misty-teal-nyx': 'Misty Teal Nyx',
            'theme.eggsoup-aurora-nyx': 'Aurora Nyx',
            'theme.eggsoup-verdant-soft-nyx': 'Verdant Soft Nyx',
            'theme.eggsoup-fields-of-the-shire-nyx': 'Fields of the Shire Nyx',
            'theme.eggsoup-gruvbox-nyx': 'Gruvbox Nyx',
            'theme.eggsoup-flexoki-dark-nyx': 'Flexoki Dark Nyx',
            'theme.eggsoup-openchamber-dark-nyx': 'OpenChamber Dark Nyx',
            'badge.default': 'Follows appearance',
            'badge.darkOnly': 'Dark only',
          },
          zh: {
            title: '主题',
            description: '选择 Nyx 暗夜系列深色主题（仅在深色外观下生效）；点击“恢复默认”会移除主题层。',
            'repo.aria': 'eggsoup — GitHub 仓库 YL404/eggsoup-dsh-themes（在新标签页打开）',
            'status.active': '当前',
            'action.reset': '恢复默认',
            'action.switchDark': '切换为深色',
            'notice.lightMode': '当前为浅色外观，Nyx 系列主题仅在深色外观下生效。',
            'group.nyx': 'Nyx 暗夜系列',
            'theme.default': 'DSH 默认',
            'theme.eggsoup-vitesse-nyx': '流光夜',
            'theme.eggsoup-vitesse-nyx-emerald': '翡翠夜',
            'theme.eggsoup-catppuccin-mocha-nyx': '摩卡夜',
            'theme.eggsoup-lilac-soft-nyx': '丁香夜',
            'theme.eggsoup-visual-studio-dark-nyx': '视界夜',
            'theme.eggsoup-neutral-slate-nyx': '岩灰夜',
            'theme.eggsoup-inkstone-xuanmo-nyx': '玄墨夜',
            'theme.eggsoup-inkstone-canghai-nyx': '苍海夜',
            'theme.eggsoup-misty-teal-nyx': '雾青夜',
            'theme.eggsoup-aurora-nyx': '极光夜',
            'theme.eggsoup-verdant-soft-nyx': '青翠夜',
            'theme.eggsoup-fields-of-the-shire-nyx': '牧野夜',
            'theme.eggsoup-gruvbox-nyx': '复古夜',
            'theme.eggsoup-flexoki-dark-nyx': '朱墨夜',
            'theme.eggsoup-openchamber-dark-nyx': '暖阁夜',
            'badge.default': '跟随外观',
            'badge.darkOnly': '仅深色',
          },
        }), 'eggsoup-themes: dictionaries');

        ctx.on('theme/change', snapshot => {
          setColorScheme(snapshot.active.colorScheme);
        });

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
