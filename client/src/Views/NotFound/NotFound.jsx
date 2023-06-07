import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.div_containerError}>
      <h1>Page not found </h1>
      <h3>error 404</h3>
      <Link className={styles.error_backhome} to="/home">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
