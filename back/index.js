const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();

const { Offer } = require("./models");


// database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        console.log("Connected to MongoDB!")
    } catch(e) {
        console.error("Could not connect to MongoDB...", e)
    }
};

connect();

// get data
app.get("/api/offersPreviews", async (req, res) => {
    const offers = await Offer.find().populate('processor').populate('graphics');
    const offersPreviews = offers.map(offer => {
        return { id: offer._id, processor: offer.processor.name, graphics: offer.graphics.Bus, price: offer.price, loc: offer.loc}
    })
    res.status(200).json(offersPreviews);
});

app.get("/api/offers", async (req, res) => {
    const offer = await Offer.find().populate('processor').populate('graphics')
    res.status(200).json(offer);
});

app.get("/api/offers/:id", async (req, res) => {
    const offer = await Offer.findById(req.params.id).populate('processor').populate('graphics')
    res.status(200).json(offer);
});

//PORT listening
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`app listening on port ${PORT}...`));