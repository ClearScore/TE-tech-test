import { useTheme } from "@emotion/react";
import colours from "./colours";
import sizings from "./sizings";
import breakpoints from "./breakpoints";
import fonts from "./fonts";
import { useMemo } from "react";
import type { CreateStyleSheetArgs, Theme } from "./types";
import createGlobal from "./global";

export const theme = {
  colours,
  sizings,
  fonts,
  breakpoints,
};

export const global = createGlobal(theme);

export function createStyleSheet<S>(styles: CreateStyleSheetArgs<S>) {
  return () => {
    const theme = useTheme() as Theme;
    return useMemo(() => styles({ theme }), [theme]);
  };
}
