// Internal dependencies
import styles from "./Logo.module.scss";

export default function Logo({ fill }) {
  return (
    <div className={styles.logo}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 247 304">
        <g
          data-name="Ellipse 13"
          fill="rgba(255,255,255,0)"
          stroke={fill}
          strokeWidth={2}
        >
          <circle cx={123.5} cy={123.5} r={123.5} stroke="none" />
          <circle cx={123.5} cy={123.5} r={122.5} fill="none" />
        </g>
        <text
          transform="translate(63 150)"
          fontSize={91}
          fontFamily="InkFree, Ink Free"
          fill={fill}
        >
          <tspan x={0} y={0}>
            {"Uni"}
          </tspan>
        </text>
        <text
          transform="translate(33 289)"
          fontSize={46}
          fontFamily="InkFree, Ink Free"
          letterSpacing=".05em"
          fill={fill}
        >
          <tspan x={0} y={0}>
            {"Learners"}
          </tspan>
        </text>
      </svg>
    </div>
  );
}
