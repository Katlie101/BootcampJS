let temperature = -1; 
if (temperature < 0) {
    show = "It'S freezing!";
    console.log(show);
} else if (temperature >= 0 && temperature <= 15) {
    show = "It's cold.";
    console.log(show);
} else if (temperature >= 16 && temperature < 25) {
    show = "It's mild.";
    console.log(show);
} else {
    show = "It's warm.";
    console.log(show);
}

/*Switch*/
let temp = 25;
let message;

switch (true) {
    case temp < 0:
        message = "It's freezing!";
        break;
    case temp >= 0 && temp <= 15:
        message = "It's cold.";
        break;
    case temp >= 16 && temp <25:
        message = "It's mild.";
        break;
    case temp >= 25:
        message = "It's warm."


}
console.log(message)


/*Exercise 2: Divisibility Check*/

let number = 12; 

if (number%2===0 && number%3===0){
    show = "Divisble by both.";
    console.log(show);
} else if (number%2===0) {
    show = "Divisable by 2.";
    console.log(show);

} else if (number%3===0){
    show = "Divisable by 3.";
    console.log(show);

} else {
    show = "Not divisable by 2 or 3.";
    console.log(show);
}

/*Switch Expression*/

let digit = 17;
let divisible;

switch (true) {
    case digit%2===0 && digit%3===0:
    divisible = "Divisible by both.";
    break;
    case digit%2===0:
    divisible = "Divisible by 2.";
    break;
    case digit%3===0:
    divisible = "Divisible by 3.";
    break;
    default:
    divisible = "Not divisible by 2 or 3";
}
console.log(divisible);

/*Exercise 3: For Loops*/


for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i<=20; i++) if (i%2===0) {
    console.log(i);
}

let total = 0
const n = 100

for (let i=1; i <= n; i++) {
    total += i;
}
console.log(total);

const numbers = [1, 2, 3, 4, 5];

for ( let x in numbers) {
    see = numbers[x];
    console.log(see);
}

let numerics = [3, 7, 2, 5, 10, 6];
let max = numerics[0];

for (let i = 1; i < numerics.length; i++) {
    if (numerics[i] > max) {
        max = numerics[i];
    }    
}

console.log(max);

/*Exercise 4: While loops*/


let input = 1;

while ( input < 10) {
    console.log(input);
    input ++;
}

let even = 2;

while ( even <= 20) {
    console.log(even);
    even +=2;
}

let num = 1;
let sumNum = 0;

while ( num <= 100) {
    sumNum += num;
    console.log(sumNum);
    num ++; 
}

let z = 0;

while ( z < 50) {
    console.log(z);
    z +=5;      
}




