// create a function to generate a random number between 1 and 100
function randomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// create a function to return hours passed since a date
function hoursSince(date) {
    var oneHour = 60 * 60 * 1000; // minutes * seconds * milliseconds
    var currentDate = new Date();
    var date = new Date(date);
    return Math.round(Math.abs((currentDate.getTime() - date.getTime()) / (oneHour)));
}


// create a function that converts degrees celcius to fahrenheit
function celciusToFahrenheit(celcius) {
    return celcius * 9 / 5 + 32;
}

// make an array of objects with name, age, and favorite color of length 5
var people = [];
for (var i = 0; i < 5; i++) {
    people.push({
        name: 'person' + i,
        age: randomNumber(),
        favoriteColor: '#' + Math.floor(Math.random() * 16777215).toString(16)
    });
}
