const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

//For our API
app.use('/api', require('./api'));

//For our assets
app.use(express.static(path.join(__dirname, '..', 'public')));

//404 Error handling
app.use((req, res, next) => {
  if (path.extname(req.path).length) {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
  } else {
    next();
  }
});

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
