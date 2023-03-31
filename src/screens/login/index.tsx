import Button from "@app/components/button";
import Input from "@app/components/input";
import useStyleSheet from "./styles";
import { cx } from "@emotion/css";
import Label from "@app/components/label";
import { useForm } from "./utils";

export default function Login(): JSX.Element {
  const Form = useForm();
  const styles = useStyleSheet();

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Log in</h1>

      <Form method="post" className={styles.form}>
        <fieldset className={styles.field.base}>
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="Enter your email"
            name="email"
            autoComplete="email"
          />
        </fieldset>

        <fieldset className={styles.field.base}>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Enter your password"
            name="password"
            autoComplete="current-password"
          />
        </fieldset>

        <fieldset className={cx(styles.field.base, styles.field.remember)}>
          <Input type="checkbox" name="remember" id="remember" />
          <label className={styles.label.remember} htmlFor="remember">
            Remember this browser? Only tick if you're on your private device.
          </label>
        </fieldset>

        <Button type="submit" className={styles.button}>
          Log in
        </Button>
      </Form>
    </section>
  );
}
