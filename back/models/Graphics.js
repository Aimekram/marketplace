const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const graphicsSchema = new Schema({
	Product_Name: {
		type: String,
		minlength: 2,
		maxlength: 256,
		required: true,
	},
	GPU_Chip: {
		type: String,
		minlength: 2,
		maxlength: 20,
		required: true,
	},
	Released: {
		type: String,
		minlength: 2,
		maxlength: 20,
		required: true,
	},
	Bus: {
		type: String,
		minlength: 2,
		maxlength: 20,
		required: true,
	},
	Memory: {
		type: String,
		minlength: 2,
		maxlength: 20,
		required: true,
	},
	GPU_clock: {
		type: String,
		minlength: 2,
		maxlength: 20,
		required: true,
	},
	Memory_clock: {
		type: String,
		minlength: 2,
		maxlength: 20,
		required: true,
	},
	Shaders_TMUs_ROPs: {
		type: String,
		minlength: 2,
		maxlength: 20,
		required: true,
	},
});

const Graphics = mongoose.model('Graphics', graphicsSchema);

module.exports = Graphics;
