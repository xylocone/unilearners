import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import Link from "next/link";

// Internal dependencies
import Header from "../components/Header";
import Button from "../components/Button";
import Image from "../components/Image";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Counter from "../components/Counter";
import Service from "../components/Service";
import Waves from "../components/Waves";
import RoundedSquares from "../components/RoundedSquares";
import Map from "../components/Map";
import { default as ContactComponent } from "../components/Contact";
import WhatsAppButton from "../components/WhatsAppButton";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhyUs />
      <Services />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

function Hero() {
  const { inView, ref } = useInView({ threshold: 0.3 });
  const [hasComeIntoView, setHasComeIntoView] = useState(false);

  useEffect(() => {
    if (inView) setHasComeIntoView(true);
  }, [inView]);

  return (
    <div className={styles.hero} id="hero">
      <div
        className={clsx({
          [styles.content]: true,
          [styles.inView]: hasComeIntoView,
        })}
        ref={ref}
      >
        <div className={styles.text}>
          <h1 className={styles.heading}>
            <span className={styles.uni}>Uni </span>Learners
          </h1>
          <h3 className={styles.subheading}>
            Your child&apos;s future is our responsibility.
          </h3>
          <div className={styles.buttons}>
            <Link href={"/hiring"}>
              <Button>Hire a Tutor</Button>
            </Link>
            <span>or</span>
            <Link href={"/tutoring"}>
              <Button type="secondary">Become a Tutor</Button>
            </Link>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            className={styles.illustration}
            src="/Home.svg"
            alt="Illustration"
          />
        </div>
      </div>
      <div className={styles.background}>
        <Waves />
        <RoundedSquares />
      </div>
    </div>
  );
}

function WhyUs() {
  const { inView, ref } = useInView({ threshold: 0.3 });
  const [hasComeIntoView, setHasComeIntoView] = useState(false);

  useEffect(() => {
    if (inView) setHasComeIntoView(true);
  }, [inView]);

  return (
    <div className={styles.whyus} id="whyus">
      <div className={styles.background}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
      </div>
      <div
        className={clsx({
          [styles.content]: true,
          [styles.inView]: hasComeIntoView,
        })}
        ref={ref}
      >
        <h1>Why Us?</h1>
        <p>
          We at UniLearners are loved by both students and parents alike;
          because of our quality, affordability and an unwavering passion for
          teaching.
        </p>
        <Testimonials />
        <div className={styles.counters}>
          <Counter val={10} plus={true}>
            Subjects Taught
          </Counter>
          <Counter val={45} plus={true}>
            Qualified Teachers
          </Counter>
          <Counter val={500} plus={true}>
            Satisfied Students
          </Counter>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const { inView, ref } = useInView({ threshold: 0.3 });
  const [hasComeIntoView, setHasComeIntoView] = useState(false);

  useEffect(() => {
    if (inView) setHasComeIntoView(true);
  }, [inView]);

  const services = [
    {
      title: "Home Tuitions",
      description:
        "We have experience and highly qualified tutors willing to share their knowledge at your doorstep.",
    },
    {
      title: "Online Tuitions",
      description:
        "Connect with our professional tutors from anywhere in the world.",
    },
    {
      title: "Competitive Exams",
      description:
        "Tutors for CUET/JEE/NEET/NDA/SSC/BANK and other competitive exams.",
    },
    {
      title: "Programming Courses",
      description:
        "Courses on Java/C++/Python and other programming languages.",
    },
    {
      title: "Kindergarten",
      description: "Classes for kids (3-5 years)",
    },
    {
      title: "Hobby Classes",
      description: "Classes for fitness, music, playing guitar and much more.",
    },
  ];

  return (
    <div className={styles.services} id="services">
      <div
        className={clsx({
          [styles.content]: true,
          [styles.inView]: hasComeIntoView,
        })}
        ref={ref}
      >
        <h1 className={styles.title}>We Provide</h1>
        <div className={styles.container}>
          {services.map(({ title, description }) => (
            <Service key={title} title={title} description={description} />
          ))}
        </div>
      </div>
      <div className={styles.background}>
        <RoundedSquares />
      </div>
    </div>
  );
}

function Contact() {
  const { inView, ref } = useInView({ threshold: 0.3 });
  const [hasComeIntoView, setHasComeIntoView] = useState(false);

  useEffect(() => {
    if (inView) setHasComeIntoView(true);
  }, [inView]);
  return (
    <div className={styles.contact} id="contact">
      <div
        className={clsx({
          [styles.content]: true,
          [styles.inView]: hasComeIntoView,
        })}
        ref={ref}
      >
        <h1 className={styles.heading}>Contact Us</h1>
        <p className={styles.subheading}>
          We would love to hear back from you!
        </p>
        <div className={styles.contacts}>
          <ContactComponent
            imgPath={"/home.png"}
            name="Arjun Singh"
            number="+91 123456789"
          />
          <ContactComponent
            imgPath={"/home.png"}
            name="Peter Fernandez"
            number="+91 123456789"
          />
        </div>
        <Map className={styles.map} />
        <p className={styles.address}>
          CSD Depot, Anand Nagar, Jail Road, Alambagh, Lucknow
        </p>
      </div>
    </div>
  );
}
