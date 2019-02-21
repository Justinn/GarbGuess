const router = require('express').Router();
const { Item } = require('../../db');

router.get('/', async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await Item.findOne({
      where: { id: id },
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
