//set name to Zishan
var myname = 'Zishan';
//set number of states
var numOfStates = 50;
//sum of 5+4
var sum = 5 + 4;
//Display alert that says 'Hello World!'
function sayHello() {
    alert('Hello World!');
}
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
var names = ["Charles", "Abby", "James", "John"];
var ages = [21, 27, 18, 17];
for (var i = 0; i < names.length; i++) {
    checkAge(names[i], ages[i]);
}
var veggies = ['carrots', 'onions', 'cucumbers', 'celery'];
var count = 0;
while (count < veggies.length) {
    console.log(veggies[count]);
    count++;
}
function getLength(word) {
    var wordsize = word.length;
    wordsize = wordsize % 2;
    if (wordsize == 0) {
        console.log('The World is Nice and Even!');
    }
    else {
        console.log('The World is an Odd Place');
    }
}
getLength("Hello World");
