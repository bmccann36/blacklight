const router = require('express').Router();
const { Memory } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  Memory.findAll()
    .then(memories => res.json(memories))
    .catch(next);
});
