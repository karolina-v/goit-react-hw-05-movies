import React from 'react';
import PropTypes from 'prop-types';
import s from './Cast.module.css';

function Cast({ cast }) {

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

Cast.propTypes = {
  cast: PropTypes.array.isRequired,
};

export default Cast;