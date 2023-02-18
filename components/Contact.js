import Link from "next/link";
import { FiPhoneCall } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";
import clsx from "clsx";

// Internal dependencies
import Image from "./Image";
import styles from "./Contact.module.scss";

export default function Contact({ name, number, imgPath }) {
  return (
    <div className={styles.contact}>
      <div className={styles.image}>
        <Image src={imgPath} alt={name} />
      </div>
      <div className={styles.details}>
        <span className={styles.name}>{name}</span>
        <span className={styles.number}>{number}</span>
      </div>
      <div className={styles.buttons}>
        <Link href={`tel:${number.replace(" ", "")}`}>
          <button
            className={clsx({ [styles.button]: true, [styles.call]: true })}
          >
            <FiPhoneCall />
          </button>
        </Link>
        <Link href={`https://wa.me/${number.replace(/(\s)|\+/g, "")}?text=`}>
          <button
            className={clsx({ [styles.button]: true, [styles.whatsapp]: true })}
          >
            <ImWhatsapp />
          </button>
        </Link>
      </div>
    </div>
  );
}
