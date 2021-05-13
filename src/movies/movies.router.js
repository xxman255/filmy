const routes = require('express').Router();
const moviesService = require('./movies.service');

/**
 * @swagger
 * /movies:
 *  get:
 *    summary: Returns list of movies
 *    tags:
 *      - Movies
 *    parameters:
 *      - in: query
 *        name: genres
 *        required: false
 *        schema:
 *          type: string
 *      - in: query
 *        name: duration
 *        required: false
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: List of the movies
 *      500:
 *        description: Internal server error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                stack:
 *                  type: string
 */

routes.get('/', (req, res) => {
  const moviesDb = moviesService.getAllMovies();
  res.json(moviesService.getMovies(moviesDb, req.query.duration, req.query.genres));
});

routes.post('/', (req, res) => {
  res.send('POST');
});

module.exports = routes;
