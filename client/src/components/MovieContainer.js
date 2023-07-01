import React, { useEffect, useState } from "react";
import axios from "axios";
import BASE_URL from "../utils/baseURL";
import MovieCard from "./MovieCard";
import Wrapper from "../style/MovieContainerStyle";
import Loading from "./Loading";

function MovieContainer() {
  // State
  const [movieList, setMovieList] = useState([]);
  const [loading, setLoading] = useState(true);
  // Side Effect -> Fetching Movies
  useEffect(() => {
    fetchMovies();
  }, []);
  async function fetchMovies() {
    try {
      const { data } = await axios.get(`${BASE_URL}/`);
      setMovieList(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  if (loading) return <Loading />;
  return (
    <Wrapper>
      <div className="heading">
        <h1>Movies</h1>
      </div>
      <div className="body">
        {movieList &&
          movieList.map((movie, index) => (
            <div key={index}>
              <MovieCard {...movie} />
            </div>
          ))}
      </div>
    </Wrapper>
  );
}

export default MovieContainer;
