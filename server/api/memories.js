const router = require('express').Router();
const { Memory } = require('../db/models');

module.exports = router;

router.get('/', (req, res, next) => {
  Memory.findAll()
    .then(memories => res.json(memories))
    .catch(next);
});

router.post('/', (req, res, next) => {
  Memory.create(req.body)
    .then(createdMemory => res.json(createdMemory))
    .catch(next);
});

router.put('/:memoryId', (req, res, next) => {
  Memory.update({ where: { id: req.params.memoryId } }, req.body)
    .then(updatedMemory => res.json(updatedMemory))
    .catch(next);
});
