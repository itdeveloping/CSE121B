/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let Name = "Oscar Jose Rodriguez Alfaro";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").innerHTML = Name;

// Step 3: declare and instantiate a variable to hold the current year
let ActualDate = new Date();

let Year = ActualDate.getFullYear();

// Step 4: place the value of the current year variable into the HTML file
document.getElementById("year").innerHTML = Year;

// Step 5: declare and instantiate a variable to hold the name of your picture
let PictureName = "images/me.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.getElementById("Picture").setAttribute("src", PictureName);
/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let FavFoods = [" Pozole", " Barbacoa", " Mole", " Tacos de carnitas"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.getElementById("food").innerHTML = FavFoods;

// Step 3: declare and instantiate a variable to hold another favorite food
let AnotherFavFood = " Spaghetti";

// Step 4: add the variable holding another favorite food to the favorite food array
FavFoods.push(AnotherFavFood);

// Step 5: repeat Step 2
document.getElementById("food").innerHTML = FavFoods;

// Step 6: remove the first element in the favorite foods array
FavFoods.shift();

// Step 7: repeat Step 2
document.getElementById("food").innerHTML = FavFoods;

// Step 8: remove the last element in the favorite foods array
FavFoods.pop();

// Step 7: repeat Step 2
document.getElementById("food").innerHTML = FavFoods;
