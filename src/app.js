const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const helloRoute = require('./routes/hello');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(cookieParser());

app.use(helloRoute);
app.use(userRoute);
app.use(authRoute);

module.exports = app;