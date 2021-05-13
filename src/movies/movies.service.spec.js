const moviesService = require('./movies.service');

const mockedMovies = {
  movies: [
    {
      id: 2,
      title: 'Beetlejuice',
      runtime: '92',
      genres: [
        'Comedy',
        'Fantasy'
      ]
    },
    {
      id: 1,
      title: 'Test 2',
      runtime: '85',
      genres: [
        'Comedy',
        'Fantasy',
        'Action'
      ]
    }
  ]
};

describe('Movies service', () => {
  it('SHOULD getMovies will return filtered data WHEN we pass duration', () => {
    const getMovies = moviesService.getMovies(mockedMovies, 100, null);

    expect(getMovies).toEqual([mockedMovies.movies[0]]);
  });

  it('SHOULD getMovies will return filtered data WHEN we pass genres', () => {
    const getMovies = moviesService.getMovies(mockedMovies, null, 'Action');

    expect(getMovies).toEqual([mockedMovies.movies[1]]);
  });

  it('SHOULD getMovies will return random movie WHEN we didnt pass values ', () => {
    const getMovies = moviesService.getMovies(mockedMovies, null, null);

    expect(getMovies.id).toBeLessThanOrEqual(2);
  });
});
