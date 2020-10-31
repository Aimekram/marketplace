const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adSchema = new Schema({
    processor: { type: Schema.Types.ObjectId, ref: 'Processor' },
    graphics: { type: Schema.Types.ObjectId, ref: 'Graphics' },
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
  
  const Ad = mongoose.model('Ad', adSchema);
  
  module.exports = Ad;