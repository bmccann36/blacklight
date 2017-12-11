const router = require('express').Router();
const { Memory, User } = require('../db/models');

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
    .then(foundMemory => {
      if (!foundMemory) res.status(404).send('memory not found');
      else res.json(foundMemory);
    })
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

//  heroku.com/api/memories/:memoryId/memory-viewers/
router.get('/:memoryId/memory-viewers/', (req, res, next) => {
  Memory.findById(req.params.memoryId)
    .then(foundMemory => foundMemory.getViewers())
    .then(viewers => res.json(viewers))
    .catch(next);
});

//  we could easily change this to take the userId from req.body instead.
//  heroku.com/api/memories/:memoryId/memory-viewers/:userId
router.post('/:memoryId/memory-viewers/:userId', (req, res, next) => {
  const memoryPromise = Memory.findById(req.params.memoryId).catch(next);
  const userPromise = User.findById(req.params.userId).catch(next);

  Promise.all([memoryPromise, userPromise])
    .then(([memoryToView, viewerUser]) => {
      memoryToView.addViewer(viewerUser)
        .then(() => memoryToView.getViewers())
        .then(viewers => res.json(viewers))
        .catch(next);
    })
    .catch(next);
});
