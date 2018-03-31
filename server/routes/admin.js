var express = require('express');
var router = express.Router();
var ItemsModel = require('../models/ItemsModel')

router.get('/', function (req, res) {
  res.send('admin');
});

// 모든 리스트 가져오기
router.get('/items', function (req,res){
  ItemsModel.find({}, function (err, items) {
    res.json(items)
  });
})

// 내용추가
router.post('/item', function (req,res) {
  var item = new ItemsModel({
    pt: req.body.pt,
    title: req.body.title,
    description: req.body.description
  });
  item.save(function (err) {
    (err) ? console.log(err) : res.json(item)
  });
})

module.exports = router;