const router = require('express').Router();

router.use('/users', require('./routes/users'));

router.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

module.exports = router;