// 1.What are all the JavaScript Data Types?
// - String
// - Number
// - Bigint
// - Boolean
// - Undefined
// - Null
// - Symbol
// - Object

//2. What is the Difference Between Const Let and Var? Consider Scope ... Give an example
// - When declaring a var variable or let variable, then it can be updated, but if we declare a const variable, it will not be updated in any case and will work fine with our function.
```
function example() {
var x = 1;
if (true) {
var x = 2;
console.log(x); // 2
}
console.log(x); // 2
}


   example();
 ```
//  In this example, the variable x declared with var inside the function and inside the if statement is the same variable, the if statement doesn't create a new scope. But if we use let instead of var:
 ```
 function example() {
     let x = 1;
     if (true) {
       let x = 2;
       console.log(x); // 2
     }
     console.log(x); // 1
   }
   
   example();
//  ```
//3. Pass By Value vs Pass By Reference? Why would you say a String is pass by value/ or a value type? Why is an object a reference type?
//  - Pass by value means that JavaScript passes a copy of the value to the function. The function can then modify the copy of the value, but it does not affect the original variable. Primitive data types such as numbers, strings, booleans, and symbols are passed by value.
//  - Pass by reference means that JavaScript passes a reference to the original value to the function. The function can then modify the original value directly. Objects and arrays are passed by reference in JavaScript.

//  - A string is a primitive type and it's passed by value, so if you change a string inside a function, it doesn't affect the original variable, that's why it's called a value type.
//  - An object is a reference type because it is an instance of a built-in object constructor and it is passed by reference. If a function modifies an object passed as an argument, it modifies the original object, that's why it's called reference type.
//4. What do Map , Filter and Reduce do? Do they mutate the array you call them on?
// - They are all array methods in JavaScript that can be used to manipulate and transform arrays.
// - None of these methods mutate the original array, they all create a new one with the results of the operation

// 5.What are all the Falsey Values in JS? Why do you think this is important to know?
// - false, 0, -0, 0n, empty string('' "" ``), null, undefined, NaN.
// - It is important to know because it allows you to write more accurate and efficient code especially when using control structures such as if statements and loops.

// 6.What is Async and Await?
// - Async makes a function return a promise and Await makes a function wait for a

// 7.What is an async function?
// - The async function declaration declares an async function where the await keyword is permitted within the function body.

// 8.What is try and catch?
// - Try is statements to be executed and catch are statements that is executed if an exception is



