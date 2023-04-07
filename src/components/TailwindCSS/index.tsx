import React from 'react';
import './moviePosterStyles.css';

function MoviePoster({ movie, rating }) {
  const ratingColor = {
    R: 'text-red-600',
    G: 'text-green-600',
    PG: 'text-yellow-600',
    'PG-13': 'text-purple-600',
    'NC-17': 'text-blue-600',
  };

  return (
    <div className={`relative block w-800 h-350 mx-auto overflow-hidden rounded-lg transition-all transform hover:scale-105 movie-card`}>
      <div className="relative w-full h-full bg-black bg-opacity-50 z-10 rounded-lg info-section">
        <div className="relative p-6 h-40 movie-header">
          <img className="relative float-left mr-5 h-24 shadow-md rounded locandina" src={movie.imageUrl} alt={movie.title} />
          <h1 className="text-white font-normal">{movie.title}</h1>
          <h4 className="text-blue-300 font-normal">{movie.year}, {movie.director}</h4>
          <span className="inline-block mt-2 text-white px-2 py-1 rounded-sm border border-white border-opacity-25 minutes">{movie.lengthMinutes} min</span>
          <span className={`inline-block mt-2 text-white ml-2 font-bold ${ratingColor[rating]} rating`}>{rating}</span>
          <p className="inline-block text-blue-200 ml-2 type">{movie.genres?.map((g) => `${g},`)}</p>
        </div>
        <div className="p-6 h-50 movie_desc">
          <p className="text-gray-200 text">{movie.description}</p>
        </div>
        <div className="h-10 pl-4 pb-5 movie_social">
          <ul className="list-none p-0">
            <li className="inline-block text-white text-opacity-40 transition-colors duration-300 hover:text-opacity-80 mx-2">
              <i className="material-icons">share</i>
            </li>
            <li className="inline-block text-white text-opacity-40 transition-colors duration-300 hover:text-opacity-80 mx-2">
              <i className="material-icons"></i>
            </li>
            <li className="inline-block text-white text-opacity-40 transition-colors duration-300 hover:text-opacity-80 mx-2">
              <i className="material-icons">chat_bubble</i>
            </li>
          </ul>
        </div>
      </div>
      <div className={`absolute top-0 right-0 h-full w-full bg-cover blur_back movie-card-bg`} style={{ backgroundImage: `url(${movie.imageBackground})` }}></div>
    </div>
  );
}

export default MoviePoster;
