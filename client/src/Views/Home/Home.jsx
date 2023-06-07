import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getActivities, getCountries } from "../../redux/actions";
import SearchFilterSort from "../../components/SearchFilterSort/SearchFilterSort";
import CardsCountries from "../../components/CardsCountries/CardsCountries";
import styles from "./Home.module.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
    dispatch(getActivities());
  }, [dispatch]);

  //Paging control
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 10;
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

  //Function to set the pagination to 1 whenever some filtering action has been performed
  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className={styles.div_Home}>
      <SearchFilterSort paginated={paginated} />
      <CardsCountries
        indexOfFirstCountry={indexOfFirstCountry}
        indexOfLastCountry={indexOfLastCountry}
        paginated={paginated}
        countriesPerPage={countriesPerPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Home;
