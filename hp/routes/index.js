var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item  = mongoose.model('Item');

/* GET home page. */
router.get('/', function(req, res, next) {
  Item.find().sort("position").exec( function ( err, items, count ){
    res.render('index', {
      title: 'delta web design',
      items: items,
      enterstate: 'intro'
    });
  });
});

router.get('/home', function(req, res, next) {
  Item.find().sort("position").exec( function ( err, items, count ){
    res.render('index', {
      title: 'delta web design',
      items: items,
      enterstate: 'no-intro'
    });
  });
});

router.post('/show_item', function(req, res, next) {
  Item.findById(req.body.id, function(err, item) {
    res.send(item);
  })
})

module.exports = router;
