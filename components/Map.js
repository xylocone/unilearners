// Internal dependencies
import styles from "./Map.module.scss";

export default function Map() {
  return (
    <iframe
      className={styles.map}
      width="425"
      height="350"
      src="https://www.openstreetmap.org/export/embed.html?bbox=80.89516639709474%2C26.792585867411514%2C80.9315586090088%2C26.838699479092607&amp;layer=mapnik"
    ></iframe>
  );
}
