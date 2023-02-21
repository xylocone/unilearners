import { useState, useRef, useEffect, forwardRef } from "react";
import ReactCardFlip from "react-card-flip";
import Head from "next/head";

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
      <Head>
        <title>Become a Tutor | UnI Learners</title>
      </Head>
      <Header dark />
      <div className={styles.tutoring}>
        <div className={styles.content}>
          <h1 className={styles.heading}>Become a Tutor</h1>
          <p className={styles.subheading}>
            Start working for an institution comitted towards making the
            world&apos;s future brighter! Be a part of our one-of-a-kind work
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
  const [name, setName] = useState("");
  const [dob, setDOB] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState(0);
  const [subjects, setSubjects] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [classes, setClasses] = useState("");

  function handleButtonClick() {
    handleSubmit();
    setIsFormSubmitted(true);
  }

  function handleSubmit() {
    const body = `
      Name: ${name}
      Date of Birth: ${dob}
      Email: ${email}
      Number: ${number}
      Subjects: ${subjects}
      Qualifications: ${qualifications}
      Preferred Classes: ${classes}
    `;

    fetch("/api/mail", {
      headers: {
        "Content-Type": "text/plain",
      },
      method: "POST",
      body,
    });

    console.log(body);
  }

  return (
    <div className={styles.stack}>
      <ReactCardFlip isFlipped={isFormSubmitted}>
        <form
          className={styles.form}
          ref={ref}
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label htmlFor="tutoring_name">Your name</label>
            <input
              type="text"
              id="tutoring_name"
              onChange={(e) => setName(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="tutoring_dob">Your Date of Birth</label>
            <input
              type="date"
              id="tutoring_dob"
              onChange={(e) => setDOB(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="tutoring_email">Your email</label>
            <input
              type="email"
              id="tutoring_email"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="tutoring_number">WhatsApp No.</label>
            <input
              type="number"
              id="tutoring_number"
              onChange={(e) => setNumber(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="tutoring_qualifications">Qualifications</label>
            <input
              type="text"
              id="tutoring_qualifications"
              onChange={(e) => setQualifications(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="tutoring_subjects">Subjects You Teach</label>
            <input
              type="text"
              id="tutoring_subject"
              onChange={(e) => setSubjects(e.currentTarget.value)}
            />
          </div>
          <div>
            <label htmlFor="tutoring_classes">Preferred Classes</label>
            <input
              type="text"
              id="tutoring_classes"
              onChange={(e) => setClasses(e.currentTarget.value)}
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
