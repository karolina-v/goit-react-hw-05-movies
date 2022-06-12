import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchMoviesSearch } from '../services/movies-api';
import MoviesSearch from '../components/MoviesSearch';
import MovieCard from '../components/MovieCard';


function MoviesView() {
    const [movies, setMovies] = useState(null);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        if (!inputValue) {
            return;
        }

        
        fetchMoviesSearch(inputValue).then(response => {
            if (!response.results.length) {
                toast.error('Try again');
                return;
            }
            setMovies(response.results);
            
            });
    }, [inputValue]);
        

    return (
        <div>
            <MoviesSearch onTitleSubmit={setInputValue} />

            {movies && <MovieCard movies={movies} />}
        </div>
    )
}

export default MoviesView;
