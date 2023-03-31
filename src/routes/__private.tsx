import { Outlet, Form } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { getUserFromSession } from "@app/utils/auth";
import Header from "@app/components/header";

export async function loader({ request }: LoaderArgs) {
  const user = await getUserFromSession(request);
  if (!user) return redirect("/login");
  return null;
}

export default function Private(): JSX.Element {
  return (
    <section>
      <Header />

      <Form action="/logout" method="post">
        <button>Sign Out</button>
      </Form>

      <Outlet />
    </section>
  );
}
