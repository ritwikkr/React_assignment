import express from "express";
import { getMovies, getSingleMovie } from "../controller/movieController.js";

const router = express.Router();

router.route("/").get(getMovies);
router.route("/:id").get(getSingleMovie);

export default router;
