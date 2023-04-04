import type { MetaFunction } from "@remix-run/node";
import toasterStyles from "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Global, ThemeProvider } from "@emotion/react";
import { global, theme } from "@app/utils/theme";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "ClearScore",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    {
      rel: "stylesheet",
      href: toasterStyles,
    },
  ];
}

export default function App(): JSX.Element {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {typeof document === "undefined" ? "__STYLES__" : null}
      </head>

      <body>
        <ThemeProvider theme={theme}>
          <ToastContainer
            position="top-center"
            autoClose={false}
            toastClassName="clearscore-toaster"
          />
          <Outlet />
        </ThemeProvider>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <Global styles={global} />
      </body>
    </html>
  );
}
