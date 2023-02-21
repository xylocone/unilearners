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
            tutors like family members. No unncesserary hassles. That makes it
            easy for us to perform our duty as teachers.
          </p>
          <p className={styles.attribution}>UnI Learners Tutor</p>
        </div>
        <div className={styles.slide}>
          <p className={styles.testimony}>
            As a parent, I am always looking for ways to support my child&apos;s
            education. Hiring a tutor from UnILearners was one of the best
            decisions made. The tutor was professional, experienced, and able to
            identify areas where my child needed extra help. With the
            tutor&apos;s help, my child&apos;s grades and confidence improved,
            and I am grateful for the support provided.
          </p>
          <p className={styles.attribution}>Mrs. Priyanka Sharma, a Parent</p>
        </div>
      </div>
    </div>
  );
}
