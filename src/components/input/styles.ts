import { createStyleSheet } from "@app/utils/theme";
import { css } from "@emotion/css";

export default createStyleSheet(({ theme }) => ({
  container: css`
    border: 1px solid ${theme.colours.grey.dark};
    padding: ${theme.sizings.small};
    border-radius: ${theme.sizings.tiny};
    font-family: ${theme.fonts.regular};
    font-size: ${theme.sizings.small};

    &::placeholder {
      color: ${theme.colours.grey.dark};
    }
  `,
}));
