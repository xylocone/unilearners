import { useRef, forwardRef } from "react";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = forwardRef(function NavBar(_props, ref) {
  return (
    <div className={styles.navbar} ref={ref}>
      <Link href={"/"}>Home</Link>
      <Link href={"#whyus"}>Why Us</Link>
      <Link href={"#services"}>Our Services</Link>
      <Link href={"/hiring"}>Hire a Tutor</Link>
      <Link href={"/tutoring"}>Become a Tutor</Link>
    </div>
  );
});

// Internal dependencies
import * as styles from "./Header.module.scss";

export default function Header() {
  const navbarElement = useRef(null);

  function handleToggle() {
    navbarElement.current.classList.toggle("visible");
  }

  return (
    <>
      <header className={styles.header}>
        <Logo />
        <MenuButton onClick={() => handleToggle()} />
      </header>
      <NavBar ref={navbarElement} />
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

function Logo() {
  return <p className={styles.logo}>Uni</p>;
}
