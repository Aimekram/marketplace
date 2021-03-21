const express = require('express');
const router = express.Router();

const { Offer } = require('../models');

router.get('/', async (req, res) => {
	const offers = await Offer.find()
		.populate('processor')
		.populate('graphics');
	res.status(200).json(offers);
});

router.get('/:id', async (req, res) => {
	const offer = await Offer.findById(req.params.id)
		.populate('processor')
		.populate('graphics');
	res.status(200).json(offer);
});

module.exports = router;
