import { createStyleSheet } from "@app/utils/theme";
import { css } from "@emotion/css";

export default createStyleSheet(({ theme }) => ({
  container: css`
    font-family: ${theme.fonts.bold};
    color: ${theme.colours.blue.dark};
  `,
}));
