import { useState, useEffect } from "react";

// Internal dependencies
import Image from "../components/Image";

import styles from "./ServicesSlider.module.scss";
import clsx from "clsx";

export default function ServicesSlider() {
  const services = [
    {
      title: "Home Tuitions",
      description:
        "We have experienced and highly qualified tutors willing to share their knowledge at your doorstep.",
      imgPath: "/service1.gif",
    },
    {
      title: "Online Tuitions",
      description:
        "Connect with our professional tutors from anywhere in the world.",
      imgPath: "/service2.gif",
    },
    {
      title: "Competitive Exams Prep",
      description:
        "Tutors for CUET/JEE/NEET/NDA/SSC/BANK and other competitive exams.",
      imgPath: "/service3.gif",
    },
    {
      title: "Kindergarten Classes",
      description: "Classes for kids (3-5 years)",
      imgPath: "/service4.gif",
    },
    {
      title: "Programming Courses",
      description:
        "Courses on Java/C++/Python and other programming languages.",
      imgPath: "/service1.gif",
    },
    {
      title: "Hobby Classes",
      description: "Classes for fitness, music, playing guitar and much more.",
      imgPath: "/service4.gif",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextIndex();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  function goToNextIndex() {
    setCurrentIndex((currentIndex) => {
      if (currentIndex >= services.length - 1) return 0;
      return currentIndex + 1;
    });
  }

  return (
    <div
      className={styles.container}
      style={{ "--current-index": currentIndex }}
    >
      <ol className={styles.list}>
        {services.map(({ title }, index) => (
          <li
            key={index}
            className={clsx({ [styles.current]: currentIndex === index })}
          >
            <span key={index}>{title}</span>
          </li>
        ))}
      </ol>
      <div className={styles.slider}>
        <div className={styles.wrapper}>
          {services.map((props, index) => (
            <div key={index} className={styles.servicewrapper}>
              <Service {...props} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Service({ title, description, imgPath }) {
  return (
    <div className={styles.service}>
      <div className={styles.image}>
        <Image loading="eager" src={imgPath} alt={title} />
      </div>
      <div className={styles.details}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
