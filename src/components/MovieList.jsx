import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const MovieCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  width: 200px;
  text-align: center;
`;

const MovieImage = styled.img`
  width: 100%;
  border-radius: 10px;
  height: 250px;
`;

const MovieTitle = styled.h4`
  color: white;
`;

const MovieYear = styled.p`
  color: white;
  font-weight: 200;
`;

const MovieList = ({ movies }) => {
  return (
    <ListContainer>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID}>
          <MovieImage src={movie.Poster} alt={movie.Title} width="100" />
          <MovieTitle>{movie.Title}</MovieTitle>
          <MovieYear>{movie.Year}</MovieYear>
        </MovieCard>
      ))}
    </ListContainer>
  );
};

export default MovieList;
