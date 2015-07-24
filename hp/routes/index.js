var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'delta web design',
    enterstate: 'intro'
  });
});

router.get('/home', function(req, res, next) {
  res.render('index', {
    title: 'delta web design',
    enterstate: 'no-intro'
  });
});

module.exports = router;
