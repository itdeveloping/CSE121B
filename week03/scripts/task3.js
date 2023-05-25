/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

function add(number1, number2) {
  // Step 2: In the function, return the sum of the parameters number1 and number2
  return number1 + number2;
}

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

function addNumbers() {
  let number1 = document.querySelector("#addend1").value;
  let number2 = document.querySelector("#addend2").value;

  // Step 4: Assign the return value to an HTML form element with an ID of sum
  document.querySelector("#sum").value = add(
    parseInt(number1),
    parseInt(number2)
  );
}

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.querySelector("#addNumbers").addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
function subtract(minuend, subtrahend) {
  return minuend - subtrahend;
}

document
  .querySelector("#subtractNumbers")
  .addEventListener("click", function subtractNumbers() {
    let minuend = document.querySelector("#minuend").value;
    let subtrahend = document.querySelector("#subtrahend").value;

    document.querySelector("#difference").value = subtract(
      parseInt(minuend),
      parseInt(subtrahend)
    );
  });

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

const multiply = (factor1, factor2) => factor1 * factor2;

document
  .querySelector("#multiplyNumbers")
  .addEventListener("click", function mulitplyNumbers() {
    let factor1 = document.querySelector("#factor1").value;
    let factor2 = document.querySelector("#factor2").value;

    document.querySelector("#product").value = multiply(
      parseInt(factor1),
      parseInt(factor2)
    );
  });

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

const divide = (dividend, divisor) => dividend / divisor;

document
  .querySelector("#divideNumbers")
  .addEventListener("click", function divideNumbers() {
    let dividend = document.querySelector("#dividend").value;
    let divisor = document.querySelector("#divisor").value;

    document.querySelector("#quotient").value = divide(
      parseInt(dividend),
      parseInt(divisor)
    );
  });

// Step 9: Test all of the mathematical functionality of the task3.html page.

/* BUILT-IN METHODS */

const date = new Date();
let year = date.getFullYear();

// Step 1: Declare and instantiate a variable of type Date to hold the current date

// Step 2: Declare a variable to hold the current year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

// Step 4: Assign the current year variable to an HTML form element with an ID of year

document.querySelector("#year").innerHTML = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,23, 24, 25];

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector("#array").innerHTML = Numbers;


// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )


/* const result = Numbers.filter(oddnumbers);

function oddnumbers(element) {
  if (element % 2==0) return element;
} */

const oddnumbers = Numbers.filter(function oddnumbers(element) {
    if (element % 2==0) return element;
  });

document.querySelector("#odds").innerHTML = oddnumbers;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

const evensnumbers = Numbers.filter(function evensnumbers(element) {
    if (element % 2!=0) return element;
  });

document.querySelector("#evens").innerHTML = evensnumbers;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"


const sumOfArray = Numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue  
  );

document.querySelector("#sumOfArray").innerHTML = sumOfArray;


// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

const multipliedArray = Numbers.map(element => element * 2);

document.querySelector("#multiplied").innerHTML = multipliedArray;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

const Numbers2 = Numbers.map(element => element * 2);

const sumOfMultiplied = Numbers2.reduce(
    (accumulator, currentValue) => accumulator + currentValue  
  );

document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied;
