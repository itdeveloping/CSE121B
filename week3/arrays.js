//Activity 1 - Map #

let letters = ["one","two","three"];
console.log(letters);
let List = letters.map(x => "<li>"+x+"</li>")
let FinalList=List.join('');
document.querySelector("#myList").innerHTML=FinalList;

//Activity 2 - Map #

let Grades =  ['A', 'B', 'A'];
console.log(Grades);
let gpaPoints= Grades.map(function(gpa){ 
    return (gpa==='A') ? '4' : '3.3';
})
console.log(gpaPoints);

//Activity 3 - Reduce #

let Sum = gpaPoints.reduce(
    (accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue)
);
console.log(Sum);

//Activity 4 - Filter #

let Fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
let FruitsLonger = Fruits.filter( function(fruit){
    if (fruit.length>6) return fruit;
})
console.log(FruitsLonger);

//Activity 5 - indexOf #

let values = [12, 34, 21, 54];
let luckNumber = 24;
if (values.indexOf(luckNumber)>=0)
    console.log("Lucky number is in array");
else
    console.log("Lucky number is not in the array");


