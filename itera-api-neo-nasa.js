//Itera o json da api da NASA e retorna todos os NEOs

var output = [];

var jsonData = JSON.parse(value).near_earth_objects;

for (var obj in jsonData) {
    
    jsonData[obj].forEach(function(neo) {

        output.push({
            '{#NEO.ID}': neo.id,
            '{#NEO.NEO_REFERENCE_ID}': neo.neo_reference_id,
            '{#NEO.NAME}': neo.name,
            '{#NEO.NASA_JPL_URL}': neo.nasa_jpl_url,
            '{#NEO.ABSOLUTE_MAGNITUDE_H}': neo.absolute_magnitude_h,
            '{#NEO.ESTIMATED_DIAMETER.METERS.ESTIMATED_DIAMETER_MIN}': neo.estimated_diameter.meters.estimated_diameter_min,
            '{#NEO.ESTIMATED_DIAMETER.METERS.ESTIMATED_DIAMETER_MAX}': neo.estimated_diameter.meters.estimated_diameter_max,
            '{#NEO.IS_POTENTIALLY_HAZARDOUS_ASTEROID}': neo.is_potentially_hazardous_asteroid,
            '{#NEO.CLOSE_APPROACH_DATA.CLOSE_APPROACH_DATE}': neo.close_approach_data.close_approach_date,
            '{#NEO.CLOSE_APPROACH_DATE.CLOSE_APPROACH_DATE_FULL}': neo.close_approach_date[0].close_approach_date_full,
            '{#NEO.CLOSE_APPROACH_DATE.RELATIVE_VELOCITY.KILOMETERS_PER_SECOND}': neo.close_approach_date.relative_velocity.kilometers_per_second,
            '{#NEO.MISS_DISTANCE.ASTRONOMICAL}': neo.miss_distance.astronomical,
            '{#NEO.MISS_DISTANCE.LUNAR}': neo.miss_distance.lunar,
            '{#NEO.MISS_DISTANCE.KILOMETERS}': neo.miss_distance.kilometers,
            '{#NEO.ORBITING_BODY}': neo.orbiting_body
        });
    
    });

}

return JSON.stringify(output);
