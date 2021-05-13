const moviesUtils = require('./movies.utils');

describe('Movies utils', () => {
  const mockMovie = {
    id: 59,
    title: 'Madagascar: Escape 2 Africa',
    year: '2008',
    runtime: '89',
    genres: [
      'Animation',
      'Action',
      'Adventure'
    ],
    director: 'Eric Darnell, Tom McGrath',
    actors: 'Ben Stiller, Chris Rock, David Schwimmer, Jada Pinkett Smith',
    plot: 'The animals try to fly back to New York City, but crash-land on an African wildlife refuge, where Alex is reunited with his parents.',
    posterUrl: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjExMDA4NDcwMl5BMl5BanBnXkFtZTcwODAxNTQ3MQ@@._V1_SX300.jpg'
  };

  describe('Duration Filter', () => {
    it('SHOULD filter will return true WHEN duration is in range', () => {
      const isBetweenDurationRange = moviesUtils.isBetweenDurationRange(mockMovie, 90);

      expect(isBetweenDurationRange).toBeTruthy();
    });

    it('SHOULD filter will return false WHEN duration is not in range', () => {
      const isBetweenDurationRange = moviesUtils.isBetweenDurationRange(mockMovie, 120);

      expect(isBetweenDurationRange).toBeFalsy();
    });
  });

  describe('Genres Filter', () => {
    it('SHOULD filter will return true WHEN genre is correct', () => {
      const hasOneOfSpecificGenres = moviesUtils.hasOneOfSpecificGenres(mockMovie, 'Animation');

      expect(hasOneOfSpecificGenres).toBeTruthy();
    });

    it('SHOULD filter will return true WHEN genre is not correct', () => {
      const hasOneOfSpecificGenres = moviesUtils.hasOneOfSpecificGenres(mockMovie, 'Comedy');

      expect(hasOneOfSpecificGenres).toBeFalsy();
    });
  });

  describe('Random Number', () => {
    it('SHOULD filter will return true WHEN number is in range', () => {
      const mockmovies = ['movies1', 'movies2', 'movies3'];
      const randomMovie = moviesUtils.randomMovie(mockmovies);
      expect(randomMovie).toBeLessThanOrEqual(2);
    });

    it('SHOULD filter will return false WHEN number is not in range', () => {
      const mockmovies = ['movies1', 'movies2', 'movies3'];
      const randomMovie = moviesUtils.randomMovie(mockmovies);
      expect(randomMovie).not.toBeGreaterThanOrEqual(3);
    });
  });
});
