// Temperature conversion script to convert C to F degrees

var readlineSync = require('readline-sync');

var degrees = readlineSync.question('Enter degrees in Celsius: ');
var degreesNum = Number(degrees);
degreesFah = degreesNum * 1.8 + 32
console.log(degreesNum + ' Celsius is ' + degreesFah + ' Fahrenheit!');