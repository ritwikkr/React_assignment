import React, { useEffect, useState } from "react";
import Wrapper from "../style/MoviePageStyle";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import BASE_URL from "../utils/baseURL";
import Loading from "../components/Loading";

function MoviePage() {
  // State
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  // Side Effect -> Fetching Single Movie
  useEffect(() => {
    fetchSingleMovie();
  }, []);

  async function fetchSingleMovie() {
    try {
      const { data } = await axios.get(`${BASE_URL}/${id}`);
      setMovie(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) return <Loading />;
  // console.log(movie);
  return (
    <Wrapper>
      <div className="content">
        <Link to={"/"}>
          <div className="home">Back</div>
        </Link>
        <div className="title">
          <h1>Title: {movie.name}</h1>
        </div>
        <div className="rating">
          <p>Rating: {movie.rating}</p>
        </div>
        <div className="release-date">
          <p>Release Date: {movie.releaseDate.split("T")[0]}</p>
        </div>
      </div>
    </Wrapper>
  );
}

export default MoviePage;
