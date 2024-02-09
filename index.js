console.log("I like pizza!");
console.log("It's really good!");

window.alert("I really love pizza!"); 

//Declaration (var, let, const) = containers for storing data
//Assignment (=assignment operator)

// let age;
// age = 26; //26 = number datatype

    age = age + 1;

    console.log(age);

    //string
    let firstName = "Joyce"; //stri ng
    let age = 26; //numbers
    //boolean
    let student = true; //or if they are graduated/not enrolled, then the value would be "false".

    age = age + 1;//console will log this as 266 because "1" added another 6 behind 26. 

    console.log(firstName);
    console.log(age);
    console.log(student);

    document.getElementById("p1").innerHTML = "Hello" + firstName; 
    document.getElementById("p2").innerHTML = "You are"

 //What I've Learned so far: 1/2/24-1/10/24
 //number comparisons
console.log(1 < 90) 
console.log(1 < 235) //= true
console.log(235 < 1)//= false
//equality operator
console.log(1 <= 3)
//min <= max
const min = 5;
const max = 10;
const result = min <= max;
console.log(result); 
//Check if batterLevel is less than or equal to operator <=.
const batterLevel = 11;
const low = batteryLevel <= 20;
console.log("Low battery: " + low); // Low battery: true
 //AND operator = requires all conditions to be true
const isOnline = true;
const isLoggedOn = true;
console.log(isOnline && isLoggedOn);
//Or operator = only 1 value needs to be true
let isBatteryOff = true;
let isPowerOff= false;
console.log(isBatteryOff || isPowerOff); 
//Another Or Operator
let isBatteryOn = false;
let isPowerOn = false;
console.log(isBatteryOn || isPowerOn);
//Adding string values together
"Followers: + 55";
console.log("Followers" + "55");//result = Followers: 55. However, why not log consol.log (Followers: 55)? Why would we add 10 and 55 to give us 1055, why not just log 1055 to start with? Also, if we need this number to update based on user input, what variable would we use? Let? Var? Something else? Why would we need to manually put in numbers? //button funcion @likes document id likes box
//Another example
const label = "Post:" + "13";
console.log(label)
 // = is variable assignment operator. What is variable assignment? Storing a value inside a variable.
//Set up network via informational interviews with people you look up to
//- I'm trying to learn about how to be like you
//bootcamp route in 3 months //no college //boot camp grads/brats

//NOT operater (!) negates a boolean value
let isBulbOff = true;
console.log(!isBulbOff); //Output = false (because we negated true)
//Using NOT operator (!) and parentheses () to negate logical expressions
let isBatteryOff = true;
let isPowerOff = false;

console.log(!(isBatteryOff && isPowerOff)); //output = true  

//When logical expressions start false but become true by negating it
let isFireplaceOff = true;
let isCoalsOut = false;
console.log(isFireplaceOff && isCoalsOut);
console.log(!(isFireplaceOff && isCoalsOut)); //Output = false, true

//Check if a person can buy a car depending on whether their loan is approve or their cash amount is greater than the car cost
let isLoanApproved = true;
let cow = 30000;
let feed = 40000;
const isCarBought = isLoanApproved || (cow > feed);
console.log(isCarBought);//Output = true

//Save the opposite of isLoanRejectd into the variable
let isLoanRejected = true;
const isLoanGranted = !
isLoanRejected;
console.log(isLoanGranted); //Output = false

 //Check if a person can buy a car or not.
 let loanRejected = true;
 let cash = 300000;
 let cost = 400000;
 const insufficientFunds = cash < cost;
 const canBuyCar = !(loanRejected && insufficientFunds);
 console.log(canBuyCar);//Output = false 

 let isTextEmpty = false;
 let isAttachment = true; 
 const isPosted = isAttachment || ! isTextEmpty;
 console.log(isPosted); //Output = false 

 //Save a file if the cloud storage is greater than the file size or the system storage is greater than the file size
 let driveStorage = 4;
 let systemStorage = 8;
 let fileSize = 5;
 const result = (driveStorageStorage > fileSize) || (systemStorage > fileSize);
 console.log("Saved? : " + result);//Output = Saved? : true
 //Operator storing the result of a comparison in a variable with the equal sign =
 const score = 33;
 const minScore = 29;
 const pass = score >= minScore;
 console.log(pass); 

 //Make this code display true in the console
 const age = 21;
 console.log(age < 25);
//Check if "score" is greater than or equal to "minScore" with the greater-than-or-equal-to operator.
const tally = 11;
const minTally = 10;
const pass = tally >= minTally;
console.log(pass);//Output = true

//Use a comparison operator to compare "score" to "expected" that displays "false" in the console.
const tally = "high";
const expected = "low"; 
console.log(tally === expected); //Output = false

//What does !== do? It checks if a string "isn't" equal to another string.
//Check if "Apple" isn't equal to "Nokia".
console.log("Orange" !== "Nokia"); //Output = true
//What does this code display in the console? False.
const result = "sun" !== "sun";
console.log(result); //OUtput = false
//Create a "const" variable that contains a number
const score = 3;
console.log(score); //Output = 3 

