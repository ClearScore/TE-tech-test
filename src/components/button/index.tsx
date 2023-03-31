import useStyleSheet from "./styles";
import type { Props } from "./types";
import { cx } from "@emotion/css";

export default function Button({ className, ...props }: Props): JSX.Element {
  const styles = useStyleSheet();

  return <button {...props} className={cx(styles.container, className)} />;
}
