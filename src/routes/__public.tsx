import Header from "@app/components/header";
import { Outlet } from "@remix-run/react";

export default function Public(): JSX.Element {
  return (
    <section>
      <Header />

      <Outlet />
    </section>
  );
}
