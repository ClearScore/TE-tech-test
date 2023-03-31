import { destroyUserSession } from "@app/utils/auth";
import type { ActionArgs } from "@remix-run/node";

export function action({ request }: ActionArgs) {
  return destroyUserSession({ request });
}
