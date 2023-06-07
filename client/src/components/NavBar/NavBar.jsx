import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.div_containerNav}>
      <div className={style.div_containerInfo}>
        <div>
          <Link to="/home">
            <img className={style.img} src={'https://static.vecteezy.com/system/resources/previews/010/829/977/large_2x/abstract-polygon-world-map-png.png'} alt="Logo Countries" />
          </Link>
        </div>
        <div className={style.div_options}>
          <Link to="/home">Home</Link>
          <Link to="/FormActivities">Form Activities</Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
