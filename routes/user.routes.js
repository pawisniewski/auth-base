const express = require('express');
const router = express.Router();

const isLogged = (req, res, next) => {
  if(!req.user){
    res.redirect('/user/no-permission');
  } else {
    next();
  }
};

router.get('/logged', isLogged, (req, res) => {
  const { displayName, photos} = req.user;
  res.render('logged', { name: displayName, avatar: photos[0].value});
});

router.get('/profile', isLogged, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', isLogged, (req, res) => {
  res.render('settings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;
