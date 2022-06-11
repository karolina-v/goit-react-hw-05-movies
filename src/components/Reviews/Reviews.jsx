import { useState, useEffect } from 'react';
import { fetchMovieReviews } from '../../services/movies-api';

function Reviews({ reviews }) {
    // const [reviews, setReviews] = useState([]);

    // useEffect(() => {
    //     fetchMovieReviews(movieId)
    //         .then(response => setReviews(response.reviews));
    // }, [movieId]);

    return (
        <div>
            {reviews.length > 0 ? (
                <div>
                    <ul className={s.list}>
                        {reviews.map((elem, index) => (
                            <li key={index} className={s.item}>
                                <p className={s.title}>{elem.author}</p>
                                <p className={ s.desc}>{elem.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (<p>We don't have any reviews for this movie</p>)}
        </div>
    );
}

export default Reviews;