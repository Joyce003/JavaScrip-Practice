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
