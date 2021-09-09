const express  = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        const {data} = await axios.get("https://data.cityofnewyork.us/resource/q2z5-ai38.json");
        res.json(data);
    } catch (error) {
        console.error(error)
    }
    // res.send('this is just a test');
    // res.download('server.js'); reference for downloading in the future
})

module.exports = router;