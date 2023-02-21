import clsx from "clsx";

// Internal dependencies
import styles from "./Button.module.scss";

export default function Button({ type, onClick, children }) {
  return (
    <button
      className={clsx({
        [styles.button]: true,
        [styles.primary]: type === undefined || type === "primary",
        [styles.secondary]: type === "secondary",
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
