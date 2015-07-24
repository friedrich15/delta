var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item  = mongoose.model('Item');

/* GET home page. */
router.get('/', function(req, res, next) {
  Item.find().sort("position").exec( function ( err, items, count ){
    res.render('admin/index', {
      title: 'delta web design',
      items: items
    });
  });
});

router.post('/add_item', function(req, res, next) {
  console.log(req.body.name);
  new Item({
    name: req.body.name,
    visible: false
  }).save(function(err, item){
    console.log(item);
    if (err) {res.send(err)}
    else {
      res.send(item.id);
    }
  })
});

router.post('/show_item', function(req, res, next) {
  console.log(req.body.id);
  Item.findById(req.body.id, function(err, item){
    console.log(item);
    res.send(item);
  })
});

router.post('/save_item', function(req, res, next) {
  console.log(req.body.id);
  Item.findById(req.body.id, function(err, item){
    item.name = req.body.name;
    item.titleEN = req.body.titleEN;
    item.titleDE = req.body.titleDE;
    item.contentTextEN = req.body.textEN;
    item.contentTextDE = req.body.textDE;
    item.visible = req.body.visible;
    item.save(function(err, item){
      console.log(item);
      res.send(item);
    })
  });

});

module.exports = router;
