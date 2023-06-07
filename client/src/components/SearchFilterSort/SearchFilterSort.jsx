import {
  searchByName,
  orderByName,
  orderByPopulation,
  filterByContinent,
  filterByActivities,
  reset,
} from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import styles from "./SearchFilterSort.module.css";

const SearchFilterSort = (props) => {
  const activities = useSelector((state) => state.activities);

  const dispatch = useDispatch();

  const handleOptionsChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    props.paginated(1);
    if (name === "searchByName") dispatch(searchByName(value));
    if (name === "orderByName") dispatch(orderByName(value));
    if (name === "orderByPopulation") dispatch(orderByPopulation(value));
    if (name === "filterByContinent") dispatch(filterByContinent(value));
    if (name === "filterByActivities") dispatch(filterByActivities(value));
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className={styles.div_containerFilter}>
      {/* Search */}
      <div className={styles.div_searchName}>
        <input
          type="text"
          name="searchByName"
          placeholder="Search by name..."
          onChange={handleOptionsChange}
        />
      </div>

      {/* Sort */}
      <div className={styles.div_filterSelectors}>
        <select
          name="orderByName"
          defaultValue={"DEFAULT"}
          onChange={handleOptionsChange}
        >
          <option value="DEFAULT" disabled>
            Sort by name
          </option>
          <option value="Increasing">aA - zZ</option>
          <option value="Decreasing">zZ - aA</option>
        </select>
      </div>

      <div className={styles.div_filterSelectors}>
        <select
          name="orderByPopulation"
          defaultValue={"DEFAULT"}
          onChange={handleOptionsChange}
        >
          <option value="DEFAULT" disabled>
            Population
          </option>
          <option value="Increasing">Increasing</option>
          <option value="Decreasing">Decreasing</option>
        </select>
      </div>

      {/* Filter */}
      <div className={styles.div_filterSelectors}>
        <select
          name="filterByContinent"
          className={styles.filterByContinent}
          defaultValue={"DEFAULT"}
          onChange={handleOptionsChange}
        >
          <option value="DEFAULT" disabled>
            Continent
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Polar">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className={styles.div_filterSelectors}>
        {activities?.length === 0 ? (
          <select defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>
              No activities yet
            </option>
          </select>
        ) : (
          <select
            name="filterByActivities"
            defaultValue={"DEFAULT"}
            onChange={handleOptionsChange}
          >
            <option value="DEFAULT" disabled>
              Activities
            </option>
            {activities?.map((activity) => (
              <option value={activity.name} key={activity.id}>
                {activity.name}
              </option>
            ))}
          </select>
        )}
      </div>
      {/* Reset */}
      <div>
        <button className={styles.div_btnReset} onClick={handleReset}>
          Reset filters
        </button>
      </div>
    </div>
  );
};

export default SearchFilterSort;
