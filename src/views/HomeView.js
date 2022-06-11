import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../services/movies-api';
import MovieCard from '../components/MovieCard';

function HomeView() {
    const [movies, setMovies] = useState(null);
    console.log(movies);

    useEffect(() => {
        fetchTrendingMovies().then(response => setMovies(response.results));
    }, []);

    return (
        <div>
            <h1>Trending today</h1>
            <MovieCard movies={movies}/>
        </div>
    )
}

export default HomeView;