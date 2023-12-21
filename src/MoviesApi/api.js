import axios from "axios";

 const BASE_URL = 'https://api.themoviedb.org/3/';
// const API_KEY = '4ede0e32802f72a2a7cd93fc07c87f24';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZWRlMGUzMjgwMmY3MmEyYTdjZDkzZmMwN2M4N2YyNCIsInN1YiI6IjY1ODQwMGI1ODgwNTUxNDBmNDI3ZjkyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.82zWmF15FH0JbX_AP7kOBT0VQ77fEF5Y3SszCWAJKAs',
    },
  };

export async function fetchMovies() {
    const url = `${BASE_URL}trending/movie/day`;
    const {data} = await axios.get(url, options);
    console.log(data)
    return data;
    
}

