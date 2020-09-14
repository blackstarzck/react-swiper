import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import { Link } from 'react-router-dom';

function Movie({ title, summary, year, poster, genres }){
    console.log(title)
    return (
        <div className="movie">
            <Link to={{
                pathname: '/movie-details',
                state: { year, title, summary, poster, genres },
            }}>
            <img src={poster} alt={poster} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{ title }</h3>
                <h5 className="movie__year">{ year }</h5>
                <ul className="movie__genres">
                    {genres.map((genre, idx) => {
                        return(
                        <li key={idx} className="movie_genre">{genre}</li>
                        )
                    })}
                </ul>
                <p className="movie__summary">{ summary.slice(0, 180) }... </p>
            </div>
            </Link>
        </div>
    );
}

// 영화 데이터를 정의하고 관리하기 위해 prop-types사용
Movie.propTypes = {
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired, // API에서 정해준 "medium_cover_image"가 아닌 poster로 저장함.
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;