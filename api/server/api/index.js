const router = require('express').Router();

module.exports = router;

//  heroku.com/api/users
router.use('/users', require('./users'));

//  heroku.com/api/memories
router.use('/memories', require('./memories'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
