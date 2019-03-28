//set name to Zishan
let myname: string = 'Zishan';

//set number of states
const numOfStates: number = 50;

//sum of 5+4
let sum: number = 5 + 4;

//Display alert that says 'Hello World!'
function sayHello(){
    alert('Hello World!');
}

sayHello();

function checkAge(name: string, age: number){
    if(age < 21){
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

let names: string[] = ["Charles", "Abby", "James", "John"];
let ages: number[] = [21,27,18,17];

for(let i = 0; i < names.length; i++) {
    checkAge(names[i], ages[i]);
}

let veggies: string[] = ['carrots', 'onions', 'cucumbers', 'celery'];

let count: number = 0;
while(count < veggies.length){
    console.log(veggies[count]);
    count++;
}

function getLength(word: string){
    let wordsize: number = word.length;
    wordsize = wordsize % 2;
    if(wordsize == 0){
        console.log('The World is Nice and Even!');
    }else{
        console.log('The World is an Odd Place');
    }
}

getLength("Hello World");