const express = require('express');
const router = express.Router();

const { Offer } = require('../models');

router.get('/', async (req, res) => {
	const offers = await Offer.find()
		.populate('processor')
		.populate('graphics');
	const offersPreviews = offers.map((offer) => {
		return {
			id: offer._id,
			processor: offer.processor.name,
			graphics: offer.graphics.Bus,
			price: offer.price,
			loc: offer.loc,
		};
	});
	res.status(200).json(offersPreviews);
});

module.exports = router;
