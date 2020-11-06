window.addEventListener('DOMContentLoaded', (event) => {

    class Student{
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }

    let firstStudent = new Student("Duke", "Ko");

    const getStudentName = (student) => {
        let studentNameDiv = document.querySelector(".studentName")
        studentNameDiv.innerHTML = `
            <ul>
                <li>First Name:${student.firstName}</li>
                <li>Last Name:${student.lastName}</li>
            </ul>
            `
        console.log("First Name:",student.firstName);
        console.log("Last Name:",student.lastName);
    }

    getStudentName(firstStudent);
});




    // node class_structure.js