localStorage.setItem('huehue', 'ded');
localStorage.setItem('toDo', 'Dance');


var myHehe = localStorage.getItem('huehue');        //get -> ded
console.log(myHehe);

console.log(localStorage.getItem('toDo'));          //get -> dance

localStorage.setItem('toDo', 'Code')
console.log(localStorage.getItem('toDo'));          //get -> dance


localStorage.removeItem('toDo')
myHehe = localStorage.getItem('toDo')
console.log(myHehe);


//    localStorage.clear();
