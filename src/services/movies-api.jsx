const API_KEY = '0efd4678447824d950c1f706c4df5ff6';
const BASE_URL = 'https://api.themoviedb.org/3';


async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok
        ? await response.json()
        : Promise.reject(new Error('Not found'));
}
  
// Trending Movies
export function fetchTrendingMovies() {
  return fetchWithErrorHandling(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
}

// Movies Search
export function fetchMoviesSearch(moviesName) {
  return fetchWithErrorHandling(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${moviesName}&language=en-US&page=1&include_adult=false`);
}

// Movie Details
export function fetchMovieDetails(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
}


// Cast 
export function fetchMovieCast(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
}

// Rewiews
export function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`);
}