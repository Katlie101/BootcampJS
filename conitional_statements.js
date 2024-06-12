let temperature; 
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

