import clsx from "clsx";

// Internal dependencies
import styles from "./Map.module.scss";

export default function Map({ className }) {
  return (
    <iframe
      className={clsx({
        [styles.map]: true,
        [className]: true,
      })}
      src="https://www.openstreetmap.org/export/embed.html?bbox=80.89516639709474%2C26.792585867411514%2C80.9315586090088%2C26.838699479092607&amp;layer=mapnik"
    ></iframe>
  );
}
