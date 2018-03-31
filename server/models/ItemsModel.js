var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');

var ItemsSchema = new Schema({
  pt: String, //사진 URL
  title: {
    type: String,
    required: [true, 'Title이 입력되지 않았음']
  },
  description: String, //설명
  created_at: { //작성일
    type: Date,
    default: Date.now()
  }
});

ItemsSchema.plugin(autoIncrement.plugin, { model: 'items', field: 'id', startAt: 1 });
module.exports = mongoose.model('items', ItemsSchema);