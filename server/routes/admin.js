var express = require('express');
var router = express.Router();
var ItemsModel = require('../models/ItemsModel')

var path = require('path');
var uploadDir = path.join(__dirname, '../photos');
var fs = require('fs');


var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, callback) { //이미지가 저장되는 도착지 지정
    callback(null, uploadDir);
  },
  filename: function (req, file, callback) { // products-날짜.jpg(png) 저장 
    callback(null, 'no-' + Date.now() + '.' + file.mimetype.split('/')[1]);
  }
});
var upload = multer({ storage: storage });



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
router.post('/item', upload.single('pt'), function (req,res) {
  var item = new ItemsModel({
    pt: (req.pt) ? req.pt.filename : "",
    title: req.body.title,
    description: req.body.description
  });
  item.save(function (err) {
    (err) ? console.log(err) : res.json(item)
  });
})

// 내용삭제
router.delete('/item/:id', function (req, res) {
  ItemsModel.remove({ id: req.params.id }, function (err) {
    console.log(err)
    res.send("success")
  })
})

module.exports = router;