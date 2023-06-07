import {
  GET_COUNTRY,
  GET_COUNTRIES,
  GET_ACTIVITIES,
  SEARCH_BY_NAME,
  ORDER_BY_NAME,
  ORDER_BY_POPULATION,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITIES,
  RESET,
} from "./action_type";

const initialState = {
  countriesOrigin: [],
  countries: [],
  country: [],
  activities: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };

    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesOrigin: action.payload,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case SEARCH_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case ORDER_BY_NAME:
      const orderNameCopy = [...state.countriesOrigin];
      const orderName = orderNameCopy.sort((countryA, countryB) => {
        if (countryA.name > countryB.name)
          return "Increasing" === action.payload ? 1 : -1;
        if (countryA.name < countryB.name)
          return "Decreasing" === action.payload ? 1 : -1;
        return 0;
      });
      return {
        ...state,
        countries: orderName,
      };

    case ORDER_BY_POPULATION:
      const orderPopulationCopy = [...state.countriesOrigin];
      const orderPopulation = orderPopulationCopy.sort((countryA, countryB) => {
        if (countryA.population > countryB.population)
          return "Increasing" === action.payload ? 1 : -1;
        if (countryA.population < countryB.population)
          return "Decreasing" === action.payload ? 1 : -1;
        return 0;
      });
      return {
        ...state,
        countries: orderPopulation,
      };

    case FILTER_BY_CONTINENT:
      const continentFiltered = state.countriesOrigin.filter(
        (country) => country.continent === action.payload
      );
      return {
        ...state,
        countries: continentFiltered,
      };

    case FILTER_BY_ACTIVITIES:
      const activitiesFiltered = state.countriesOrigin.filter(
        (country) =>
          country.activities &&
          country.activities.find(
            (activity) => activity.name === action.payload
          )
      );

      return {
        ...state,
        countries: activitiesFiltered,
      };

    case RESET:
      return {
        ...state,
        countries: [...state.countriesOrigin],
      };
    default:
      return { ...state };
  }
};

export default reducer;
