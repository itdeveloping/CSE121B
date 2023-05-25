// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    section: [{ sectionNum: "1", roomNum: "STC 353", enrolled: "26", days: "TTh", instructor: "Bro T" },
    { sectionNum: "2", roomNum: "STC 347", enrolled: "28", days: "TTh", instructor: "Sis A" }]
};
/*
Create a function to set the name and number of the course in the HTML. Pass the course object into your function (remember that you can use the dot notation to access the parts of an object.)
Create another function that will output the sections into the table identified by #sections. You should pass the sections you want rendered into the function.
*/
function setCourseInfo(course) {
    const courseName = document.querySelector("#courseName");
    const coursecode = document.querySelector("#courseCode");
    courseName.textContent = course.name;
    coursecode.textContent = course.code;
}
function renderSections(sections) {
    const html = sections.map(
        (section) => `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    );
    document.querySelector("#sections").innerHTML = html.join("");
}
setCourseInfo(aCourse);
renderSections(aCourse.section);
function enrollStudent(object) {
    let value = document.querySelector("#sectionNumber").value;
    let Course = object.section.map((section) => {
        if (section.sectionNum == value) {
            console.log(object.findIndex(value));
            console.log(section.enrolled);
            console.log("encontrado en seccion 1");
            console.log(section.sectionNum);
        }
    }
    );
    alert(value);
}
document.querySelector("#enrollStudent").addEventListener("click", function (e) {
    enrollStudent(aCourse);
});