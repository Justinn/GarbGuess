const router = require('express').Router();
const { User } = require('../../db');

router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.send(allUsers);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
