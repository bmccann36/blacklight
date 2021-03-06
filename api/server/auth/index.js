const router = require('express').Router();
const User = require('../db/models/user');
const chalk = require('chalk')


module.exports = router;

router.post('/login', (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (!user) {
        res.status(401).send('User not found');
      } else if (!user.correctPassword(req.body.password)) {
        res.status(401).send('Incorrect password');
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)));
      }
    })
    .catch(next);
});

router.post('/signup', (req, res, next) => {

  User.create(req.body)
    .then((user) => {
      req.login(user, err => (err ? next(err) : res.json(user)));
    })
    .catch((err) => {
      console.log(chalk.magenta(err))
      if (err.errors[0].message === 'user.email cannot be null'){
        res.status(400).send('email is required')
      }
      else if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(401).send('User already exists');
      }
      else if (err.errors[0].message === 'user.password cannot be null'){
        res.status(400).send('password is required')
      }
      else {
        next(err);
      }
    });
});

router.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.get('/me', (req, res) => {
  res.json(req.user);
});

router.use('/google', require('./google'));
