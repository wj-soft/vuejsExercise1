var express = require('express');
var router = express.Router();
var ItemsModel = require('../models/ItemsModel')

router.get('/', function (req, res) {
  res.send('admin');
});

router.post('/add', function (req,res) {
  var item = new ItemsModel({
    pt: "a",
    title: "test",
    description: "test"
  });
  item.save(function (err) {
    (err) ? console.log(err) : res.json(item)
  });
})

module.exports = router;