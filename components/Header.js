import { useRef, useState, forwardRef } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import clsx from "clsx";

// Internal dependencies
import Button from "../components/Button";
import Logo from "../components/Logo";

import styles from "./Header.module.scss";

const NavBar = forwardRef(function NavBar({ className }, ref) {
  return (
    <div
      className={clsx({
        [styles.navbar]: true,
        [className]: true,
      })}
      ref={ref}
    >
      <div className={styles.content}>
        <div className={styles.links}>
          <Link href={"/"}>Home</Link>
          <Link href={"#whyus"}>Why Us</Link>
          <Link href={"#services"}>Our Services</Link>
        </div>
        <div className={styles.buttons}>
          <Link href={"/hiring"}>
            <Button>Hire a Tutor</Button>
          </Link>
          <Link href={"/tutoring"}>
            <Button type="secondary">Become a Tutor</Button>
          </Link>
        </div>
      </div>
      <div className={styles.background}>
        <div className={styles.background1}></div>
        <div className={styles.background2}></div>
      </div>
    </div>
  );
});

export default function Header() {
  const navbarElement = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <Logo fill="#fff" />
        <MenuButton onClick={() => setIsNavOpen((isNavOpen) => !isNavOpen)} />
      </header>
      <NavBar
        ref={navbarElement}
        className={clsx({
          [styles.visible]: isNavOpen,
        })}
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
