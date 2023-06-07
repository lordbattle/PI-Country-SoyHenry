import { NavLink } from "react-router-dom";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={styles.div_container}>
      <div className={styles.div_containerDescription}>
        <h1>This is a project about Countries from Soy Henry!</h1>
        <h2>
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/cesar-daniel-sell-42a206157/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cesar Daniel Sell
          </a>
        </h2>
        <NavLink to="/home">
          <button className={styles.btn_home}>Let's start</button>
        </NavLink>
      </div>
      <div className={styles.div_containerImg}>
        <img
          src="https://usagif.com/wp-content/uploads/gifs/globe-42.gif"
          alt="img_landing"
        />
      </div>
    </div>
  );
};

export default Landing;
