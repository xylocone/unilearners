import Link from "next/link";

// Internal dependencies
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link href={"/#hero"} scroll={false}>
        <p>UnI</p>
      </Link>
    </div>
  );
}
