import { default as NextImage } from "next/image";

// Internal dependencies
import styles from "./Image.module.scss";

export default function Image(props) {
  return (
    <div className={styles.container}>
      <NextImage {...props} height={100} width={100} className={styles.image} />
    </div>
  );
}
