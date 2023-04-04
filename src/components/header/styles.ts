import { createStyleSheet } from "@app/utils/theme";
import { css } from "@emotion/css";

export default createStyleSheet(({ theme }) => ({
  container: css`
    background-color: ${theme.colours.blue.dark};
    color: white;
    container-type: inline-size;
  `,
  header: css`
    margin: 0;
    min-height: ${theme.sizings.large};
    display: flex;
    align-items: center;
    padding: 0 ${theme.sizings.medium};

    @container (max-width: ${theme.breakpoints.tablet}) {
      justify-content: center;
    }
  `,
  logo: css`
    height: ${theme.sizings.small};
  `,
}));
