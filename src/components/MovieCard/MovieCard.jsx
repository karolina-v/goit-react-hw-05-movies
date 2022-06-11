import { Link } from 'react-router-dom';
// import { imageURL } from '../../services/movies-api';
import s from './MovieCard.module.css';

const MovieCard = ({ movies }) => {
    return (
        <ul className={s.list}>
            {movies.map(movie => (
                <li key={movie.id} className={s.item}>
                    {/* <Link to={{
                        pathname: `/movies/${movie.id}`,
                        state: { from: location },
                    }} className={s.title}> */}
                    <Link to={`/movies/:${movie.id}`} className={s.title}>
                        <img
                            className={s.image}
                            src={movie.poster_path}
                            alt={movie.title || movie.name}
                            width="300"
                            height="450"
                        />
                        <p className={s.subtitle}>{movie.title || movie.name}</p>
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default MovieCard;