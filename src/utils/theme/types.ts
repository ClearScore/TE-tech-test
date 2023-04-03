import type { theme } from ".";

export type Theme = typeof theme;

export type CreateStyleSheetArgs<S> = (args: {
  theme: Theme;
  params: StyleParams;
}) => S;

export type StyleParams = Record<string, string | number | boolean>;
