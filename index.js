const express = require('express');
const app = express();
// const axios = require('axios');


app.use(express.json());

const apiRouter = require('./routes/api');

app.use('/api', apiRouter);

// app.get('/', async (req, res, next) => {
//     try {
//         const {data} = await axios.get("https://data.cityofnewyork.us/resource/q2z5-ai38.json");
//         res.json(data);
//     } catch (error) {
//         console.error(error)
//     }
//     // res.send('this is just a test');
//     // res.download('server.js'); reference for downloading in the future
// })

app.listen(3000);