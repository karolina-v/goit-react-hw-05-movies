import { useState } from 'react';
import { toast } from 'react-toastify';
import { useLocation, useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import s from './MoviesSearch.module.css';

function MoviesSearch({ onTitleSubmit }) {
    const [searchMovie, setSearchMovie] = useState('');

    const location = useLocation();
    const history = useHistory();

    const onFormSubmit = e => {
        e.preventDefault();

        if (searchMovie.trim() === '') {
        toast.error('Введите ключевое слово!');
        return;
        }
        
        history.push({
        ...location,
        search: `query=${searchMovie}`,
        });
        
        onTitleSubmit(searchMovie);
        setSearchMovie('');
    }

    const onInputChange = e => {
        setSearchMovie(e.currentTarget.value.toLowerCase());
    }

    return (
        <header className={s.form__header}>
            <form className={s.form} onSubmit={onFormSubmit}>
                <input
                    className={s.form__input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movies..."
                    value={searchMovie}
                    onChange={onInputChange}
                />
                <button type='submit' className={s.form__btn}>
                    <span className={s.form__btnLabel}>Search</span>
                </button>
            </form>
        </header>
    )
}

MoviesSearch.propTypes = {
  onTitleSubmit: PropTypes.func.isRequired,
};

export default MoviesSearch;


