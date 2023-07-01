import React from "react";
import Wrapper from "../style/MovieCardStyle";
import { Link } from "react-router-dom";

function MovieCard({ name, releaseDate, rating, id }) {
  return (
    <Wrapper>
      <Link to={`/movie/${id}`}>
        <div className="title">
          <h1>Title: {name}</h1>
        </div>
        <div className="rating">
          <p>Rating: {rating}</p>
        </div>
        <div className="releaseDate">
          <p>Release Date: {releaseDate.split("T")[0]}</p>
        </div>
      </Link>
    </Wrapper>
  );
}

export default MovieCard;
