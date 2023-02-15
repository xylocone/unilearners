import { FaQuoteLeft } from "react-icons/fa";

// Internal dependencies
import styles from "./Testimonials.module.scss";

export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <span>
        <FaQuoteLeft />
      </span>
      <p>This is something.</p>
      <p>This is something else.</p>
    </div>
  );
}
