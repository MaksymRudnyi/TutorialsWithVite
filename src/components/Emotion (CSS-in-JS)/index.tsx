import React from 'react';
import styled from '@emotion/styled';

const ratingColor = {
  R: '#d8121a',
  G: '#1d6835',
  PG: '#f25a24',
  'PG-13': '#803d9a',
  'NC-17': '#253d9c',
};

const MovieCard = styled.div`
  position: relative;
  display: block;
  width: 800px;
  height: 350px;
  margin: 100px auto;
  overflow: hidden;
  border-radius: 10px;
  transition: all 0.4s;
  box-shadow: 0px 0px 150px -45px rgba(255, 51, 0, 0.5);

  &:hover {
    transform: scale(1.02);
    transition: all 0.4s;
    box-shadow: 0px 0px 120px -55px rgba(255, 51, 0, 0.5);
  }

  @media screen and (max-width: 768px) {
    width: 95%;
    margin: 70px auto;
    min-height: 350px;
    height: auto;
  }
`;

const InfoSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  z-index: 2;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    background: linear-gradient(to right, #0d0d0c 50%, transparent 100%);
  }

  @media screen and (max-width: 768px) {
    background: linear-gradient(to top, #141413 50%, transparent 100%);
    display: inline-grid;
  }
`;

const MovieHeader = styled.div`
  position: relative;
  padding: 25px;
  height: 40%;

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 85px;
  }
`;

const Locandina = styled.img`
  position: relative;
  float: left;
  margin-right: 20px;
  height: 120px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.5);
`;

const MovieTitle = styled.h1`
  color: #fff;
  font-weight: 400;
`;

const MovieDetails = styled.h4`
  color: #9ac7fa;
  font-weight: 400;
`;

const Minutes = styled.span`
  display: inline-block;
  margin-top: 10px;
  color: #fff;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.13);
`;

const Rating = styled.span`
  display: inline-block;
  margin-top: 10px;
  color: ${({color}) => color};
  margin-left: 10px;
  font-weight: bold;
`;

const Type = styled.p`
  display: inline-block;
  color: #cee4fd;
  margin-left: 10px;
`;

const MovieDesc = styled.div`
  padding: 25px;
  height: 50%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Text = styled.p`
  color: #cfd6e1;
`

const MovieSocial = styled.div`
  height: 10%;
  padding-left: 15px;
  padding-bottom: 20px;
`;

const SocialList = styled.ul`
  list-style: none;
  padding: 0;
`

const SocialListItem = styled.li`
  display: inline-block;
  color: rgba(255, 255, 255, 0.4);
  transition: color 0.3s;
  transition-delay: 0.15s;
  margin: 0 10px;

  &:hover {
    transition: color 0.3s;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const SocialIcon = styled.i`
  font-size: 19px;
  cursor: pointer;
`;

const BlurBack = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  height: 100%;
  right: 0;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  border-radius: 11px;

  @media screen and (min-width: 768px) {
    width: 80%;
    background-position: -100% 10% !important;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    background-position: 50% 50% !important;
  }
`;

function MoviePoster({movie, rating}) {
  return (
    <MovieCard id="bright">
      <InfoSection>
        <MovieHeader>
          <Locandina src={movie.imageUrl}/>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDetails>
            {movie.year}, {movie.director}
          </MovieDetails>
          <Minutes>{movie.lengthMinutes} min</Minutes>
          <Rating color={ratingColor[rating]}>{rating}</Rating>
          <Type>{movie.genres?.map((g) => `${g},`)}</Type>
        </MovieHeader>
        <MovieDesc>
          <Text>{movie.description}</Text>
        </MovieDesc>
        <MovieSocial>
          <SocialList>
            <SocialListItem>
              <SocialIcon className="material-icons">share</SocialIcon>
            </SocialListItem>
            <SocialListItem>
              <SocialIcon className="material-icons"></SocialIcon>
            </SocialListItem>
            <SocialListItem>
              <SocialIcon className="material-icons">chat_bubble</SocialIcon>
            </SocialListItem>
          </SocialList>
        </MovieSocial>
      </InfoSection>
      <BlurBack imageUrl={movie.imageBackground}/>
    </MovieCard>
  );
}

export default MoviePoster;