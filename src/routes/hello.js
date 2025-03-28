const express = require('express');
const helloController = require('../controllers/helloController');
const authentication = require('../middlewares/authMiddleware');

const route = express.Router();

route.get('/', authentication, helloController);

module.exports = route;