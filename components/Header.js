import { useRef, useState, forwardRef, useEffect } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import clsx from "clsx";
import { useRouter } from "next/router";

// Internal dependencies
import Button from "../components/Button";
import Logo from "../components/Logo";

import styles from "./Header.module.scss";

const NavBar = forwardRef(function NavBar({ className, setIsNavOpen }, ref) {
  const router = useRouter();

  const contentRef = useRef(null);

  function handleClick(e, path) {
    e.preventDefault();
    setIsNavOpen(false);

    contentRef.current.ontransitionend = () =>
      router.push(path, undefined, { scroll: false });
  }

  return (
    <div
      className={clsx({
        [styles.navbar]: true,
        [className]: true,
      })}
      ref={ref}
    >
      <div className={styles.content} ref={contentRef}>
        {router.pathname === "/" ? (
          <>
            <div className={styles.links}>
              <Link
                href={"#hero"}
                scroll={false}
                onClick={(e) => handleClick(e, "#hero")}
              >
                Home
              </Link>
              <Link
                href={"#whyus"}
                scroll={false}
                onClick={(e) => handleClick(e, "#whyus")}
              >
                Why Us
              </Link>
              <Link
                href={"#services"}
                scroll={false}
                onClick={(e) => handleClick(e, "#services")}
              >
                <span className={styles.our}>Our</span> Services
              </Link>
              <Link
                href={"#contact"}
                scroll={false}
                onClick={(e) => handleClick(e, "#contact")}
              >
                Contact
              </Link>
            </div>
            <div className={styles.buttons}>
              <Link href={"/hiring"}>
                <Button>Hire a Tutor</Button>
              </Link>
              <Link href={"/tutoring"}>
                <Button type="secondary">Become a Tutor</Button>
              </Link>
            </div>
          </>
        ) : (
          <div className={styles.links}>
            <Link href={"/"}>Home</Link>
            <Link href={"/hiring"}>Hiring</Link>
            <Link href={"/tutoring"}>Tutoring</Link>
            <Link href={"/#contact"}>Contact</Link>
          </div>
        )}
      </div>
      <div className={styles.background}>
        <div className={styles.background1}></div>
        <div className={styles.background2}></div>
      </div>
    </div>
  );
});

export default function Header({ dark }) {
  const lastY = useRef(0);

  const navbarElement = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [transparency, setTransparency] = useState(0);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    window.onscroll = () => {
      const y = document.body.scrollTop || document.documentElement.scrollTop;

      const delta = y - lastY.current;

      if (Math.abs(delta) > 2 && !isNavOpen) {
        if (delta > 0) setIsHeaderHidden(true);
        else if (delta < 0) setIsHeaderHidden(false);
      }

      lastY.current = y;
      setTransparency(Math.min(1, y / 400));
    };
  }, []);

  return (
    <>
      <header
        className={clsx({
          [styles.header]: true,
          [styles.hidden]: isHeaderHidden,
          [styles.dark]: dark,
          [styles.menuopen]: isNavOpen,
        })}
        style={{
          "--transparency": transparency,
        }}
        ref={headerRef}
      >
        <Logo fill="#fff" />
        <MenuButton onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)} />
      </header>
      <NavBar
        ref={navbarElement}
        className={clsx({
          [styles.visible]: isNavOpen,
        })}
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
      />
    </>
  );
}

function MenuButton({ onClick }) {
  return (
    <button className={styles.menu} onClick={onClick}>
      <AiOutlineMenu />
      <span>Menu</span>
    </button>
  );
}
