import { useState, useEffect } from 'react';
import { fetchMovieCast } from '../../services/movies-api';

function Cast({ cast }) {
    // const [cast, setCast] = useState([]);

    // useEffect(() => {
    //     fetchMovieCast(movieId)
    //         .then(response => setCast(response.cast));
    // }, [movieId]);

    return (
        <ul className={s.list}>
            {cast.map(elem => (
                <li key={elem.id} className={s.item}>
                    <img
                        src={elem.profile_path}
                        alt={elem.name}
                        width='100'
                        height='150'
                    />
                    <p className={s.name}>{elem.name}</p>
                </li>
            ))
          }
        </ul>
    );
}

export default Cast;