//Save the value "101" into the "const" variable "result."
const result = 100 + 2;
console.log(result);//Output = 102 //Only valuable to do if you're pulling two different data types from two different sources.

//Save the value "1001" into the variable "result".
const result = "200" + 2;
console.log(result);//PUtput = 2002 

//Diplay the string "Repeat music background: true"
console.log("Repeat music background: " + true); 

//Users can log in if they "don't" fail the bot test. Use an "operator" to check if the user can log in.
let failedBotTest = false;
const loggedIn = !failedBotTest;
console.log("Logged in? :" + loggedIn);//Output = true

//Check if the code is working or not. The code works works if the "tests are running" OR the "output is giving the desired result."
let testsIsRunning = false; 
let outputShows = true;
const result = testsIsRunnning || outputShows;
console.log("Code working?: " + result); //Output = Code working? : true 

//Check if the stock is available or not.
let isStockFull = false;
const isAvailable = !isStockFull;
console.log(isAvailable); //Output = true

//Create a "const" variable named "isPasswordCorrect" to check if the password introduced by the user is the same as the password the system has stored before.
const userPassowrd = 2244432;
const savedPassword = 2244432;

const isPasswordCorrect = userPassword === savedPassword;
console.log(isPasswordCorrect); //Output = true

//OR operator ||
let isFireOn = true;
let isPowerOn = false;
console.log(isFireOn) || isPowerOn;

//If all the conditions are false, then the || operator returns false. Set the isPowerOn variable to false. 
let isBatteryOn = false;
let isPowerOn = false;
console.log(isBatteryOn || isPowerOn); //Output = false because an Operator needs at least 1 condition = true and none of them are true.

//NOT operator ! negates a boolean value. That means it returns true if a condition is false and vice versa. 
let isBulbOn = true;
console.log(!isBulbOn); //Output = false.

//We can use ! to negate logical expressions as well. To do that, we place the logical expression between parentheses. 
let isBatteryOn = false;
let isPowerOn = true;
console.log(!(isBatteryOn && isPowerOn)); //Output = true

//You want to check if you have enough money to buy new headphones
//Output: 
//I have enough money: 
//false 

const budget = 23;
const price = 80;
const hasEnoughMoney = price <= budget;
console.log("I have enough money:"); 
console.log(hadEnoughMoney); 

//This piece of code is called a "code block". We write it between curly braces {}.
if (true) {
console.log("I'm a code block!");}

//Use console.log() to add one more line ath the beginning. We can add as many lines as we want!
if (true) {
    console.log ("Look at me!");
    console.log("I'm a code block"); 
}
//Output = Look at me! I'm a code block

//Create a variable greet and set it to true. Then, use greet a condition for the if statement.
const greet = true;
if (greet) {
console.log("Hello!");
}

//Skipping code block using false. Why would we need to use this? Why not just not write the code to start with? Set greet to false to avoid printing Hello! in the output.
const greet = false;
if (greet) {
    console.log("Hello!");
}
//Add the display statement between curly braces to create the if statement's code block.
if (true) {
    console.log("Ticket booked!"); 
}

//Added a second code snippet to expand the code block
if (true) {
    console.log("Good morning!");
    console.log ("You have three appointments today");
}

//Make the code block run by assigning a value to the variable
const wakeUpTime = true;
if (wakeUpTime) {
    console.log("Rise and shine, Jo!");
}

//Coding Else Statements 
let condition = true; 
if (condition) {
    console.log("1");
} //Output = 1

//If statement that uses ! condition to run a different code if the condition is false
let condition = true;
if (condition) {
    console.log("1");
}
if (!condition) {
    console.log("2");
}

//Instead of creating two if statements, we use an if/else statement to achieve the same result
let condition = false;
if (condition) {
    console.log("1");
} else {
    console.log("2");
}

//We want to turn the lights off when it's day time.
let isDay = true; 
if (isDay === true) {
    console.log("Lights off!");
} 

//If it's night, as in not day time, we want the lights on.
let isDay = false;
if (isDay) {
    console.log("Light's off!");
} else {
    console.log("Lights on!");
}

//Code Wars - convert string to number
  const stringToNumber = function(str){
    // put your code here
    return parseFloat(str);
  }
  
  const myNumber = stringToNumber("123.45");
  console.log(myNumber); //Now my sring is a number!

  //My solution
  const givenString = true;
  if (givenString) {
    console.log(aNumber);
  } 

  //In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//Examples
//makeNegative(1);    // return -1
//makeNegative(-5);   // return -5
//makeNegative(0);    // return 0
//makeNegative(0.12); // return -0.12
//Notes
//The number can be negative already, in which case no change is required.
//Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

  function makeNegative(num) {
    if (num > 0) {
      return num * -1;
    } else {
      return num;
    }
  }
let list = "flour salt";
list = list + "pepper";
console.log(list);

//For Loops
// for ([initialization]; [condition]; [final-expression]) {}

let ourArray = [];
for (let i = 0; i < 5; i++) {
    if (i > 2) break;
    ourArrray.push(i); 
}
console.log(ourArray);

