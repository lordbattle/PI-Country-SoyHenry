import { Link } from "react-router-dom";
import styles from "./CardCountry.module.css";

const CardCountry = (props) => {
  return (
    <div className={styles.rotate_vertical_center}>
      <div className={styles.div_card}>
        <div className={styles.div_img}>
          <Link to={`/detail/${props.id}`}>
            <img src={props.flag} alt={props.name} />
          </Link>
        </div>
        <div className={styles.div_detail}>
          <h3>{props.name}</h3>
          <h4>{props.continent}</h4>
          <Link to={`/detail/${props.id}`}>
            <button className={styles.btn_viewDetails}>
              <span className={styles.btn_text}> Country details </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardCountry;
