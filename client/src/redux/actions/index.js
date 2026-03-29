import axios from "../../axios"
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const GET_COUNTRIE = 'GET_COUNTRIE'
export const GET_COUNTRIES_NAME = 'GET_COUNTRIES_NAME'
export const GET_COUNTRY_DETAIL = 'GET_COUNTRY_DETAIL'
export const FILTER_COUNTRIES_CONTINENT = 'FILTER_COUNTRIES_CONTINENT'
export const ORDER_COUNTRIES_POPULATION = 'ORDER_COUNTRIES_POPULATION'
export const FILTER_COUNTRIES_ACTIVITIES = 'FILTER_COUNTRIES_ACTIVITIES'
export const SET_LOADING = 'SET_LOADING'


export function getCountries(order){
    return function(dispatch) {
        dispatch({type: SET_LOADING, payload: true});
        return axios.get('/countries?order=' + order)
        .then(response => response.data)
        .then(json =>{
            dispatch({type: 'GET_COUNTRIES', payload: json});
            dispatch({type: SET_LOADING, payload: false});
        })
        .catch(error => {
            console.error(error);
            dispatch({type: SET_LOADING, payload: false});
        });
    }
}


export function getCountriesName(name){
    return function(dispatch) {
        dispatch({type: SET_LOADING, payload: true});
        return axios.get('/countries?name=' + name)
        .then(response => response.data)
        .then(json =>{
            dispatch({type: 'GET_COUNTRIES_NAME', payload: json});
            dispatch({type: SET_LOADING, payload: false});
        })
        .catch(error => {
            console.error(error);
            dispatch({type: SET_LOADING, payload: false});
        });
    }
}


export function getCountryDetail(id){
    return function(dispatch) {
        dispatch({type: SET_LOADING, payload: true});
        return axios.get('/countries/'+id)
        .then(response => response.data)
        .then(json =>{
            dispatch({type: 'GET_COUNTRY_DETAIL', payload: json});
            dispatch({type: SET_LOADING, payload: false});
        })
        .catch(error => {
            console.error(error);
            dispatch({type: SET_LOADING, payload: false});
        });
    }
}

export function filterContinent(payload) {
    return { type: FILTER_COUNTRIES_CONTINENT, payload };
};

export function filterActivities(payload) {
    return { type: FILTER_COUNTRIES_ACTIVITIES, payload };
};
export function orderPopulation(payload){
    return function(dispatch) {
        dispatch({type: SET_LOADING, payload: true});
        return axios.get('/population?order=' + payload)
        .then(response => response.data)
        .then(json =>{
            dispatch({type: 'ORDER_COUNTRIES_POPULATION', payload: json});
            dispatch({type: SET_LOADING, payload: false});
        })
        .catch(error => {
            console.error(error);
            dispatch({type: SET_LOADING, payload: false});
        });
    }
}





