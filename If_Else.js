if (/ * this expression is true */) {
  // run this code
} else {
  // run this code
}

// example below

var a = 1;
var b = 2;

if (a > b) {
  console.log("a is greater than b")
} else {
  console.log("a is less than or equal to b");
}

// multiple else statements

var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat")
} else if (weather === "rain") {
  console.log("Bring a rain jacket")
}else {
  console.log("Wear what you have on  ")
}

// money example

var money = 100.50;
var price = 100.50;

if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  console.log("That's not enough, you still owe me money.");
}

// Medal example

var runner = "Kendyll";
var position = 2;
var medal;

if(position === 1) {
  medal = "gold";
} else if(position === 2) {
  medal = "silver";
} else if(position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + " medal.");



// Musical Groups (3-3)

// your code goes here
if (musicians <= 0) {
    console.log("Not a group");
} else if (musicians === 1) {
    console.log("solo");
} else if (musicians === 2) {
    console.log("duet");
} else if (musicians === 3) {
    console.log("trio");
} else if (musicians === 4) {
    console.log("quartet");
} else {
    console.log("this is a large group");
}
