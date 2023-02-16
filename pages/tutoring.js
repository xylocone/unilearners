// Internal dependencies
import Header from "../components/Header";
import Footer from "../components/Footer";

import styles from "./TutoringForm.module.scss";

export default function TutoringForm() {
  return (
    <div className={styles.tutoring}>
      <Header />
      <div className={styles.content}>
        <h2>Become a Tutor</h2>
        <p>Fill the form below and we&apos;ll get right back at you!</p>

        <form></form>
      </div>
      <Footer />
    </div>
  );
}
