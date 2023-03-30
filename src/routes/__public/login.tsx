import { Form, useActionData } from "@remix-run/react";
import { createUserSession } from "@app/utils/auth";
import type { ActionArgs } from "@remix-run/node";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return new Response("Unspecified email and/or password", {
      status: 401,
    });
  }

  const [firstName, domain] = email.split("@");

  if (password !== "password" || domain !== "clearscore.com") {
    return new Response("Invalid email and/or password", {
      status: 401,
    });
  }

  return createUserSession({
    request,
    user: { firstName },
  });
}

export default function Login(): JSX.Element {
  const data = useActionData();

  return (
    <section>
      <h1>Welcome to ClearScore</h1>

      {data && <section>Error: {data}</section>}

      <Form method="post">
        <div>
          <label>Email</label>
          <input type="email" name="email" autoComplete="email" />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
          />
        </div>

        <button type="submit">Login</button>
      </Form>
    </section>
  );
}
