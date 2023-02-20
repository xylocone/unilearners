import { forwardRef } from "react";

// Internal dependencies
import styles from "./Service.module.scss";

const Service = forwardRef(function Service({ title, description }, ref) {
  return (
    <div className={styles.service} ref={ref}>
      <span className={styles.title}>{title}</span>
      <p className={styles.description}>{description}</p>
    </div>
  );
});

export default Service;
