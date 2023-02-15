import Link from "next/link";

// Internal dependencies
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
      <Link href={"/"}>Home</Link>
      <Link href={"/hiring"}>Hire a Tutor</Link>
      <Link href={"/tutoring"}>Become a Tutor</Link>
    </div>
  );
}
