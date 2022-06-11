import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';

function MovieDetailsPage({ movie }) {
    const { url } = useRouteMatch();

    const onBtnClick = () => {
        history.push(location?.state?.from ?? '/');
    };

    return (
        <div>
            <button type='button' className={s.button} onClick={onBtnClick}>Go back</button>
            {movie && (
                <div>
                    <img src={movie.poster_path} alt={movie.title} />

                    <div>
                        <h2>{movie.title || movie.name}</h2>
                        <p>
                            User Score:
                            <span className={s.span}> {movie.vote_average} </span>
                        </p>

                        <p className={s.subtitle}>
                            Overview:
                            <span className={s.span}>{movie.overview}</span>
                        </p>

                        <p className={s.subtitle}>
                            Genres:
                            <span className={s.span}>
                                {movie.genres.map(genre => genre.name).join(' / ')}
                            </span>
                        </p>
                    </div>
                    <hr />

                    <h3>Additional information</h3>
                    <nav>
                        <NavLink
                            to={`${url}/cast`}
                            className={s.link}
                            activeClassName={s.activeLink}
                        >
                            Cast
                        </NavLink>

                        <NavLink
                            to={`${url}/reviews`}
                            className={s.link}
                            activeClassName={s.activeLink}
                        >
                            Reviews
                        </NavLink>
                    </nav>
                </div>
            )}  
        </div>
    )
}

export default MovieDetailsPage;
