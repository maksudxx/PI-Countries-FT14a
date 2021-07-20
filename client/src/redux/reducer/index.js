import { GET_COUNTRIES } from "../actions/index";
import { GET_COUNTRIES_NAME } from "../actions/index";
import { GET_COUNTRY_DETAIL } from "../actions/index";
import { FILTER_COUNTRIES_CONTINENT } from "../actions/index";
import {ORDER_COUNTRIES_POP_MIN} from "../actions/index";
import {ORDER_COUNTRIES_POP_MAX} from "../actions/index";

const initialState = {
  countries: [],
  countryDetail: {},
  filterContinent:[]
 
};

const Pop_Order = (a, b) => {
  if(a.population < b.population) return -1
  if(a.population > b.population) return 1
  return 0
}

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

  if (action.type === ORDER_COUNTRIES_POP_MAX) {
    return {
      ...state,
      countries: state.countries.slice().sort(Pop_Order).reverse()
    }
  }

  if (action.type === ORDER_COUNTRIES_POP_MIN) {
    return {
      ...state,
      countriesLoaded: state.countries.slice().sort(Pop_Order)
    }
  }
  return state;
}
