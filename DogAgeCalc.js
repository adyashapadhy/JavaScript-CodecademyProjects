/* HUMAN TO DOG YEARS CALCULATOR FROM CODECADEMY
    WITHOUT USER INPUT */

//variable for human age
const myAge = '20';
//first two years of dog
let earlyYears = '2';
//each dog year counts as 10.5
earlyYears *= 10.5;
//also can be written earlyYears = earlyYears * 10.5
//subtracting two from human age as it is already accounted
let laterYears = myAge - 2;
//calculating the number of dog years accounted for by your later years

laterYears *= 4;

let myAgeInDogYears = earlyYears + laterYears;

const myName = 'Adyasha'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
