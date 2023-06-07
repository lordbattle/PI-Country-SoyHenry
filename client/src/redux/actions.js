import axios from "axios";
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

const URLC = "http://localhost:3001/countries";
const URLA = "http://localhost:3001/activities";

export const getCountries = () => {
  return async (dispatch) => {
    const countriesData = (await axios.get(URLC)).data;
    dispatch({
      type: GET_COUNTRIES,
      payload: countriesData,
    });
  };
};

export const getCountryById = (countryId) => {
  return async (dispatch) => {
    const countryData = (await axios.get(URLC + `/${countryId}`)).data;
    dispatch({
      type: GET_COUNTRY,
      payload: countryData,
    });
  };
};

export const getActivities = () => {
  return async (dispatch) => {
    const activitiesData = (await axios.get(URLA)).data;
    dispatch({
      type: GET_ACTIVITIES,
      payload: activitiesData,
    });
  };
};

export const searchByName = (name) => {
  return async (dispatch) => {
    try {
      const searchNameCountry = (await axios.get(URLC + `/?name=${name}`)).data;
      searchNameCountry?.length
        ? dispatch({
            type: SEARCH_BY_NAME,
            payload: searchNameCountry,
          })
        : dispatch({
            type: SEARCH_BY_NAME,
            payload: [],
          });
    } catch (error) {
      dispatch({
        type: SEARCH_BY_NAME,
        payload: [],
      });
    }
  };
};

export function orderByName(ordering) {
  return {
    type: ORDER_BY_NAME,
    payload: ordering,
  };
}

export function orderByPopulation(ordering) {
  return {
    type: ORDER_BY_POPULATION,
    payload: ordering,
  };
}

export function filterByContinent(filter) {
  return {
    type: FILTER_BY_CONTINENT,
    payload: filter,
  };
}

export function filterByActivities(filter) {
  return {
    type: FILTER_BY_ACTIVITIES,
    payload: filter,
  };
}

export function reset() {
  return {
    type: RESET,
  };
}
