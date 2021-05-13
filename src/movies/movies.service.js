const fs = require('fs');
const path = require('path');
const utils = require('./utils/movies.utils');

function getAllMovies () {
  try {
    return JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../data/db.json'), { encoding: 'utf8', flag: 'r' }));
  } catch (err) {
    throw new Error(err.message);
  }
}

function getMovies (listOfMovies, duration, genres) {
  let { movies } = listOfMovies;

  if (!genres && duration) {
    movies = movies.filter((movie) => utils.isBetweenDurationRange(movie, +duration));
  }

  if (genres && !duration) {
    movies = movies.filter((movie) => utils.hasOneOfSpecificGenres(movie, genres));
  }

  if (!genres && !duration) {
    movies = movies[utils.randomMovie(movies)];
  }

  if (genres && duration) {
    movies = movies.filter((movie) => (utils.isBetweenDurationRange(movie, +duration) && utils.hasOneOfSpecificGenres(movie, genres)));
  }

  return movies;
}

module.exports = {
  getMovies,
  getAllMovies
};
