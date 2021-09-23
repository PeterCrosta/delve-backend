const pointInPolygon = require('@turf/boolean-point-in-polygon').default;
const axios = require('axios');

const testTurf = async () => {
    let count = 0;
    try {
        // const { data: mapData }  = await axios.get('https://data.cityofnewyork.us/resource/q2z5-ai38.json?$limit=1');
        const { data: mapData }  = await axios.get('https://data.cityofnewyork.us/resource/q2z5-ai38.json');
        const { data: complaintData } = await axios.get("https://data.cityofnewyork.us/resource/erm2-nwe9.json?$where=created_date%20%3E%20%272021-09-18T12:00:00%27")
        // console.log(mapData[0].the_geom)
        // const pData = {
        //     "type": "Point",
        //     "coordinates" : [complaintData[0].longitude, complaintData[0].latitude]
        // }
        // mapData.forEach(neigh => {
        //     if (pointInPolygon(pData, neigh.the_geom)) {
        //         console.log('found it!')
        //     }
        // })
        complaintData.forEach(complaint => {
            const cObj = {
                'type': 'Point',
                'coordinates': [complaint.longitude, complaint.latitude]
            }
            if (pointInPolygon(cObj, mapData[0].the_geom)) {
                count++
            }
        })
        console.log(count)
        // console.log(pointInPolygon(pData, mapData[0].the_geom));
        // console.log(pData)
        // console.log(complaintData[0].longitude);
    } catch (err) {
        console.error(err);
    }
}

testTurf();