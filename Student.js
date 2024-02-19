export default class Student {
    constructor (fullname){
        this.fullname = fullname,
        this.courses = []
    }
    
    registerCourse(course) {
        this.courses.push(course)
    }
    
    listCourses(){
        const courses = [...this.courses]
        console.log(courses)
    }
}
