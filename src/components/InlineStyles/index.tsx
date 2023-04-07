import React, { useState, useEffect } from 'react';

function MoviePoster({ movie, rating }) {
  const [styles, setStyles] = useState({});
  const ratingColor = {
    R: '#d8121a',
    G: '#1d6835',
    PG: '#f25a24',
    'PG-13': '#803d9a',
    'NC-17': '#253d9c',
  };

  const updateResponsiveStyles = () => {
    const isMobile = window.innerWidth <= 768;

    setStyles({
      movie_card: {
        position: 'relative',
        display: 'block',
        maxWidth: isMobile ? '95%' : 800,
        height: isMobile ? 'auto' : 350,
        margin: isMobile ? '70px auto' : '100px auto',
        overflow: 'hidden',
        borderRadius: 10,
        transition: 'all 0.4s',
        minHeight: isMobile ? '350px' : 'inherit'
      },
      info_section: {
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundBlendMode: 'multiply',
        background: isMobile
          ? ' linear-gradient(to top, #141413 50%, transparent 100%)'
          : 'linear-gradient(to right, #0d0d0c 50%, transparent 100%)',
        zIndex: 2,
        borderRadius: 10,
        display: isMobile ? 'inline-grid' : 'block'
      },
      movie_header: {
        position: 'relative',
        padding: 25,
        height: '40%',
        width: isMobile ? '100%' : 'auto',
        marginTop: isMobile ? '85px' : 'auto'
      },
      h1: {
        color: '#fff',
        fontWeight: 400,
      },
      h4: {
        color: '#9ac7fa',
        fontWeight: 400,
      },
      minutes: {
        display: 'inline-block',
        marginTop: 10,
        color: '#fff',
        padding: 5,
        borderRadius: 5,
        border: '1px solid rgba(255, 255, 255, 0.13)',
      },
      rating: {
        display: 'inline-block',
        marginTop: 10,
        marginLeft: 10,
        fontWeight: 'bold',
      },
      type: {
        display: 'inline-block',
        color: '#cee4fd',
        marginLeft: 10,
      },
      locandina: {
        position: 'relative',
        float: 'left',
        marginRight: 20,
        height: 120,
        boxShadow: '0 0 20px -10px rgba(0, 0, 0, 0.5)',
      },
      movie_desc: {
        padding: 25,
        height: isMobile ? 'inherit' : '50%',
        width: isMobile ? '100%' : 'inherit'
      },
      text: {
        color: '#cfd6e1',
      },
      movie_social: {
        height: '10%',
        paddingLeft: 15,
        paddingBottom: 20,
      },
      ul: {
        listStyle: 'none',
        padding: 0,
      },
      li: {
        display: 'inline-block',
        color: 'rgba(255, 255, 255, 0.4)',
        transition: 'color 0.3s',
        transitionDelay: '0.15s',
        margin: '0 10px',
      },
      i: {
        fontSize: 19,
        cursor: 'pointer',
      },
      blur_back: {
        position: 'absolute',
        top: 0,
        zIndex: 1,
        height: '100%',
        right: 0,
        backgroundSize: 'cover',
        borderRadius: 11,
        width: isMobile ? '100%' : '80%',
        backgroundPosition: isMobile ? '50% 50%' : '-100% 10%'
      },
    })
  }

  useEffect(() => {
    updateResponsiveStyles();
    window.addEventListener('resize', updateResponsiveStyles);

    return () => {
      window.removeEventListener('resize', updateResponsiveStyles);
    };
  }, []);

  return (
    <div style={styles.movie_card} id="bright">
      <div style={styles.info_section}>
        <div style={styles.movie_header}>
          <img style={styles.locandina} src={movie.imageUrl} />
          <h1 style={styles.h1}>{movie.title}</h1>
          <h4 style={styles.h4}>
            {movie.year}, {movie.director}
          </h4>
          <span style={styles.minutes}>{
            movie.lengthMinutes} min</span>
          <span
            style={{
              ...styles.rating,
              color: ratingColor[rating],
            }}
          >
            {rating}
          </span>
          <p style={styles.type}>
            {movie.genres?.map((g) => g)}
          </p>
        </div>
        <div style={styles.movie_desc}>
          <p style={styles.text}>{movie.description}</p>
        </div>
        <div style={styles.movie_social}>
          <ul style={styles.ul}>
            <li style={styles.li}>
              <i style={styles.i} className="material-icons">
                share
              </i>
            </li>
            <li style={styles.li}>
              <i style={styles.i} className="material-icons">
                
              </i>
            </li>
            <li style={styles.li}>
              <i style={styles.i} className="material-icons">
                chat_bubble
              </i>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          ...styles.blur_back,
          backgroundImage: `url("${movie.imageBackground}")`,
        }}
      ></div>
    </div>
  );
}

export default MoviePoster;