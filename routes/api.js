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

// Note for querying data. Use JSON?$filter=col condition
// https://data.cityofnewyork.us/resource/erm2-nwe9.json?$where=created_date%20%3E%20%272021-08-20T12:00:00%27
// note all the percent numbers before date seem to be translated for '>'

module.exports = router;