↩️ [Home directory](https://github.com/rajeshrideshmukh/missingskill-learning "Go to Home repository")

<br>

# 📌 JavaScript Functions


A function is a block of code designed to perform a particular task. The main purpose behind creating/using a function is that we can reuse the code as many times as we want, this helps use save time and also helps us make our programs compact.

Syntax of a function is :

```javascript
    function fName(para1, para2){  //function definition
   // function body
 }

    fName(); //function call
```

**In Es5, functions behaves like variables :**

- acts as container
- gets hoisted just like variables.
- has local & global scope
- if we redefine a function, it will override it's previous definition
- acts as object
  
> ❗ _While dealing with functions, it is important to add a check which can avoid the code from crashing._

```javascript
!!fName && (typeof fName === 'function') && fName();
function function_name(){
}
```
- !!function_name - Check if the function is defined or not
- (typeof fName === 'function') - Check if the given name belongs to a function or not
- fName() - If previous two conditions are true only then make the function call.


[⬆️ back on top](#)

## **Function can be declared in two ways** :

- **Function declaration**
  
  This syntax uses function keyword. In this type function declaration can be hoisted.

  ```javascript
    function Sum(val1, val2) {

             return val1 + val2;
            }

    var result = Sum(5, 5);

  ```
- **Function assignment**
  
  In this type we define a function and then assign it to a variable. Here, function definition is not hoisted only the variable declaration get hoisted (only in case of var).

  We can assign multiple same function to multiple variables.
    ```javascript
    var Sum = function(val1, val2)
                        {
                          return val1 + val2;
                        }

    var result = Sum(5, 5);
    var result2 = Sum(10, 20);


  ```

## **First Class Citizen**

Functions are refered as **First class citizen** because they can access to everything and get all the following privileges :
 
- Function acts as object
- Function can be assigned to a variable
- Function can be passed as parameter
- Function can be returned from another function

## **Higher Order Function**

A function which takes function as parameter or can be returned from another function is called as Higher order function.

The purpose of this function is to make your code robust, configurable and flexible.

- Function passes as parameter

    ```javascript
    let add = function (a, b) {
    return a + b;
    };
    let subtract = function (a, b) {
    return a - b;
    };

    let result = function (operation) {
    let a = 20;
    let b = 10;
    return operation(a, b);
    };

    console.log(result(add)); // 30
    console.log(result(subtract)); // 10

    ```
- Function returned from another function

    ```javascript
    let add = function (a, b) {
    return a + b;
    };
    let subtract = function (a, b) {
    return a - b;
    };

    let result = function (operation) {
    return operation;
    };

    let addFunc = result(add);
    let addResult = addFunc(20, 10);

    let subFunc = result(subtract);
    let subResult = subFunc(20, 10);

    console.log(addResult); //30
    console.log(subResult); //10

    ```

## **Pure function**

A function in which we do not modify or update any value of parameter is said to be a Pure function.

If there is a need to change any value then create a local variable inside that function so that updating that variable won't affect the variable.

## **IIFE**

IIFE stands for **Immediately Invoked Function Expression**. Also known as **Self executing function**(SEF).

A JavaScript function that runs as soon as it is defined is called as IIFE.

Syntax:
```javascript
 ;(function(){
 //function body
})();    // function call
```
It consists of two parts - Anonymous Function (Function expression) & Function Invokation ()();

```javascript
var userName = "Alex";

(function (name) {
  function display(name) {
    console.log("User Name : " + name);
  }
  display(name);
})(userName); //prints User NAme : Alex

```

## **Anonymous Functions**

Anonymous Functions is a function that has no name. 
```javascript
setTimeout(function () {
    console.log('This is an Anonymous function')
}, 1000);

```
We are passing an anonymous function as a parameter into the setTimeout() function.

## **Inline Functions**

Inline Functions is a function that is assigned to a variable.
```javascript
let show = function () {
    console.log('This is an Inline function');
};

show();

```
<br>

[⬆️ back on top](#)

<br>

## 📌 ES6  

ES6 refers to version 6 of the ECMA Script programming language. ES6 overcame few of the drawbacks in ES5 and also added new syntax and concepts.

1. **__let and const__**

    In ES5, when you declare a variable outside of a function, the scope of the variable is global and if the variable is declared inside a function, the scope of the variable is local.

    ES6 provides a new way of declaring a variable by using the let keyword. The let keyword is similar to the var keyword, except that these variables are blocked-scope.

    If variables are declared using let and const inside any block they will be local to that block and inaccessible to outer code.

2. **Template Literals**

    Template Literals can be created by enclosing your text in backticks (`) .

    ```javascript
        let template = `This is a template literal`;
    ```
    Template Literals can be used for creating multiline strings.

    ```javascript
       var longText = 'Multiline \n\
                string';

        console.log(longText);
        //Multiline
        //string
    ```
    Template Literals can be used to substitute variable and expression.

    ```javascript
        let firstName = 'Alex',
        lastName = 'Rose';

        let greeting = `Hi ${firstName}, ${lastName}`;
        console.log(greeting); // Hi Alex, Rose
    ```

3. **Default parameters**

    Suppose we have a function which is expected a parameter, however if we forget to pass the parameter it takes undefined as the value. In ES6, JavaScript allow you to initialize named parameters with default values if no values are passed into the function.   

    ```javascript
        function greet(message) {
            console.log(message);
        }

        greet(); // undefined

        // Using default parameters
        function greet(message='Hi') {
        console.log(message);
        }

        greet(); // 'Hi'
        greet(undefined); // 'Hi'
        greet('Hello'); // 'Hello'
    ```
    This could also be achieved using ternary operator

    ```javascript
    function greet(message) {
        message = typeof message !== 'undefined' ? message : 'Hi';
        console.log(message);
    }
    greet(); // 'Hi'
    ```

[⬆️ back on top](#)

4. **Arrow Function**

    JavaScript arrow function is a new syntax for writing a function.

    Benefits of this include:

    - reduces lines of code
    - no function keyword
    - no return keyword
    - no curly braces {}

    Syntax : 
    ```javascript
        () => { ... } // no parameter
        x => { ... } // one parameter, an identifier
        (x, y) => { ... } // several parameters
        x => { return x * x }  // block
        x => x * x  // expression, equivalent to previous line
    ```
    Normal function expression :

    ```javascript
    let add = function (a, b) {
        return a + b;
    };

    console.log(add(10, 20)); // 30
    ```
    Using arrow function on above function :

    ```javascript
    let add = (a, b) => a + b;

    console.log(add(10, 20)); // 30;
    ```

    **Arrow Function and _this_**:

    Arrow functions treat this keyword differently. They don’t define their own context since it doesn’t have its own this context. They inherit that from the parent scope whenever you call this.

5. **Spread operator**

    Spread operator consists of three dots (...) and it allows you to spread out elements of an iterable object such as an array,a  map, etc.

    Example:

    ```   javascript 
        const oddNum = [1,3,5];
        const num = [2,4,6, ...oddNum];
        console.log(num);

        //Output : [ 2, 4, 6, 1, 3, 5 ]
    ```


6. **Built-in methods in ES6**

      Methods | Description
    --------|------------
    setTimeout() | Executes a block of code after the specified time. <br> `setTimeout(function, milliseconds);`
    clearTimeout() | Used to cancel the setTimeout() method call before it happens. <br> `clearTimeout(intervalID); // intervalID is the return value of the setTimeout() method. `
    setInterval() | Used to run a function repeatedly after the specified time interval. <br> `setInterval(function, milliseconds);`
    clearInterval() | Used to cancel the setInterval() method execution. <br> `clearInterval(intervalID);  `
    stringify()| Used to convert a JavaScript object into a string <br> ```const obj = {name: "Alex", age: 30, city: "Mumbai"}; ``` ```const myJSON = JSON.stringify(obj);``` <br> myJSON is in string following JSON format.
    parse()| Used to convert from text to JavaScript object.
    parseInt()| Parses a string argument and converts it into an integer value <br>   ```  parseInt("100") = 100 ``` <br>``` parseInt("2020@India") = 2018 ``` <br>``` parseInt("rajeshri@2018") = NaN``` <br>``` parseInt("3.14") = 3 ``` <br>``` parseInt("18 3 2018") = 18``` |



[⬆️ back on top](#)

↩️ [Home directory](https://github.com/rajeshrideshmukh/missingskill-learning "Go to Home repository")
