import { FaQuoteLeft } from "react-icons/fa";

// Internal dependencies
import styles from "./Testimonials.module.scss";

export default function Testimonials() {
  return (
    <div className={styles.testimonials}>
      <span className={styles.quote}>
        <FaQuoteLeft />
      </span>
      <div className={styles.container}>
        <div className={styles.slide}>
          <p className={styles.testimony}>
            UniLearners has the best tutors! I have seen so much progress in my
            academics ever since I enrolled with UniLearners 4 months ago. Plus,
            I&apos;m learning to play guitar too. All thanks to UniLearners!
          </p>
          <p className={styles.attribution}>Manyu Rajnibala, Class XI</p>
        </div>
        <div className={styles.slide}>
          <p className={styles.testimony}>
            It feels amazing to be a part of UniLearners. They treat their
            tutors like family members.
          </p>
          <p className={styles.attribution}>Srikant Jaiswal, Tutor</p>
        </div>
        <div className={styles.slide}>
          <p className={styles.testimony}>
            Lorem ipsum doler sit amet consectetur. This is just some filler
            text. This will be replaced by actual testimonials that the site
            owner provides.
          </p>
          <p className={styles.attribution}>Cicero, Tutor</p>
        </div>
      </div>
    </div>
  );
}
