function processData(input) {
    const data = JSON.parse(input);
    const bucketList = data.bucketList;

    let uniquePlaces = [];
    let palindromePlaces = [];
    let totalDescriptionLength = 0;

    const isPalindrome = (str) => {
        const sanitizedStr = str.toLowerCase().replace(/[^a-z]/g, ''); // Remove non-alphabetic characters and convert to lowercase
        const reversedStr = sanitizedStr.split('').reverse().join('');
        return sanitizedStr === reversedStr; // Case-sensitive comparison
    };

    const entries = bucketList.split('\n');
    for (let entry of entries) {
        const [placeName, description] = entry.split(': ');

        if (!uniquePlaces.includes(placeName)) {
            uniquePlaces.push(placeName);
        }

        totalDescriptionLength += description.length;

        if (isPalindrome(placeName)) {
            palindromePlaces.push(placeName);
        }
    }

    const output = {
        uniquePlaces: uniquePlaces,
        totalDescriptionLength: totalDescriptionLength,
        palindromePlaces: palindromePlaces
    };

    console.log(JSON.stringify(output, null, 2));
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
