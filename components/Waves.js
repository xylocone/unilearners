// Internal dependencies
import styles from "./Waves.module.scss";

export default function Waves() {
  return (
    <svg
      className={styles.waves}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 24 150 28"
      preserveAspectRatio="none"
    >
      <defs>
        <path
          id="a"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
        />
      </defs>
      <g className={styles.parallax}>
        <use xlinkHref="#a" x={48} fill="rgba(255,255,255,0.3)" />
        <use xlinkHref="#a" x={48} y={3} fill="rgba(255,255,255,0.2)" />
        <use xlinkHref="#a" x={48} y={5} fill="rgba(255,255,255,0.1)" />
        <use xlinkHref="#a" x={48} y={7} fill="rgba(255, 255, 255, 0.7)" />
      </g>
    </svg>
  );
}
