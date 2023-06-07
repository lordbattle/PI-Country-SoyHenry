import CardCountry from "../CardCountry/CardCountry";
import { useSelector } from "react-redux";
import Paginated from "../Paginated/Paginated";
import styles from "./CardsCountries.module.css";

const CardsCountries = (props) => {
  const countries = useSelector((state) => state.countries);

  const countriesShownPage = countries.slice(
    props.indexOfFirstCountry,
    props.indexOfLastCountry
  );

  const handleRefreshPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <div className={styles.divCards}>
        {countries?.length === 0 ? (
          <span>
            <p>Countries Not Found</p>
            <button onClick={handleRefreshPage}>Refresh page</button>
          </span>
        ) : (
          countriesShownPage?.map((country) => {
            return (
              <CardCountry
                id={country.id}
                flag={country.flag}
                name={country.name}
                continent={country.continent}
                key={country.id}
              />
            );
          })
        )}
      </div>
      <div>
        <Paginated
          countriesPerPage={props.countriesPerPage}
          allCountries={countries.length}
          paginated={props.paginated}
          currentPage={props.currentPage}
        />
      </div>
    </div>
  );
};

export default CardsCountries;
