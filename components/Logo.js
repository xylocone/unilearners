import Link from "next/link";

// Internal dependencies
import styles from "./Logo.module.scss";

export default function Logo({ fill }) {
  return (
    <div className={styles.logo}>
      <Link href={"/#hero"} scroll={false}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 247 247">
          <g
            data-name="Ellipse 13"
            fill="rgba(255,255,255,0)"
            stroke={fill}
            strokeWidth={8}
          >
            <circle cx={123.5} cy={123.5} r={123.5} stroke="none" />
            <circle cx={123.5} cy={123.5} r={119.5} fill="none" />
          </g>
          <text
            transform="translate(41 153)"
            fontSize={91}
            fontFamily="Comfortaa-Bold, Comfortaa"
            fontWeight={700}
            fill={fill}
          >
            <tspan x={0} y={0}>
              {"Uni"}
            </tspan>
          </text>
        </svg>
      </Link>
    </div>
  );
}
