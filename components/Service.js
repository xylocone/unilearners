// Internal dependencies
import styles from "./Service.module.scss";

export default function Service({ title, description }) {
  return (
    <div className={styles.service}>
      <span className={styles.title}>{title}</span>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
