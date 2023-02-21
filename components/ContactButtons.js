import { ImWhatsapp } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

// Internal dependencies
import styles from "./ContactButtons.module.scss";

export default function WhatsAppButton() {
  const number = "+919451412323";
  return (
    <div className={styles.container}>
      <Link href={`https://wa.me/${number.replace(/(\s)|\+/g, "")}?text=`}>
        <button className={styles.whatsapp}>
          <ImWhatsapp />
        </button>
      </Link>
      <Link href={`tel:${number}`}>
        <button className={styles.call}>
          <FiPhoneCall />
        </button>
      </Link>
    </div>
  );
}
