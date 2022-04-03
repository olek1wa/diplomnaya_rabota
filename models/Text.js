const {Schema, model,Types} = require('mongoose')

const schema = new Schema({
  state:{type:String, default:'1'},
  text: {type:String},
  key: {type:String},

})

module.exports = model('Text', schema)
