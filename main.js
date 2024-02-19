import Student from './Student.js'
import Course from './Course.js'




// Skriv även ut studententens kurser (listCourses()) samt information om kurserna (getCourseInfo()).
// main.js ska vara kopplat till index.html och informationen om studenterna och kurserna ska loggas ut i consolen.

// Test
const student1 = new Student("Sandra");
const student2 = new Student("Torsten");

const course1 = new Course("HTML", 10);
const course2 = new Course("CSS", 50);

student1.registerCourse(course1); 
student1.registerCourse(course2);

student2.registerCourse(course1);
student2.registerCourse(course2);

student1.listCourses(); // Ska logga: [{ name: "HTML", yhp: 10 }, { name: "CSS", yhp: 50 }, { name: "Javascript", yhp: 2000 }]
student2.listCourses(); // Ska logga: [{ name: "HTML", yhp: 10 }, { name: "CSS", yhp: 50 }]

course1.getCourseInfo(); // Ska logga: HTML 10
course2.getCourseInfo(); // Ska logga: CSS 50



