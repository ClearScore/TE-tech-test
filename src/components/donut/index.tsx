import CountUp from "react-countup";
import type { Props } from "./types";
import useStyleSheet from "./styles";

export default function Donut({ score, maximum }: Props): JSX.Element {
  const styles = useStyleSheet({ degrees: (score / 1_000) * 360 });

  return (
    <section className={styles.container}>
      <CountUp start={0} end={score}>
        {({ countUpRef }) => (
          <div className={styles.value}>
            <span className={styles.score} ref={countUpRef} />
            <p className={styles.maximum}>out of {maximum}</p>
          </div>
        )}
      </CountUp>
    </section>
  );
}
