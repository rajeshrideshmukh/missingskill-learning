↩️ [Home directory](https://github.com/rajeshrideshmukh/missingskill-learning "Go to Home repository")

&nbsp;

# JavaScript Basic Concepts

## 📌 Operators

1. Arithmetic Operators
   
    |   Operator|	Description	|
    |-----------|---------------|
    |+	|Performs additon when both operands and number |
    |+	|Performs concatenation when alteast one of the operand is string|
    |-	|Substraction	|
    |*	|Multiplaction|
    |/	|Division	|
    |%	|Modulus operator returns remainder|
    |** | Exponentiation

<br>

2. Comparison Operators
   
    |   Operator|	Description	|
    |-----------|---------------|
    |==	| Loose equality operator compares the value of both operands	|
    |===	| Strict equality operator first check datatype of varaiable and then value gives output as boolean value	|
    |!=	|Not Equal	|
    |>	|Greater than|
    |<	|Less than	|
    |>=	|Greater than equal to|	
    |<=	|Less than equal to	a |

<br>

2. Assignment Operator
   
    |   Operator|	Description	|
    |-----------|---------------|
    | =	| It will assign right operand value to left operand <br> ```a = 5; // a will be assigned value as 5.```|
    |+=	|Shorthand for <br> ```a = a + 5 //can be wriiten as a+=5 ```|
    |-=	|Shorthand for <br> ```a = a - 5 //can be wriiten as a-=5 ```	|
    |*=	|Shorthand for <br> ```a = a * 5 //can be wriiten as a*=5 ```|
    |/=	|Shorthand for <br> ```a = a / 5 //can be wriiten as a/=5 ```	|

<br>

3. Logical Operator
   
    |   Operator|	Description	|
    |-----------|---------------|
    | &&	| Performs logical AND operation <br> ```true && false // -> false.``` <br> ```(a>0 && a<10)```| 
    |\|\|	|Performs logical OR operation <br> ``` true \|\| false // -> true```<br> ```(a>0 \|\| a<10)```|
    |!	|Performs logical NOT operation <br> ``` !true // false ```	|

<br>

4. Ternary Operator

    The ternary/conditional operator takes three operands:
    - a condition followed by a question mark ( ? ), 
    - then an expression to execute if the condition is truthy followed by a colon ( : ), 
    - and finally the expression to execute if the condition is falsy.

        Syntax :-
        ```
            [Condition] ? [Expression1] : [Expression2];
        ```

        > ❗ _Ternary operator could also be used as a shorthand technique for some if else statements_

        ```
                let value = 99;
                let isSmall;
                if (value > 100) {
                isSmall = false;
                } else {
                isSmall = true;
                }

                //Above code could be shorten into the below code
                isSmall = value > 100 ? false : true;
                console.log(isSmall); //-> return true
        ```

        <img src="../resources/js-output/js-ternary.png" width="400" height="300" />

        &nbsp;

5. typeof Operator
   
   This operator returns the datatype of the give operand in the form of string. The operand can be any object, function, or variable.

     Syntax :-

    ```
        typeof operand
    ```
    ```
    console.log(typeof true); //-> boolean
    console.log(typeof "true");//-> string
    console.log(typeof 100.0);//-> number
    ```

    <img src="../resources/js-output/js-typeof.png" width="300" height="200" />


## 📌 Tech Debt

## 📌 Variables

Variables are considered as a container to hold some values. 

In JavaScript, variables are loosely coupled. It means while we declare a variable we dont need to specify it's type. A JavaScript variable can be assigned any type of value and depending on the value the type is assigned at run time.

```
var a; //this is called declaration

a = 1000; //this is called assignment

a = true; //Can assign different type of data in same variable.
```

>  _❗&nbsp; In JavaScript, if a variable has been declared, but has not been assigned a value explicitly, is automatically assigned the value **undefined**._

## Naming Conventions for JavaScript Variables

-  must start with a letter, underscore (_), or dollar sign ($).
-  cannot start with a number.
-  can only contain alpha-numeric characters (A-z, 0-9) and underscores.
-  cannot contain spaces.
-  cannot be a JavaScript keyword or a JavaScript reserved word.

    In JavaScript, variables can be created using three keywords:

    &emsp;&emsp;&emsp;🔸 **var** 

    &emsp;&emsp;&emsp;🔸 **let**

    &emsp;&emsp;&emsp;🔸 **const**


    <br>

    |Points                 | var | let | const |
    |----                   |----|----|-----|
    | Can be Re-declared    | ✔️ | ❌ | ❌ |
    | Can be Re-initialized | ✔️ | ✔️ | ❌ |
    | Can be hoisted        | ✔️ | ❌ | ❌ |
    |  Blocked Scope        | ❌ | ✔️ | ✔️ |

    <br>

    > _❗ &nbsp;Use meaningful names for declaring variables._

    <img src="../resources/js-output/js-variable.png" width="200" height="200" />



## 📌 Datatypes

## 📌 Copy by Value V/s Copy by Reference




[⬆️ back on top](#javascript-basic-concepts)

↩️ [Home directory](https://github.com/rajeshrideshmukh/missingskill-learning "Go to Home repository")

&nbsp;
