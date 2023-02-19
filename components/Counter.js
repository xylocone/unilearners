import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useCountUp } from "react-countup";

// Internal dependencies
import styles from "./Counter.module.scss";

export default function Counter({ val, children, plus }) {
  const [hasComeIntoView, setHasComeIntoView] = useState(false);
  const countRef = useRef(null);

  const { start } = useCountUp({
    start: Math.max(0, val - 50),
    end: val,
    duration: 1,
    suffix: plus ? "+" : "",
    ref: countRef,
  });

  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    if (!hasComeIntoView && inView) setHasComeIntoView(true);
  }, [inView]);

  useEffect(() => {
    if (hasComeIntoView) {
      start(0);
    }
  }, [hasComeIntoView]);

  return (
    <div className={styles.counter} ref={ref}>
      <span className={styles.value} ref={countRef}></span>
      <span className={styles.label}>{children}</span>
    </div>
  );
}
