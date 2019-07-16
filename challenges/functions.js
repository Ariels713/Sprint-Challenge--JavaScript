// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(itemA, itemB, callback) {
  return callback(itemA, itemB);
}




/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = (num1, num2) => {
  return num1 + num2;
}

const multiply =(num1, num2) => {
  return num1 * num2;
}

const greeting = (firstName, lastName) => {
  return `Hello ${firstName} ${lastName}, nice to meet you!`
}

console.log(consume(2,2,add))
console.log(consume(5,5, multiply))
console.log(consume(`ariel`, `r`, greeting))
/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// 
// Starting on line: 50.  external is globally scoped, any function will have access to this variable. 
// Line 53: The myFunction function code block contains a nested function.  Before the nesting happens, a variable `external` is stored.  The nested function will have access to anthing `above` it's nesting.  

//Breaking down lines 53-64:
/*
Line 56 is executed.  `external variable is commited to memory. 
line 68 is executed.  `myFunction()` is called. 
line 61 is executed.  `external` variable is called. 
line 63 is executed.  `internal` variable is commted to memory.
line 66 is exectued.  `nestedFunction` is called.
line 65 is exectued.  `internal` is loged to the console. 
code block ends.
*/

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();