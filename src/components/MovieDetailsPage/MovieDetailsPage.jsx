import { NavLink, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieDetailsPage.module.css';
import Container from '../Container';

function MovieDetailsPage({ movie }) {
    const { url } = useRouteMatch();
    const history = useHistory();
    const location = useLocation();

    const onBtnClick = () => {
        history.push(location?.state?.from ?? '/');
    };

    return (
        <Container>
            <button type='button' className={s.button} onClick={onBtnClick}>Go back</button>
            <div>
                <img className={s.image} src={movie.poster_path} alt={movie.title} />

                <div className={s.box}>
                    <h2 className={s.title}>{movie.title || movie.name}</h2>
                    <p className={s.rating}>
                        User Score:
                        <span className={s.span}> {movie.vote_average} </span>
                    </p>

                    <p className={s.subtitle}>
                        Overview:
                        <span className={s.span}>{movie.overview}</span>
                    </p>

                    <p className={s.genres}>
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
        </Container>
    )
}

MovieDetailsPage.propTypes = {
  movie: PropTypes.object.isRequired,
};


export default MovieDetailsPage;
