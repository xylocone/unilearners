import { useState, useRef, useEffect, forwardRef } from "react";
import { TagsInput } from "react-tag-input-component";
import ReactCardFlip from "react-card-flip";

// Internal dependencies
import Header from "../components/Header";
import Button from "../components/Button";
import Image from "../components/Image";
import Bubbles from "../components/Bubbles";
import Footer from "../components/Footer";

import styles from "./HiringForm.module.scss";

export default function HiringForm() {
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
      <div className={styles.hiring}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Hire a Tutor</h1>
          <p className={styles.subheading}>
            Hire an experienced tutor from UniLearners! Just fill out the form
            below and we&apos;ll get right back to you!
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
      <Image alt="Illustration" src="/HiringForm.svg" />
    </div>
  );
}

const Form = forwardRef(function Form(
  { isFormSubmitted, setIsFormSubmitted },
  ref
) {
  const [subjects, setSubjects] = useState([]);
  const [hobbies, setHobbies] = useState([]);

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
            <label htmlFor="hiring_name">Your name</label>
            <input type="text" id="hiring_name" />
          </div>
          <div>
            <label htmlFor="hiring_email">Your email</label>
            <input type="email" id="hiring_email" />
          </div>
          <div>
            <label htmlFor="hiring_number">WhatsApp No.</label>
            <input type="number" id="hiring_number" />
          </div>
          <div>
            <label htmlFor="hiring_subjects">Subjects</label>
            <TagsInput
              value={subjects}
              onChange={setSubjects}
              id="hiring_subjects"
              name="hiring_subjects"
              placeHolder="Enter subjects here"
            />
          </div>
          <div>
            <label htmlFor="hiring_hobbies">Hobby Classes</label>
            <TagsInput
              value={hobbies}
              onChange={setHobbies}
              id="hiring_hobbies"
              name="hiring_hobbies"
              placeHolder="Enter hobbies here"
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
