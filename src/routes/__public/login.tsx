import Login from "@app/screens/login";
import { createUserSession } from "@app/utils/auth";
import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const remember = Boolean(formData.get("remember"));

  if (!email || !password) {
    return json({
      success: false,
      error: "Please supply your email and password.",
    });
  }

  const [firstName, domain] = email.split("@");

  if (password !== "password" || domain !== "clearscore.com") {
    return json({
      success: false,
      error: "The email or password you've entered is incorrect.",
    });
  }

  return createUserSession({
    request,
    user: { firstName },
    options: {
      persist: remember,
    },
  });
}

export default Login;
