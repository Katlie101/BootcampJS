/* Exercise 1:Temperature check*/

//Ex 1.1
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

//Ex 1.2: Switch Expression
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

// 2.1
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

/* Ex 2.2: Switch Expression*/


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

// Ex 3.1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Ex 3.2
for (let i = 1; i<=20; i++) if (i%2===0) {
    console.log(i);
}

// Ex 3.3
let total = 0
const n = 100

for (let i=1; i <= n; i++) {
    total += i;
}
console.log(total);

// Ex 3.4
const numbers = [1, 2, 3, 4, 5];

for ( let x in numbers) {
    see = numbers[x];
    console.log(see);
}

// Ex 3.5
let numerics = [3, 7, 2, 5, 10, 6];
let max = numerics[0];

for (let i = 1; i < numerics.length; i++) {
    if (numerics[i] > max) {
        max = numerics[i];
    }    
}

console.log(max);

/*Exercise 4: While loops*/


// Ex 4.1
let input = 1;

while ( input < 10) {
    console.log(input);
    input ++;
}

// Ex 4.2
let even = 2;

while ( even <= 20) {
    console.log(even);
    even +=2;
}

// Ex 4.3
let num = 1;
let sumNum = 0;

while ( num <= 100) {
    sumNum += num;
    console.log(sumNum);
    num ++; 
}

// Ex 4.4
let z = 0;

while ( z < 50) {
    console.log(z);
    z +=5;      
}

/*Exercise 5: Do while loop*/

// Ex 5.1
let q = 0;

do {
    q += 1;
    console.log(q);    
}
while (q <10);

// Ex 5.2
let r = 1;
let lastSum = 0;

do {
    lastSum += r;
    r++;
} while ( r <= 100);

console.log(lastSum);

// Ex 5.3
let enterNumber;

do {
    if (enterNumber > 10);
    enterNumber = window.prompt("Please enter a number that is greater than 10.");

} while ( enterNumber < 10);
console.log("Way to go!");

// Ex 5.4

let userNumber = 0;
const correctNumber = 7;

do {
    userNumber = window.prompt("Guess the correct number between 1 and 10.");

    if (userNumber < correctNumber && userNumber > correctNumber) {
        window.prompt ("Not it! Try again.");
        userNumber++;
       
    } else if ( userNumber == correctNumber) {
        alert("Hooray! You guessed the correct number: " + correctNumber);
    }
   
} while ( userNumber != correctNumber);




