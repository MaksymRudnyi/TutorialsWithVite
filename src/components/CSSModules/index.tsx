import React from 'react';
import styles from './styles.module.css';

function MoviePoster({ movie, rating }) {
  return (
    <div className={styles.movie_card} id="bright">
      <div className={styles.info_section}>
        <div className={styles.movie_header}>
          <img className={styles.locandina}
               src={movie.imageUrl}/>
          <h1>{movie.title}</h1>
          <h4>{movie.year}, {movie.director}</h4>
          <span className={styles.minutes}>{movie.lengthMinutes} min</span>
          <span className={`${styles.rating} ${styles[rating.toLowerCase()]}`}>{rating}</span>
          <p className={styles.type}>{movie.genres?.map((g) => `${g},`)}</p>
        </div>
        <div className={styles.movie_desc}>
          <p className={styles.text}>{movie.description}</p>
        </div>
        <div className={styles.movie_social}>
          <ul>
            <li><i className="material-icons">share</i></li>
            <li><i className="material-icons"></i></li>
            <li><i className="material-icons">chat_bubble</i></li>
          </ul>
        </div>
      </div>
      <div className={styles.blur_back} style={{backgroundImage: `url("${movie.imageBackground}")`}}></div>
    </div>
  );
}

export default MoviePoster;
