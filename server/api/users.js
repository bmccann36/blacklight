const router = require('express').Router();
const { User, Memory } = require('../db/models');

module.exports = router;

//  heroku.com/api/users/
router.get('/', (req, res, next) => {
  // if (req.body.user.isAdmin) {
    console.log(req)
    User.findAll({ attributes: ['id', 'email'] })
      .then(users => res.json(users))
      .catch(next);
  // } else {
    // res.json('Only administrators can access this.');
  // }
});

// Probably just need to delete this route. It should only be accessed from /auth
// router.post('/', (req, res, next) => {
//   User.create(req.body)
//     .then(createdUser => res.json(createdUser))
//     .catch(next);
// });

router.get('/:userId', (req, res, next) => {
  if (req.body.user.isAdmin || req.body.user.id == req.params.userId) {
    User.findById(req.params.userId)
      .then(foundUser => res.json(foundUser))
      .catch(next);
  } else {
    res.json('Only administrators can access this.');
  }
});

router.put('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(userToUpdate => userToUpdate.update(req.body))
    .then(updatedUser => res.json(updatedUser))
    .catch(next);
});

router.delete('/:userId', (req, res, next) => {
  User.findById(req.params.userId)
    .then(userToDelete => userToDelete.destroy())
    .then(() => res.json('user has been deleted'))
    .catch(next);
});

router.get('/:userId/authored-memories/', (req, res, next) => {
  User.findById(req.params.userId)
    .then(author => Memory.findAll({ where: { authorId: author.id } }))
    .then(authoredMemories => res.json(authoredMemories))
    .catch(next);
});

//  heroku.com/api/users/:userId/viewed-memories/
router.get('/:userId/viewed-memories/', (req, res, next) => {
  User.findById(req.params.userId)
    .then(viewerUser => viewerUser.getViewedMemories())
    .then(viewedMemories => res.json(viewedMemories))
    .catch(next);
});

//  we could easily change this to take the memoryId from req.body instead.
//    and then we could make the route "/api/users/:userId/viewed-memories/"
//  heroku.com/api/users/:userId/viewed-memories/:memoryId
router.post('/:userId/viewed-memories/:memoryId', (req, res, next) => {
  const userPromise = User.findById(req.params.userId).catch(next);
  const memoryPromise = Memory.findById(req.params.memoryId).catch(next);

  Promise.all([userPromise, memoryPromise])
    .then(([viewerUser, memoryToView]) => {
      viewerUser.addViewedMemory(memoryToView)
        .then(() => viewerUser.getViewedMemories())
        .then(viewedMemories => res.json(viewedMemories))
        .catch(next);
    })
    .catch(next);
});
