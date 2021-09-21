const pointInPolygon = require('@turf/boolean-point-in-polygon').default;
const axios = require('axios');

const testTurf = async () => {
    try {
        let { data }  = await axios.get('https://data.cityofnewyork.us/resource/q2z5-ai38.json?$limit=1');
        const mapData = data;
        console.log(mapData);
    } catch (err) {
        console.error(err);
    }
}

testTurf();