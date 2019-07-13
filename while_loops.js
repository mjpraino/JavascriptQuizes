/*
 * lets create a while loop
 */

 var x = 1;
 while (x <= 10000) {
   console.log(x + " mississippi!");
   x = x + 1;
 }

 //Three main pieces of information that any loop should have are:
/*
 * When to start: The code that sets up the loop — defining the starting value of a variable for instance.
   When to stop: The logical condition to test whether the loop should continue.
   How to get to the next item: The incrementing or decrementing step — for example, x = x * 3 or x = x - 1
 */
 // here is a super basic while loop
 var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}

/*
 * Here's an example where a loop is missing how to get to the next item; the variable x is never incremented. x will remain 0 throughout the program, so the loop will never end.

Don't run this code!
 */
 var x = 0;

while (x < 1) {
  console.log('Oops! x is never incremented from 0, so i will ALWAYS be less than 1');
}
