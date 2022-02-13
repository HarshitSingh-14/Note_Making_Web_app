const student = {
    name :'huehue',
    age: 10,
    isActive : true
}

//convert this object into a string to be stored in local storage
const studentObjToString = JSON.stringify(student)
console.log(typeof studentObjToString);

// localStorage.setItem('student', studentObjToString);

const toJSON = JSON.parse(studentObjToString)
console.log(typeof toJSONStudent);
console.log(toJSONStudent.age);