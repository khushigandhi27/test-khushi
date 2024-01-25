const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const httpStatus = require('http-status');

//const { GENERAL_ERROR } = require('./src/constants/error-constants');

const dreamRoute = require('./src/routes/index');
const ApiError = require('./utils/ApiError');
const { errorConverter,errorHandler } = require('./utils/error-handler');
const { initializeFirebaseApp } = require('./src/controllers/lib/firebase');

const app = express();
const PORT = 5500;

// httpProxy.createProxyServer({target: 'http://localhost:5000'}).listen(PORT);

// const server = http.createServer(app);
app.use(helmet());

app.use(compression());

app.use(cors());

app.use(express.json());

app.get('/initialize-firebase', (req, res) => {
  initializeFirebaseApp(req, res);
});

// to handle URL-encoded form data sent in POST requests
app.use(express.urlencoded({ extended: false }));

app.use('/v1/dream', dreamRoute);

// send back a 404 error for any unknown api request
app.use((_, __, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, GENERAL_ERROR.NOT_FOUND));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

app.use(bodyParser.json());

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on PORT ${PORT}`);
});
// app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))
