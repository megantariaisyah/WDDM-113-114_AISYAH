

// This is a comment whhich can help me understans my code later

/*
This is a comment block
it can span multiple lines
and then it can be closed like this
*/

x = 14;
y = 4;

let z = x + y;



// let z = x + y;

const PI = 3.141591653589793;

console.log("PI:" + PI)


var firstName = "Aisyah Putri";
var lastName = "Megantari";
var myfullName = firstName + " " + lastName;

//let myfullName = firstName + " " + lastNAme;

console.log("Hello, Let Me Introduce My Self")
console.log("First Name: " + firstName + "," + " Last Name: " + lastName);
console.log ("My Full Name is " + myfullName);

console.log("X: " + x + "\n" + "z:" +z);


//incrementNum//

let incrementNum = 0;

console.log ("the number: " + incrementNum);

incrementNum++;

console.log("the incremented number: " + incrementNum);

// interest
var background = "interior designer"
var home = "Indonesia"
var thankyou = "Terimakasih"

console.log("My background is" + " " + background);
console.log("I am from " + home);
console.log("Nice to meet you" + " " + thankyou);



// BUTTONS //

const myBtn = document.getElementById ("myBtn");

myBtn.addEventListener ("click" , function (e) {
console.log ("This Button Was Clicked!!");

const Name = prompt ("What is your name");

console.log (Name)

document.getElementById('output').innerHTML = "Welcome, " + Name + "!";
});













