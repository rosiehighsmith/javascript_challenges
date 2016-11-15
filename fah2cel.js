// Temperature conversion script to convert F to C degrees

var readlineSync = require('readline-sync');

var degrees = readlineSync.question('Enter degrees in Fahrenheit: ');
var degreesNum = Number(degrees);
degreesCel = (degreesNum - 32) * (5/9)
console.log(degreesNum + ' Fahrenheit is ' + degreesCel + ' Celsius!');