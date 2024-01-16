const routes = require('express').Router();
const lesson01Controller = require('../controllers/lesson01');

routes.get('/', lesson01Controller.oscarRoute);

module.exports = routes;