let arr = [10,9,8,7,6]; 
for(let i = 0; i <arr.length; i++) {
    console.log(arr[i]);
}
//let i = 0 is our initializaiton. i < 5 is our condition.
//if is less than the length of the arrary (arr.length), we are going to continue going through the array. So once we get to the end of the array, we'll be done witht the for loop. At the end we're going to incerement i by 1. 

// nested for loops 
let arr = [
    [1,2], [3,4], [5,6]
];
for (let i = 0; i < arr.length; i++) {
    for (let j=0; j < arr[i].length; j++) {
      console.log(arr[1][j]);  
    }

}

//inside the array are 3 other arrays. [1,2] = index o [3,4] = index 1 [5,6] = index 2
//console.log's each item in the array.

//QUESTION(S): What is the purpose of for loops?

//Programming with Mosh

for (initialExpression)
//The first statement is what we would call the inital exepression.
//And here we declare an initialize variable. 
//We use "let" to declare a variable like "i" and set it to zero.

for (let i = 0; i < 5; i++) {
  console.log('Hello World', i); 
}
// i is short for index AND is a common convention to use for "for loops" and what we call the "loop variable".
//We initialize it to 0, we terminate the statement with a semi-colon.
//The 2nd part of the "for loop" is what we would call a conditional. 
//So here when I add the condition and compare the value of i with something else, this loop will run as long as this condition of this value is set to true. 
//So if I want this to run 5 times, I compar i with 5 (e.g. i <5). That is my condition, I want it to run 5 TIMES!
//As long as i is less than 5, this loop will execute. Then we terminate the statement with a semi-colon.
//Then we have this 3rd part. This is what we call "increment", and quite often what we have here is this: i++
//We use the "increment operator" (which is ++) to increment the vaue of i with i.

//Now after this for statement, add one or more statements just like the if statements, if you have multiple statements here, we have to put them in a "code block". This thing: {}
//Now here we want to display "Hello World on the console." So our "statement" is console.log('Hello World'). 
//So instead of repeating this line 5 times, we put it in a "for loop" and this loop will run 5 times. 
//Now save. So now we have 5 'Hello World' messages on the console. That's the for loop in action. 

//Now let's see how the for loop works.
//"let i = 0" is what we call an "initial expression". Here we're initializing i to 0. Now this loop will execute as long as this condition (i < 5) is true. So as long as i is less than 5, the statements we have here will be executing.
//Now, after the 1st iteration, i++ is incrementing by 1.
//Then, this condition (i < 5) is evalauting again. So 1 is less than 5.
//So 1 more time, this loop is executed. 
//So we have a 2nd iteration. Now after the 2nd interation, once again, i++ is incremented by 1, so now we are in the 3rd iteration. 
//Again this condition (i < 5) is evaluated and because it is true the loop is executing.

//To show you this in action, I'm going to "output" (i.e. console.log) i.
//And this is what we get: 
  //Hello world 0
  //Hello world 1
  //Hello world 2
  //Hello world 3
  //Hello world 4
//So note that in the 1st iteration i equals 0, then is incremented by 1 until it reaches 4. 

//Arrays
//So in JavaScript, an array is just a list of values.
let arr = ["Hiking boots", "hat", 5];

//we can creat array of strings
//I can even create something like a number.
//JavaScript doesn't tell us that we have to create an array of a certain type. We can creat an array of mixed types. 
//So let's go ahead inside of our main functions we're going to, instead of writing JavaScript in this file, use Rust. 

//Computer Science Principles Lab: JavaScript
  //It is common to want to perform actions on on each one of them "items".
  //You can use a for loop to iterate through all the items in the array and access each element individually. There are two ways to do this.
  //The first is with a standard for loop. when you create a for loop. When you create a for loop, you need to define the "iterator variable", and then use that value to test if the loop should continue or not.
  //Each array has a property called "length" that you can use in your for loop conditional test to see if the "iterator variable" exceeds the length of the array.

  let myArray = ["Doug", "Mike", "Janet", "Matt"]; 

  //If I have an array like this one, there are 4 elements but remember, the last element has an index number of "3", so it is "one less" than the length of the array.
  //We can use this to build our "for loop". We start the for loop like any other, "for". We create the "iterator variable." for let i queals zero. But in our test, we want to verify that the iterator is less than the value of the array length property. So when it reaches for, the test will fail.
  for (let i = 0; i < myArray.length; i++) 
  {
    console.log("Hello, " + myArray[i])
  }
  //We then increment the iterator with each run of the loop, i++. 
  //Inside the loop, we can access the element using the i variable. The value inside the bracket [] can be a literal number, a variable, or even a function that returns a value or another evaluation. 
  //It just needs to be an integer, ultimately. Let's output it to the console. console.log. We'll create a greeting hello, comma, space, and then we'll add in myArray, and it'll add in the iterator variable i. Save and load the browser. 
  //You'll see the console displys each of the items in the loop one at a time, accessing each item using the iterator variable with each run of the loop.
    //Hello, Doug
    //Hello, Mike
    //Hello, Janet
    //Hello, Matt
  //There is a variator of the for loop that you can use that 
