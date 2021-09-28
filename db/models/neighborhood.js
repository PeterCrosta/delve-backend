const mongoose = require('mongoose');
const { Schema } = mongoose;

const neighborhoodSchema = new Schema({
    geom: {
        type: Object,
        // geomType: String,
        // coordinates: Array,
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
    boroName: {
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
}, {
    timestamps: true
});

const NeighborhoodModel = mongoose.model('Neighborhood', neighborhoodSchema);

module.exports = NeighborhoodModel;