//Itera o json da api da NASA e retorna todos os NEOs

var output = [];
var jsonData = JSON.parse(value).near_earth_objects;

for (var o in jsonData) { 
    jsonData[o].forEach(function(neo) { 
        output.push({ 
            '{#NEO.ID}' : neo.id,
            '{#NEO.NAME}' : neo.name,
            '{#NEO.NEO_REFERENCE_ID}': neo.neo_reference_id,
            '{#NEO.NASA_JPL_URL}': neo.nasa_jpl_url,
            '{#NEO.ABSOLUTE_MAGNITUDE_H}': neo.absolute_magnitude_h,
            '{#NEO.ESTIMATED_DIAMETER_MIN}': neo.estimated_diameter.meters.estimated_diameter_min,
            '{#NEO.ESTIMATED_DIAMETER_MAX}': neo.estimated_diameter.meters.estimated_diameter_max,
            '{#NEO.IS_POTENTIALLY_HAZARDOUS_ASTEROID}': neo.is_potentially_hazardous_asteroid,
            '{#NEO.CLOSE_APPROACH_DATE}': neo.close_approach_data[0].close_approach_date,
            '{#NEO.EPOCH_DATE_CLOSE_APPROACH}': neo.close_approach_data[0].epoch_date_close_approach,
            '{#NEO.MISS_DISTANCE}': neo.close_approach_data[0].miss_distance.kilometers,
            '{#NEO.ORBITING_BODY}': neo.close_approach_data[0].orbiting_body,
            '{#NEO.IS_SENTRY_OBJECT}': neo.is_sentry_object
        }); 
    }); 
}

return JSON.stringify(output);
