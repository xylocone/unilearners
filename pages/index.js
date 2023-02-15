import Image from "next/image";

// Internal dependencies
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Counter from "../components/Counter";
import Service from "../components/Service";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <Header />
      <Homepage />
      <WhyUs />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

function Homepage() {
  return (
    <div className={styles.home}>
      <div className={styles.content}>
        <h1 className={styles.heading}>UniLearners</h1>
        <h3 className={styles.subheading}>
          Your child&apos;s future is our responsibility.
        </h3>
        <div className={styles.buttons}>
          <Button>Hire a Tutor</Button>
          <span>or</span>
          <Button type="secondary">Become a Tutor</Button>
        </div>
      </div>
      <Image
        className={styles.image}
        src="/home.png"
        alt="Illustration"
        width={100}
        height={100}
      />
    </div>
  );
}

function WhyUs() {
  return (
    <div className={styles.whyus}>
      <div className={styles.shapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
      </div>
      <div className={styles.content}>
        <h1>Why Us?</h1>
        <p>
          We at UniLearners are loved by both students and parents alike;
          because of our quality, affordability and an unwavering passion for
          teaching.
        </p>
        <Testimonials />
        <div className={styles.counters}>
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
    <div className={styles.services}>
      <div className={styles.content}>
        <h1 className={styles.title}>We Provide</h1>
        <div className={styles.container}>
          {services.map(({ title, description }) => (
            <Service key={title} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.content}>
        <h1 className={styles.title}>Contact Us</h1>
        <ul className={styles.contacts}>
          <li>
            <b>Sandy:</b> +918989457877
          </li>
          <li>
            <b>John:</b> +915647816488
          </li>
        </ul>
        <div className={styles.map}>Here will be the map</div>
      </div>
    </div>
  );
}
