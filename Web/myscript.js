// const myElement=document.querySelectorAll ('.classone')
// console.log(myElement[0]);

// const myPElements = document. querySelector('p')
// myPElements.textContent = 'I am being changed using JS'

const mypelements = document.querySelectorAll('p')
mypelements.forEach(function(p){
    p.textContent=" Huehue"
})



// console.log(document.getElementById('idone'));                           --> never used 
// console. log(document. getElementsByClassName(''));
 
const myE = document.querySelectorAll('p')      // # -> for id       .-> for class
console.log(myE);                               //-->  stores in array