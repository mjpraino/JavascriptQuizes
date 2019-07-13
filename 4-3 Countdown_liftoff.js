/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */
 /*
  * Programming Quiz: Countdown, Liftoff! (4-3)
  *
  * Using a while loop, print out the countdown output above.
  */
 time = 60;
 // your code goes here
 while(time > 0) {
     console.log("T-" + time + " seconds");
     time = time - 1;
   switch (time) {
     case 50:
       console.log("Orbiter transfers from ground to internal power");
       time = time - 1;
       break;
     case 31:
       console.log("Ground launch sequencer is go for auto sequence start");
       time = time - 1;
       break;
     case 16:
       console.log("Activate launch pad sound suppression system");
       time = time - 1;
       break;
     case 10:
       console.log("Activate main engine hydrogen burnoff system");
       time = time - 1;
       break;
     case 6:
       console.log("Main engine start");
       time = time - 1;
       break;
     case 0:
       console.log("Solid rocket booster ignition and liftoff!")
       break;
   }
 }
