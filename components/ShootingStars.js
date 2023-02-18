// Internal dependencies
import styles from "./ShootingStars.module.scss";

export default function ShootingStars() {
  return (
    <div className={styles.stars}>
      {Array(50)
        .fill(0)
        .map((_, index) => (
          <div key={index} className={styles.star}></div>
        ))}
    </div>
  );
}
