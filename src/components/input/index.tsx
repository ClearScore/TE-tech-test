import { cx } from "@emotion/css";
import type { Props } from "./types";
import useStyleSheet from "./styles";

export default function Input({ className, ...props }: Props): JSX.Element {
  const styles = useStyleSheet();

  return <input {...props} className={cx(styles.container, className)} />;
}
