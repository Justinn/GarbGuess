const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

// logging middleware
app.use(morgan('dev'));

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//For our API
app.use('/api', require('./api'));

//For our assets
app.use(express.static(path.join(__dirname, '..', 'public')));

//Everything's OK
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public/index.html'));
});

//Something went wrong if we got to here
app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

//Start listening
app.listen(8080, () => console.log(`Server listening on port 8080`));