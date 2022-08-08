const express = require("express")
const fetch = require("node-fetch")
const cors = require("cors")
const app = express()
app.use(cors())

app.get("/", async (req, res) => {
    const options = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.query.q}&location=37.76999%2C-122.44696&radius=500&types=(cities)&key=AIzaSyDOxK78OfsE0Ow3ikKFYnQmYuYbGN3bR9A`
    );
    const data = await options.json();

    res.send(data.predictions.map(prediction => prediction.structured_formatting.main_text))
})

app.listen(3333)