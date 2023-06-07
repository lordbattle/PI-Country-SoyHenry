import { useDispatch, useSelector } from "react-redux";
import { getCountryById } from "../../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Activity from "../../components/Activity/Activity";
import styles from "./Detail.module.css";

const Detail = () => {
  const country = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const { countryId } = useParams();
  console.log(countryId);

  useEffect(() => {
    dispatch(getCountryById(countryId));
  }, [dispatch, countryId]);

  const countryActivities = country.activities;

  return (
    <div className={styles.detail_container}>
      <div className={styles.detail_info}>
        <h1 className={styles.detail_title}>
          {country.name} ({country.id})
        </h1>
        <img
          src={country.flag}
          alt={country.name}
          className={styles.detail_flag}
        />
        <ul className={styles.detail_list}>
          <li>Continent: {country.continent}</li>
          <li>Capital: {country.capital}</li>
          <li>Subregion: {country.subregion}</li>
          <li>Area: {country.area}</li>
          <li>Population: {country.population}</li>
        </ul>
      </div>
      <div className={styles.detail_info}>
        {countryActivities?.length !== 0 && <h2 className={styles.detail_title}>Activities</h2>}
        <table className={styles.detail_activities_table}>
          {countryActivities?.length !== 0 && (
            <tbody>
              <tr>
                <th>Activity</th>
                <th>Difficulty</th>
                <th>Duration</th>
                <th>Season</th>
              </tr>
            </tbody>
          )}
          <tbody>
            {countryActivities?.map((activity) => {
              return (
                <Activity
                  name={activity.name}
                  difficulty={activity.difficulty}
                  duration={activity.duration}
                  season={activity.season}
                  key={activity.id}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Detail;
