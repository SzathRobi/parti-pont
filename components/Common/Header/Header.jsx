import Link from "next/link";
import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a>Főoldal</a>
        </Link>
        <Link href="/bolt">
          <a>Bolt</a>
        </Link>
        <Link href="/kapcsolat">
          <a>Kapcsolat</a>
        </Link>
        <div className={styles.hamburger}>
          <div className={styles.hamburger_line} />
          <div className={styles.hamburger_line} />
          <div className={styles.hamburger_line} />
        </div>
      </nav>
    </header>
  );
}

export default Header;
