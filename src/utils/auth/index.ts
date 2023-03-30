import { createCookieSessionStorage } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import type {
  CreateUserSessionArgs,
  DestroyUserSessionArgs,
  User,
} from "./types";

export type { User };

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: ["abc123"],
    secure: true,
  },
});

const config = {
  sessionKey: "clearscore-user",
};

async function getSession(request: Request) {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}

export async function getUserFromSession(
  request: Request
): Promise<null | User> {
  const session = await getSession(request);
  return session.get(config.sessionKey);
}

export async function createUserSession({
  request,
  user,
}: CreateUserSessionArgs) {
  const session = await getSession(request);
  session.set(config.sessionKey, user);

  return redirect("/", {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: 60 * 60 * 24 * 7,
      }),
    },
  });
}

export async function destroyUserSession({ request }: DestroyUserSessionArgs) {
  const session = await getSession(request);

  return redirect("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session),
    },
  });
}
