const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardSchema = new Schema({
  uid: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt:{
    type:Date,
    default:Date.now()
  },
});


const Card = mongoose.model('Card',CardSchema)

module.exports = Card