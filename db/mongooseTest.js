const { dbUri } = require('../secrets');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const NeighborhoodModel = require('./models/neighborhood')
const axios = require('axios')

let mapData = {}

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    app.listen(3000)
    console.log('connected to db')
})
// .then(() => {
//     mapData =  { data }  = axios.get('https://data.cityofnewyork.us/resource/q2z5-ai38.json?$limit=1');
//     // console.log(mapData)
// })
// .then(() => {
//     console.log(mapData)
// })
.catch(err => console.error(err))

// from Atlas
// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://peter_crosta:<password>@delve.ywyme.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });