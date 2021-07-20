import axios from "../../axios"
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRIE = 'GET_COUNTRIE'
export const GET_COUNTRIES_NAME = 'GET_COUNTRIES_NAME'
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL'
export const FILTER_COUNTRIES_CONTINENT = 'FILTER_COUNTRIES_CONTINENT'
export const ORDER_COUNTRIES_POP_MIN = 'ORDER_COUNTRIES_POP_MIN'
export const ORDER_COUNTRIES_POP_MAX = 'ORDER_COUNTRIES_POP_MAX'

export function getCountries(order){
    return function(dispatch) {
        return axios.get('/countries?order=' + order)
        .then(response => response.data)
        .then(json =>{
            dispatch({type: 'GET_COUNTRIES', payload: json});
        })
    }
}


export function getCountriesName(name){
    return function(dispatch) {
        return axios.get('/countries?name=' + name)
        .then(response => response.data)
        .then(json =>{
            dispatch({type: 'GET_COUNTRIES_NAME', payload: json});
        })
    }
}


export function getCountryDetail(id){
    return function(dispatch) {
        return axios.get('/countries/'+id)
        .then(response => response.data)
        .then(json =>{
            dispatch({type: 'GET_COUNTRY_DETAIL', payload: json});
        })
    }
}

export function filterContinent(payload) {
    return { type: FILTER_COUNTRIES_CONTINENT, payload };
};

export function orderPopMin(payload){
    return { type: ORDER_COUNTRIES_POP_MIN, payload };
}

export function orderPopMax(payload){
    return { type: ORDER_COUNTRIES_POP_MAX, payload}
}



