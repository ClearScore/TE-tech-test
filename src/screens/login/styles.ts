import { createStyleSheet } from "@app/utils/theme";
import { css } from "@emotion/css";

export default createStyleSheet(({ theme }) => ({
  container: css`
    display: grid;
    grid-gap: ${theme.sizings.tiny};
    align-content: start;
    background-color: ${theme.colours.grey.light};
    min-height: calc(100vh - ${theme.sizings.large});
    justify-content: center;
    padding: ${theme.sizings.large} ${theme.sizings.medium}
      ${theme.sizings.medium};
  `,
  title: css`
    font-family: ${theme.fonts.regular};
    font-size: ${theme.sizings.medium};
    margin: 0;
    font-weight: 400;
    padding-bottom: ${theme.sizings.small};
    color: ${theme.colours.blue.dark};
    font-size: ${theme.sizings.medium};
  `,
  form: css`
    display: grid;
    grid-auto-flow: row;
    grid-gap: ${theme.sizings.medium};
  `,
  field: {
    base: css`
      border: 0;
      display: grid;
      grid-gap: ${theme.sizings.small};
      padding: 0;
      margin: 0;
    `,
    remember: css`
      grid-template-columns: max-content 1fr;
      grid-gap: 0;
    `,
  },
  label: {
    remember: css`
      cursor: pointer;
      padding-left: ${theme.sizings.tiny};
      justify-self: flex-start;
    `,
  },
  button: css`
    justify-self: flex-start;
  `,
}));
