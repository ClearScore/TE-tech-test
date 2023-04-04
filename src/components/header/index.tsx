import useStyleSheet from "./styles";

export default function Header(): JSX.Element {
  const styles = useStyleSheet();

  return (
    <header className={styles.container}>
      <h1 className={styles.header}>
        <img
          className={styles.logo}
          src="/images/logo-light.svg"
          alt="ClearScore"
        />
      </h1>
    </header>
  );
}
