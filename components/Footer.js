// Internal dependencies
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <p className={styles.footer}>
      This is the footer <FooterMenu />
    </p>
  );
}

function FooterMenu() {
  return <p>This is the footer menu</p>;
}
