import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  movieCard: {
    position: 'relative',
    display: 'block',
    width: 800,
    height: 350,
    margin: '100px auto',
    overflow: 'hidden',
    borderRadius: 10,
    transition: 'all 0.4s',
    '&:hover': {
      transform: 'scale(1.02)',
      transition: 'all 0.4s',
    },
  },
  infoSection: {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundBlendMode: 'multiply',
    zIndex: 2,
    borderRadius: 10,
  },
  movieHeader: {
    position: 'relative',
    padding: 25,
    height: '40%',
    '& h1': {
      color: '#fff',
      fontWeight: 400,
    },
    '& h4': {
      color: '#9ac7fa',
      fontWeight: 400,
    },
    '& .minutes': {
      display: 'inline-block',
      marginTop: 10,
      color: '#fff',
      padding: 5,
      borderRadius: 5,
      border: '1px solid rgba(255, 255, 255, 0.13)',
    },
    '& .type': {
      display: 'inline-block',
      color: '#cee4fd',
      marginLeft: 10,
    },
    '& .locandina': {
      position: 'relative',
      float: 'left',
      marginRight: 20,
      height: 120,
      boxShadow: '0 0 20px -10px rgba(0, 0, 0, 0.5)',
    },
  },
  movieDesc: {
    padding: 25,
    height: '50%',
    '& .text': {
      color: '#cfd6e1',
    },
  },
  movieSocial: {
    height: '10%',
    paddingLeft: 15,
    paddingBottom: 20,
  },
  blurBack: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
    height: '100%',
    right: 0,
    backgroundSize: 'cover',
    borderRadius: 11,
    backgroundImage: (props) => `url(${props.movie?.imageBackground})`,
  },
  rating: {
    display: 'inline-block',
    marginTop: 10,
    marginLeft: 10,
    fontWeight: 'bold',
    '&.r': {
      color: '#d8121a',
    },
    '&.g': {
      color: '#1d6835',
    },
    '&.pg': {
      color: '#f25a24',
    },
    '&.pg-13': {
      color: '#803d9a',
    },
    '&.nc-17': {
      color: '#253d9c',
    },
  },
  '@media screen and (min-width: 768px)': {
    movieHeader: {
      width: '60%',
    },
    movieDesc: {
      width: '50%',
    },
    infoSection: {
      background: 'linear-gradient(to right, #0d0d0c 50%, transparent 100%)',
    },
    blurBack: {
      width: '80%',
      backgroundPosition: '-100% 10% !important',
    },
  },
  '@media screen and (max-width:  768px)': {
    movieCard: {
      width: '95%',
      margin: '70px auto',
      minHeight: 350,
      height: 'auto',
    },
    blurBack: {
      width: '100%',
      backgroundPosition: '50% 50% !important',
    },
    movieHeader: {
      width: '100%',
      marginTop: 85,
    },
    movieDesc: {
      width: '100%',
    },
    infoSection: {
      background: 'linear-gradient(to top, #141413 50%, transparent 100%)',
      display: 'inline-grid',
    },
  },
  bright: {
    boxShadow: '0px 0px 150px -45px rgba(255, 51, 0, 0.5)',
    '&:hover': {
      boxShadow: '0px 0px 120px -55px rgba(255, 51, 0, 0.5)',
    },
  },
});

function MoviePoster({ movie, rating }) {
  const classes = useStyles({movie});

  return (
    <div className={`${classes.movieCard} ${classes.bright}`}>
      <div className={classes.infoSection}>
        <div className={classes.movieHeader}>
          <img className="locandina" src={movie.imageUrl} />
          <h1>{movie.title}</h1>
          <h4>
            {movie.year}, {movie.director}
          </h4>
          <span className="minutes">{movie.lengthMinutes} min</span>
          <span className={`${classes.rating} ${rating.toLowerCase()}`}>
            {rating}
          </span>
          <p className="type">
            {movie.genres?.map((g) => `${g},`)}
          </p>
        </div>
        <div className={classes.movieDesc}>
          <p className="text">{movie.description}</p>
        </div>
        <div className={classes.movieSocial}>
          <ul>
            <li>
              <i className="material-icons">share</i>
            </li>
            <li>
              <i className="material-icons"></i>
            </li>
            <li>
              <i className="material-icons">chat_bubble</i>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.blurBack}></div>
    </div>
  );
}

export default MoviePoster;

