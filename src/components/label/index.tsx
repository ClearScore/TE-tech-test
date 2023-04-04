import { cx } from "@emotion/css";
import type { Props } from "./types";
import useStyleSheet from "./styles";

export default function Label({ className, ...props }: Props): JSX.Element {
  const styles = useStyleSheet();

  return <label {...props} className={cx(styles.container, className)} />;
}
