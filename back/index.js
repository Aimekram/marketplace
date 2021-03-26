const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();

const users = require('./routes/users');
const authentication = require('./routes/authentication');
const offers = require('./routes/offers');
const offersPreviews = require('./routes/offersPreviews');

//set up body parser to read request's body
app.use(express.json());

// database connection
const connect = async () => {
	try {
		await mongoose.connect(process.env.DB_CONNECTION, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		});
		console.log('Connected to MongoDB!');
	} catch (e) {
		console.error('Could not connect to MongoDB...', e);
	}
};

connect();

//use routes
app.use('/api/users', users);
app.use('/api/authentication', authentication);
app.use('/api/offers', offers);
app.use('/api/offersPreviews', offersPreviews);

//PORT listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`app listening on port ${PORT}...`));
