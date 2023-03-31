import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs, TypedResponse } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { User } from "@app/utils/auth";
import { getUserFromSession } from "@app/utils/auth";
import * as changeCase from "change-case";

type Props = {
  user: User;
};

export async function loader({
  request,
}: LoaderArgs): Promise<TypedResponse<Props>> {
  const user = (await getUserFromSession(request)) as User;
  return json({ user });
}

export default function Index(): JSX.Element {
  const { user } = useLoaderData<Props>();

  return (
    <section>
      <h1>Welcome, {changeCase.capitalCase(user.firstName)}</h1>
      Your score is 560 out of 1,000.
    </section>
  );
}
