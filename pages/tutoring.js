import { useState, useRef, useEffect, forwardRef } from "react";
import { TagsInput } from "react-tag-input-component";
import ReactCardFlip from "react-card-flip";

// Internal dependencies
import Header from "../components/Header";
import Button from "../components/Button";
import Image from "../components/Image";
import Bubbles from "../components/Bubbles";
import Footer from "../components/Footer";

import styles from "./TutoringForm.module.scss";

export default function TutoringForm() {
  const container = useRef(null);
  const form = useRef(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    if (isFormSubmitted) {
      container.current.style.setProperty(
        "height",
        `${form.current.offsetHeight + 32}px`
      );
    }
  }, [isFormSubmitted]);

  return (
    <>
      <Header dark />
      <div className={styles.tutoring}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Become a Tutor</h1>
          <p className={styles.subheading}>
            Start working for an institution comitted towards making
            India&apos;s future brighter! Be a part of our one-of-a-kind work
            environment!
          </p>
          <div className={styles.container} ref={container}>
            <Illustration />
            <Form
              ref={form}
              isFormSubmitted={isFormSubmitted}
              setIsFormSubmitted={setIsFormSubmitted}
            />
          </div>
        </div>
        <div className={styles.background}>
          <Bubbles />
        </div>
      </div>
      <Footer />
    </>
  );
}

function Illustration() {
  return (
    <div className={styles.illustration}>
      <Image alt="Illustration" src="/TutoringForm.svg" />
    </div>
  );
}

const Form = forwardRef(function Form(
  { isFormSubmitted, setIsFormSubmitted },
  ref
) {
  const [subjects, setSubjects] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [classes, setClasses] = useState([]);

  function handleButtonClick() {
    ref.current.submit();
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsFormSubmitted(true);
  }

  return (
    <div className={styles.stack}>
      <ReactCardFlip isFlipped={isFormSubmitted}>
        <form
          className={styles.form}
          ref={ref}
          onSubmit={(e) => handleSubmit(e)}
        >
          <div>
            <label htmlFor="tutoring_name">Your name</label>
            <input type="text" id="tutoring_name" />
          </div>
          <div>
            <label htmlFor="tutoring_dob">Your Date of Birth</label>
            <input type="text" id="tutoring_dob" />
          </div>
          <div>
            <label htmlFor="tutoring_email">Your email</label>
            <input type="email" id="tutoring_email" />
          </div>
          <div>
            <label htmlFor="tutoring_number">WhatsApp No.</label>
            <input type="number" id="tutoring_number" />
          </div>
          <div>
            <label htmlFor="tutoring_qualifications">Qualifications</label>
            <TagsInput
              value={qualifications}
              onChange={setQualifications}
              id="tutoring_qualifications"
              name="tutoring_qualifications"
              placeHolder="Type and press enter to add multiple"
            />
          </div>
          <div>
            <label htmlFor="tutoring_subjects">Subjects You Teach</label>
            <TagsInput
              value={subjects}
              onChange={setSubjects}
              id="tutoring_subjects"
              name="tutoring_subjects"
              placeHolder="Type and press enter to add multiple"
            />
          </div>
          <div>
            <label htmlFor="tutoring_classes">Preferred Classes</label>
            <TagsInput
              value={classes}
              onChange={setClasses}
              id="tutoring_classes"
              name="tutoring_classes"
              placeHolder="Type and press enter to add multiple"
            />
          </div>
          <div>
            <Button onClick={() => handleButtonClick()} type="primary">
              Submit
            </Button>
          </div>
        </form>
        <div
          className={styles.flippedform}
          onClick={() => setIsFormSubmitted(false)}
        >
          <h2>Thank You!</h2>
          <p>
            We have received your information and will be contacting you soon!
          </p>
        </div>
      </ReactCardFlip>
    </div>
  );
});
