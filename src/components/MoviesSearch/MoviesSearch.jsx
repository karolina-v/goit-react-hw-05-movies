import { useState } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './MoviesSearch.module.css';

function MoviesPage({ onTitleSubmit }) {
    const [searchMovie, setSearchMovie] = useState('');

    const onFormSubmit = e => {
        e.preventDefault();

        if (searchMovie.trim() === '') {
        toast.error('Введите ключевое слово!');
        return;
        }
        
        onTitleSubmit(searchMovie);
        setSearchMovie('');
    }

    const onInputChange = e => {
        setSearchMovie(e.currentTarget.value.toLowerCase());
    }

    return (
        <form className={s.form} onSubmit={onFormSubmit}>
            <input
                className={s.input}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search movies..."
                value={searchMovie}
                onChange={onInputChange}
            />
            <button type='submit' className={s.btn}>
                <span className={s.search}>Search</span>
            </button>
        </form>
    )
}

MoviesPage.propTypes = {
  onTitleSubmit: PropTypes.func.isRequired,
};

export default MoviesPage;


