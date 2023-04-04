import { createStyleSheet } from "@app/utils/theme";
import { css } from "@emotion/css";

export default createStyleSheet(({ theme }) => ({
  container: css`
    padding: ${theme.sizings.small} ${theme.sizings.large};
    border: 0;
    border-radius: ${theme.sizings.tiny};
    background-color: ${theme.colours.blue.medium};
    color: white;
    cursor: pointer;
    transition: background-color 0.1s;
    font-family: ${theme.fonts.bold};

    &:hover {
      background-color: ${theme.colours.blue.light};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${theme.colours.grey.dark};
      background-color: ${theme.colours.grey.medium};
    }
  `,
}));
