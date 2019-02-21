const router = require('express').Router();
const { User, Item } = require('../../db');

router.get('/', async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.send(allUsers);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    const user = await User.findOne({
      where: { id: id },
      include: [Item],
    });
    res.send(user)
  } catch (error) {
    next(error);
  }
})

module.exports = router;
