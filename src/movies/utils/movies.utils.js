function isBetweenDurationRange (movie, duration) {
  return (movie.runtime >= (duration - 10) && movie.runtime <= (duration + 10));
}

function hasOneOfSpecificGenres (movie, genres) {
  return movie.genres.some((genre) => genres.includes(genre));
}

function randomMovie (movies) {
  return Math.floor(Math.random() * (movies.length));
}

module.exports = {
  isBetweenDurationRange,
  hasOneOfSpecificGenres,
  randomMovie
};
