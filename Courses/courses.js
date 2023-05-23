
// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
};
let names = ["oscar","jose","rodriguez","alfaro"];

let join = names.map (
    (element)=> '${element}'
    
    );
console.log(join.join(""));

function RenderHtml(section) {
  let html = section.map(
    (section) =>
      `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`
  );
  document.querySelector("#sections").innerHTML = html.join("");
}
function CourseInfo(aCourse) {
  document.querySelector("#courseName").innerHTML = aCourse.name;
  document.querySelector("#courseCode").innerHTML = aCourse.code;
  console.log(aCourse.sections[0].sectionNum);
}
CourseInfo(aCourse);
RenderHtml(aCourse.sections);
