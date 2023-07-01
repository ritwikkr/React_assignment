import movieData from "../data/movies.js";

// GET: Fetch all movies from data > movies.js
async function getMovies(req, res) {
  try {
    res.status(200).json(movieData);
  } catch (error) {
    res.status(400).json(error);
  }
}

// GET: Fetch single movie from given parameters from data > movies.js
async function getSingleMovie(req, res) {
  try {
    const { id } = req.params;
    const data = movieData.find((item) => item.id == id);
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
}

export { getMovies, getSingleMovie };
