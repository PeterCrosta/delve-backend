const { Int32 } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const neighborhoodSchema = new Schema({
    geom: {
        geomType: String,
        coordinates: Array,
        required: true
    },
    countyFips: {
        type: String,
        required: true
    },
    boroCode: {
        type: String,
        required: true
    },
    ntacode: {
        type: String,
        required: true
    },
    ntaname: {
        type: String,
        required: true
    },
    shapeLength: {
        type: String,
        require: true
    }, 
    shapeArea: {
        type: String,
        required: true
    },
    crime: {
        type: Number
    }
})
