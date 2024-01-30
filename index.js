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
