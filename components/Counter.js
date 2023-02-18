import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

// Internal dependencies
import styles from "./Counter.module.scss";

export default function Counter({ val, children, plus }) {
  const [hasComeIntoView, setHasComeIntoView] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.max(val - 20, 0));

  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (!hasComeIntoView && inView) setHasComeIntoView(true);
  }, [inView]);

  return (
    <div className={styles.counter} ref={ref}>
      <span className={styles.value}>
        {currentValue}
        {plus && "+"}
      </span>
      <span className={styles.label}>{children}</span>
    </div>
  );
}
