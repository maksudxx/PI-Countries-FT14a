import { FILTER_COUNTRIES_ACTIVITIES, GET_COUNTRIES } from "../actions/index";
import { GET_COUNTRIES_NAME } from "../actions/index";
import { GET_COUNTRY_DETAIL } from "../actions/index";
import { FILTER_COUNTRIES_CONTINENT } from "../actions/index";
import {ORDER_COUNTRIES_POPULATION} from "../actions/index";


const initialState = {
  countries: [],
  countryDetail: {},
  filterContinents:[]
 
};

export default function rootReducer(state = initialState, action) {
  if (action.type === GET_COUNTRIES) {
    return {
      ...state,
      countries: action.payload,
    };
  }

  if (action.type === GET_COUNTRIES_NAME) {
    return {
      ...state,
      countries: action.payload,
    };
  }

  if (action.type === GET_COUNTRY_DETAIL) {
    return {
      ...state,
      countryDetail: action.payload,
    };
  }

  if (action.type === FILTER_COUNTRIES_CONTINENT) {
    // let filterContinent= state.countries.filter((country) => country.continent === action.payload);
    // console.log(filterContinent)
    return {
      ...state,
      countries: state.countries.filter((country) => country.continent === action.payload)
     
    };
  }

  if (action.type === FILTER_COUNTRIES_ACTIVITIES) {

    let a = state.countries.filter((country) => country.touristActivities.some((a)=> a.name === action.payload))
    console.log('payload: '+ action.payload)
    console.log('array '+ a)
    return {
      ...state,
      countries: state.countries.filter((country) => {
        return country.touristActivities.some((a)=> a.name === action.payload)
      })
     
    };
  }

  if (action.type === ORDER_COUNTRIES_POPULATION) {
    return {
      ...state,
      countries: action.payload,
    };
  }

 
  return state;
}
