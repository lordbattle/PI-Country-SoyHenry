import styles from "./Paginated.module.css";

const Paginated = ({
  countriesPerPage,
  allCountries,
  paginated,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.paged_container}>
      {pageNumbers &&
        pageNumbers.map((page) =>
          page === currentPage ? (
            <button
              className={styles.btn_pagination_active}
              key={page}
              onClick={() => paginated(page)}
            >
              {page}
            </button>
          ) : (
            <button
              className={styles.btn_pagination}
              key={page}
              onClick={() => paginated(page)}
            >
              {page}
            </button>
          )
        )}
    </div>
  );
};

export default Paginated;
