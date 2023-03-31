import { renderToString } from "react-dom/server";
import { RemixServer } from "@remix-run/react";
import type { EntryContext } from "@remix-run/node";

import { cache } from "@emotion/css";
import {
  constructStyleTagsFromChunks,
  extractCriticalToChunks,
} from "@emotion/server";
import { CacheProvider } from "@emotion/react";

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const tree = renderToString(
    <CacheProvider value={cache}>
      <RemixServer
        url={request.url}
        context={remixContext}
        abortDelay={5_000}
      />
    </CacheProvider>
  );

  const chunks = extractCriticalToChunks(tree);
  const style = constructStyleTagsFromChunks(chunks);
  const body = tree.replace("__STYLES__", style);
  responseHeaders.set("Content-Type", "text/html");

  return new Response(`<!DOCTYPE html>${body}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
