import Image from "next/image";

// Internal dependencies
import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";

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
  return <div className={styles.whyus}>This is the WhyUs section</div>;
}

function Services() {
  return (
    <div className={styles.services}>We Provide the following services</div>
  );
}

function Contact() {
  return <div className={styles.contact}>Contact Us now</div>;
}
