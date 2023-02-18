import { ImWhatsapp } from "react-icons/im";

import Link from "next/link";

// Internal dependencies
import styles from "./WhatsAppButton.module.scss";

export default function WhatsAppButton() {
  const number = "+91123456789";
  return (
    <Link href={`https://wa.me/${number.replace(/(\s)|\+/g, "")}?text=`}>
      <button className={styles.button}>
        <ImWhatsapp />
      </button>
    </Link>
  );
}
