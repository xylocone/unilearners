// Internal dependencies
import styles from "./Bubbles.module.scss";

export default function Bubbles() {
  return (
    <div className={styles.bubbles}>
      {Array(25)
        .fill(0)
        .map((_, index) => (
          <div key={index} className={styles.bubble}></div>
        ))}
    </div>
  );
}
