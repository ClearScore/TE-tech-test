import { createStyleSheet } from "@app/utils/theme";
import { css } from "@emotion/css";

export default createStyleSheet(({ theme, params }) => ({
  container: css`
    display: block;
    border-radius: 50%;
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background: conic-gradient(
      from 0deg at center,
      ${theme.colours.blue.medium} 0deg,
      ${theme.colours.blue.medium} ${Math.round(params.degrees as number)}deg,
      ${theme.colours.grey.medium} ${Math.round(params.degrees as number)}deg
    );
  `,
  value: css`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: ${theme.colours.white};
    display: grid;
    grid-gap: ${theme.sizings.tiny};
    align-content: center;
    justify-items: center;
    color: ${theme.colours.blue.dark};
  `,
  score: css`
    font-family: ${theme.fonts.bold};
    font-size: clamp(${theme.sizings.medium}, 5vw, ${theme.sizings.enormous});
  `,
  maximum: css`
    margin: 0;
  `,
}));
