// const sayHello = function (name) {
//     return "hey there , "+ name +" huehe "
// }

// // or 

// const sayHello = (name) => {
//     return " hello there " + name + "jing jing " 
// }

// // or

const sayHello = (name) => `hello there  ${name}` 

console.log(sayHello("Harshan "));


const toDo = [{
    tittle: 'Buy Bread',
    isDone: true
}, {
    tittle: 'Go to Gym',
    isDone : true
    }, {
    tittle: 'Complete React',
    isDone: false
    }]



    // returns only true objects 
const thingsDone = toDo.filter((toDo) => {  // filtering only true 
    return toDo.isDone === true;
})

console.log(thingsDone);


const loginDetails = []
// login for getting details from Db

const loginId = loginDetails[0]

if (loginId !== undefined) {
    console.log('Allow user to login');
}
else {
    console.log('Auth failure ');
}

