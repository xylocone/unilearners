import Link from "next/link";

// Internal dependencies
import Button from "./Button";

import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <FooterMenu />
      <p className={styles.copyright}>&copy; 2023. All Rights Reserved.</p>
    </footer>
  );
}

function FooterMenu() {
  return (
    <div className={styles.menu}>
      <Link href={"/#hero"} scroll={false}>
        <Button>Home</Button>
      </Link>
      <Link href={"/hiring"}>
        <Button type="secondary">Hire a Tutor</Button>
      </Link>
      <Link href={"/tutoring"}>
        <Button type="secondary">Become a Tutor</Button>
      </Link>
    </div>
  );
}
