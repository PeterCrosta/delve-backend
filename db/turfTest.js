const pointInPolygon = require('@turf/boolean-point-in-polygon').default;
const axios = require('axios');

const testTurf = async () => {
    try {
        const { data: mapData }  = await axios.get('https://data.cityofnewyork.us/resource/q2z5-ai38.json?$limit=1');
        const { data: complaintData } = await axios.get("https://data.cityofnewyork.us/resource/erm2-nwe9.json?$where=created_date%20%3E%20%272021-09-18T12:00:00%27")
        console.log(complaintData);
    } catch (err) {
        console.error(err);
    }
}

testTurf();