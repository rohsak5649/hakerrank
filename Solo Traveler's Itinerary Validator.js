function validateItinerary(entries) {
    const cities = new Set();

    for (let entry of entries) {
        const [city, description] = entry.split(": ");

        // Check city name length
        if (city.length < 3 || city.length > 20) {
            return false;
        }

        // Check description length
        if (description.length < 10 || description.length > 300) {
            return false;
        }

        // Check unique city names
        if (cities.has(city)) {
            return false;
        }
        cities.add(city);
    }

    return true;
}

function processData(input) {
    const lines = input.trim().split("\n");
    const n = parseInt(lines[0]);
    const entries = lines.slice(1);

    if (entries.length !== n) {
        console.log("Invalid entries found.");
        return;
    }

    if (validateItinerary(entries)) {
        console.log("All entries are valid.");
    } else {
        console.log("Invalid entries found.");
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
