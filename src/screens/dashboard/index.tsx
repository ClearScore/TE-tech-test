import useStyleSheet from "./styles";

import * as changeCase from "change-case";
import Donut from "@app/components/donut";
import { useLoaderData } from "@remix-run/react";
import type { Props } from "./types";

export default function Dashboard(): JSX.Element {
  const { user } = useLoaderData<Props>();
  const styles = useStyleSheet();

  return (
    <section>
      <h1>Welcome, {changeCase.capitalCase(user.firstName)}</h1>
      <div className={styles.donut}>
        <Donut score={user.score} maximum={1_000} />
      </div>
    </section>
  );
}
