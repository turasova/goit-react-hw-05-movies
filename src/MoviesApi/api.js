import axios from "axios";
import Notiflix from "notiflix";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '4ede0e32802f72a2a7cd93fc07c87f24';


export async function fetchMovies(endPoint) {
    const url = `${BASE_URL}${endPoint}?api_key=${API_KEY}`
    const {data} = await axios.get(url);
    return data;
};

export async function fetchSearchMovies(endPoint, query) {
    const url = `${BASE_URL}${endPoint}?api_key=${API_KEY}&query=${query}`
    const { data } = await axios.get(url);
    return data;
};

export async function fetchMovieDetails(endPoint, movieId) {
    const url = `${BASE_URL}${endPoint}/${movieId}?api_key=${API_KEY}`
    const { data } = await axios.get(url);
    return data;
};


export function onFetchError() {
    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page or make another choice!');
};


