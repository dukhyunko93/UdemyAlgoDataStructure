window.addEventListener('DOMContentLoaded', (event) => {

    class Student{
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
            this.showOnDom()
        }

        showOnDom = () => {
            let studentNameDiv = document.querySelector(".studentName")
            let studentUl = document.createElement("ul")
            studentUl.innerHTML = `
                <li>First Name:${this.firstName}</li>
                <li>Last Name:${this.lastName}</li>
                `
            
            studentNameDiv.appendChild(studentUl)
        };
    }

    let firstStudent = new Student("Duke", "Ko");
    let secondStudent = new Student("James", "Rhee");

    // const getStudentName = (student) => {
    //     let studentNameDiv = document.querySelector(".studentName")
    //     studentNameDiv.innerHTML = `
    //         <ul>
    //             <li>First Name:${student.firstName}</li>
    //             <li>Last Name:${student.lastName}</li>
    //         </ul>
    //         `
    // }

    // getStudentName(firstStudent);
});




    // node class_structure.js