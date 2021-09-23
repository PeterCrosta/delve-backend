const express = require('express');
const app = express();
// const cors = require('cors');

// app.use(cors({
//     origin: '*',
//     meathods: ['GET'],
//     credentials: true
// }))

app.use(express.json());

const apiRouter = require('./routes/api');

app.use('/api', apiRouter);

app.listen(3001);

