import React from 'react';
import PropTypes from 'prop-types';
import s from './Reviews.module.css';

function Reviews({ reviews }) {
    return (
        <div>
            {reviews ? (
                <div>
                    <ul className={s.list}>
                        {reviews.map((elem, index) => (
                            <li key={index} className={s.item}>
                                <p className={s.title}>{elem.author}</p>
                                <p className={ s.info}>{elem.content}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (<p>We don't have any reviews for this movie</p>)}
        </div>
    );
}

Reviews.propTypes = {
  reviews: PropTypes.array,
};


export default Reviews;