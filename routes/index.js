const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', { user: req.user });
});

module.exports = router;


const loginCheck = () => {
  return (req, res, next) => {
    console.log(req.user)
    // if the user is logged in we proceed as intended (call next())
    // if user is not logged in, we redirect to login
    if (req.user) {
      next();
    } else {
      res.redirect('/auth/login');
    }
  }
}

router.get('/dashboard', loginCheck(), (req, res, next) => {
  res.render('dashboard');
});