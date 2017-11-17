const router = require('express').Router();
const { Memory } = require('../db/models');

module.exports = router;

// heroku.com/api/memories
router.get('/', (req, res, next) => {
  Memory.findAll()
    .then(memories => res.json(memories))
    .catch(next);
});

// req.body should { title: 'string', lng: Number, lat: Number, authorId: user.id }
router.post('/', (req, res, next) => {
  Memory.create(req.body)
    .then(createdMemory => res.json(createdMemory))
    .catch(next);
});

router.get('/:memoryId', (req, res, next) => {
  Memory.findById(req.params.memoryId)
    .then(foundMemory => res.json(foundMemory))
    .catch(next);
});

router.put('/:memoryId', (req, res, next) => {
  Memory.findById(req.params.memoryId)
    .then(memoryToUpdate => memoryToUpdate.update(req.body))
    .then(updatedMemory => res.json(updatedMemory))
    .catch(next);
});

router.delete('/:memoryId', (req, res, next) => {
  Memory.findById(req.params.memoryId)
    .then(memoryToDelete => memoryToDelete.destroy())
    .then(() => res.json('memory has been deleted'))
    .catch(next);
});
