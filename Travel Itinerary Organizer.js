function processData(input) {
    // Parsing the input
    const data = JSON.parse(input);
    const cities = data.cities;
    const days = data.days;

    // Function to organize the itinerary
    function organizeItinerary(cities, days) {
        const cityDays = {};
        
        // Iterate over the cities and accumulate the days for each city
        for (let i = 0; i < cities.length; i++) {
            const city = cities[i];
            const day = days[i];
            
            // If the city is already in the dictionary, add the days to its total
            if (cityDays.hasOwnProperty(city)) {
                cityDays[city] += day;
            } else {
                cityDays[city] = day;
            }
        }
        
        // Convert the dictionary to the desired output format
        const result = [];
        for (const city in cityDays) {
            result.push(`${city}: ${cityDays[city]}`);
        }
        
        return result;
    }

    // Output the result in the expected format
    console.log(`[\n  "${organizeItinerary(cities, days).join('",\n  "')}\"\n]`);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
