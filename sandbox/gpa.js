
  
  function lookupGrade(grade) {
    // converts the letter grade to it's GPA point value and returns it
  }
  
  function calculateGpa(grades) {
    // gets a list of grades passed in
    // convert the letter grades to gpa points
    // calculates the GPA
    // return the GPA
  }
  
  function outputGpa(gpa, selector) {
    // takes a gpa value and displays it in the HTML in the element identified by the selector
  }
  
  function clickHandler() {
    // when the button in our html is clicked:
    // get the grades entered into the input
    // calculate the gpa from the grades entered
    // display the gpa
    let Grades = getGrades("#grades");
    console.log('Get grades');
    console.log(Grades);
  }

function getGrades(inputSelector) {
    // get grades from the input box
    // split them into an array (String.split(','))
    // clean up any extra spaces, and make the grades all uppercase. (Array.map())
    // return grades
    let Grades = document.querySelector(inputSelector).value;
    let GradesArray = Grades.split(',');

    let GradesCleaned = GradesArray.map(grade => grade.trim().toUpperCase());
    return GradesCleaned;
  }

  document
  .querySelector("#submitButton")
  .addEventListener("click", clickHandler);

