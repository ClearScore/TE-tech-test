import { css } from "@emotion/react";
import type { Theme } from "./types";

export default function createGlobal(theme: Theme): ReturnType<typeof css> {
  return css`
    @font-face {
      font-family: CSClarityRegular;
      src: url("/fonts/cs-clarity-regular.woff2") format("woff2");
    }

    @font-face {
      font-family: CSClarityMedium;
      src: url("/fonts/cs-clarity-medium.woff2") format("woff2");
    }

    @font-face {
      font-family: CSClarityBold;
      src: url("/fonts/cs-clarity-bold.woff2") format("woff2");
    }

    body {
      padding: 0;
      margin: 0;
      font-family: ${theme.fonts.regular};
    }

    :root {
      --toastify-toast-width: 50vw;
      --toastify-text-color-light: black;
      --toastify-font-family: CSClarityRegular;

      @media (max-width: ${theme.breakpoints.tablet}) {
        --toastify-toast-width: 90vw;
      }
    }

    .clearscore-toaster {
      border-radius: ${theme.sizings.tiny};
    }
  `;
}
