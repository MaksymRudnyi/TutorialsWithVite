import React from 'react';
import './styles.scss';

function MoviePoster({ movie, rating }) {
  return (
    <div className="movie_card" id="bright">
      <div className="info_section">
        <div className="movie_header">
          <img className="locandina"
               src={movie.imageUrl}/>
          <h1>{movie.title}</h1>
          <h4>{movie.year}, {movie.director}</h4>
          <span className="minutes">{movie.lengthMinutes} min</span>
          <span className={`rating ${rating.toLowerCase()}`}>{rating}</span>
          <p className="type">{movie.genres?.map((g) => `${g},`)}</p>
        </div>
        <div className="movie_desc">
          <p className="text">{movie.description}</p>
        </div>
        <div className="movie_social">
          <ul>
            <li><i className="material-icons">share</i></li>
            <li><i className="material-icons"></i></li>
            <li><i className="material-icons">chat_bubble</i></li>
          </ul>
        </div>
      </div>
      <div className="blur_back" style={{backgroundImage: `url("${movie.imageBackground}")`}}></div>
    </div>
  );
}

export default MoviePoster;