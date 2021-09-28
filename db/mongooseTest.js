const { dbUri } = require('../secrets');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose')

mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('connected to db')
})
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