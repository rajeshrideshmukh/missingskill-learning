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
