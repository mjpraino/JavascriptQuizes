/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = -30.00;
var checkBalance = false;
var isActive = true;

// your code goes here
if (checkBalance){
    if (isActive === true && balance > 0) {
        console.log("Your balance is " + "$" + balance.toFixed(2) + ".");
    }

    else if (isActive === false) {
        console.log("Your account is no longer active.");
    }

    else if (isActive === true && balance === 0) {
        console.log("Your account is empty.");
    }

    else if (isActive === true && balance < 0) {
        console.log("Your balance is negative. Please contact the bank.");
}
 else {
    console.log("Thank you, have a nice day.");
 }
}
