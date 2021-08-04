//1. Ternary operator
// let value = 99;
// let isSmall;
// if (value > 100) {
//   isSmall = false;
// } else {
//   isSmall = true;
// }

///Above code could be shorten into the below code
// isSmall = value > 100 ? false : true;
// console.log(isSmall);

//2. typeof
// console.log(typeof true); //-> boolean
// console.log(typeof "true"); //-> string
// console.log(typeof 100.0); //-> number

//3. CBV and CPR
// let a = 1;
// let b = a;

// b = b + 2;

// console.log(a); // 1
// console.log(b); // 3

// let x = [1];
// let y = x;

// y.push(2);

// console.log(x); // [1, 2]
// console.log(y); // [1, 2]

//cpv cpr using === ==
// const one = 1;
// const oneCopy = 1;

// console.log(one === oneCopy); // true
// console.log(one === 1); // true
// console.log(one === one); // true

// const ar1 = [1];
// const ar2 = [1];

// console.log(ar1 === ar2); // false
// console.log(ar1 === [1]); // false

// const ar11 = ar1;
// console.log(ar1 === ar11); // true
// console.log(ar1 === ar1); // true

//scope
//lexical scope
// function outer() {
//   // the outer scope
//   let outerVar = "I am from outside!";

//   function inner() {
//     // the inner scope
//     console.log(outerVar); // 'I am from outside!'
//   }

//   return inner;
// }

// const result = outer();
// result();

//hoisting

// console.log("x = ", x); // display x = 1

// var x = 1;

//function hoisting
// var result = Sum(5, 5); // 10

// console.log(result);

// function Sum(val1, val2) {
//   return val1 + val2;
// }

// Add(5, 5); // error

// var Add = function Sum(val1, val2) {
//   return val1 + val2;
// };

//closure
// function outer() {
//   var b = 10;
//   function inner() {
//     var a = 20;
//     console.log(a + b);
//   }
//   return inner;
// }
// let result = outer();
// result();

//this keyword
// function printThis() {
//   console.log(this);
// }
// printThis(); // in browser it can be window object or in node global object

// var first = "John";
// var last = "Doe";
// const user = {
//   first: "Alex",
//   last: "Rose",
//   fullName: function () {
//     return this.first + " " + this.last;
//   },
// };

// console.log(user.fullName()); // returns Alex Rose

//passing function as parameter
// let add = function (a, b) {
//   return a + b;
// };
// let subtract = function (a, b) {
//   return a - b;
// };

// let result = function (operation) {
//   let a = 20;
//   let b = 10;
//   return operation(a, b);
// };

// console.log(result(add)); // 30
// console.log(result(subtract)); // 10

//passing returned as parameter

// let add = function (a, b) {
//   return a + b;
// };
// let subtract = function (a, b) {
//   return a - b;
// };

// let result = function (operation) {
//   return operation;
// };

// let addFunc = result(add);
// let addResult = addFunc(20, 10);

// let subFunc = result(subtract);
// let subResult = subFunc(20, 10);

// console.log(addResult); //30
// console.log(subResult); //10

//iife
// var userName = "Alex";

// (function (name) {
//   function display(name) {
//     console.log("User Name : " + name);
//   }
//   display(name);
// })(userName);

let a = {};
console.log(typeof !!a);
console.log(!!a);
