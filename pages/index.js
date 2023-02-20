import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import Link from "next/link";
import Head from "next/head";

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
      <Head>
        <title>UniLearners | Quality Education, Online and Offline</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
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
            imgPath={"/Male.svg"}
            name="Arjun Singh"
            number="+91 123456789"
          />
          <ContactComponent
            imgPath={"/Female.svg"}
            name="Julia Roberts"
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
