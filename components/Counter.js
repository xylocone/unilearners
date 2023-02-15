// Internal dependencies
import styles from "./Counter.module.scss";

export default function Counter({ val, children, plus }) {
  return (
    <div className={styles.counter}>
      <span className={styles.value}>
        {val}
        {plus && "+"}
      </span>
      <span className={styles.label}>{children}</span>
    </div>
  );
}
