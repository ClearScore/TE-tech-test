import type { LoaderArgs, TypedResponse } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { User } from "@app/utils/auth";
import { getUserFromSession } from "@app/utils/auth";
import Dashboard from "@app/screens/dashboard";
import type { Props } from "@app/screens/dashboard/types";

export async function loader({
  request,
}: LoaderArgs): Promise<TypedResponse<Props>> {
  const user = (await getUserFromSession(request)) as User;
  return json({ user });
}

export default Dashboard;
