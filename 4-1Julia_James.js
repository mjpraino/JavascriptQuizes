/*
 * Programming Quiz: JuliaJames (4-1) (Fizz Buzz)
 */

var x = 1;

while (x <= 20) {
    (x % 3 === 0 && x % 5 === 0) ? console.log("JuliaJames") :
    (x % 3 === 0) ? console.log("Julia") :
    (x % 5 === 0) ? console.log("James") : console.log(x);
    x += 1;
}

// x % is whatever is divisible by that number. meaning if x is 10
// is it divisible by 3 no? go the the next loop which is 5 if not print the number.
