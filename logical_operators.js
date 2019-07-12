var colt = "not busy";
var weather = "nice";

if (colt == "not busy" && weather == "nice") {
  console.log("go to the park");
}


// checking your balance

var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here
if (checkBalance === false) {
  console.log("Thank you. Have a nice day!");
} else if (checkBalance === true) {
  console.log("Is account active and balance > 0?")
}


if (checkBalance === true){
 2
 if (isActive === true && balance > 0.00){
 3
  console.log("Your balance is $" + balance.toFixed(2) + ".");
 4
 }
 5
 else if (isActive === false){
 6
  console.log("Your account is no longer active.");
 7
 }
 8
 ... you get the idea
 9
}
10
else {
11
 console.log("Thank you. Have a nice day!");
12
}
