const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const processorSchema = new Schema({
    name: {
        type: String,
        minlength: 2,
        maxlength: 256,
        required: true
    },
    cores: {
        type: Number,
        length: 1,
        required: true
    },
    threads: {
        type: Number,
        minlength: 1,
        maxlength: 3,
        required: true
    },
    base_clock: {
        type: Number,
        minLength: 1,
        maxLength: 5,
        required: true
    },
    process: {
        type: String,
        minLength: 1,
        maxLength: 10,
        required: true
    },
    l3_cache: {
        type: String,
        minLength: 1,
        maxLength: 10,
        required: true
    }, 
    tdp: {
        type: String,
        minLength: 1,
        maxLength: 10,
        required: true
    }, 
  });
  
  const Processor = mongoose.model('Processor', processorSchema);
  
  module.exports = Processor;