const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adSchema = new Schema({
    processor_id: {
      type: String,
      length: 24,
      required: true
    },
    graphics_id: {
        type: String,
        length: 24,
        required: true
      },
    price: {
      type: Number,
      minlength: 1,
      maxlength: 10,
      required: true
    },
    loc: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true
      },
    description: {
        type: String,
        minLength: 3,
        maxLength: 450,
        required: true
    }, 
  });
  
  const Ad = mongoose.model('ad', adSchema);
  
  module.exports = Ad;