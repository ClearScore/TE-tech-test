import type { theme } from ".";

export type Theme = typeof theme;

export type CreateStyleSheetArgs<S> = (args: { theme: Theme }) => S;
