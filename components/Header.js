import { AiOutlineMenu } from "react-icons/ai";

// Internal dependencies
import * as styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <Logo />
        <MenuButton />
      </header>
      <NavBar />
    </>
  );
}

function MenuButton() {
  return (
    <button className={styles.menu}>
      <AiOutlineMenu />
      <span>Menu</span>
    </button>
  );
}

function Logo() {
  return <p className={styles.logo}>Uni</p>;
}

function NavBar() {
  return <div className={styles.navbar}></div>;
}
