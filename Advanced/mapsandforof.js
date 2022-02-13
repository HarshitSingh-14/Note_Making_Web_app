var harshan = {
    name: 'I am harshan',
    age: 1,
    isActive : true 
}

var huehue = {
    name: 'I am huehue1',
    age: 2,
    isActive: true
}

var huehue2 = {
    name: 'I am huehue2',
    age: 3,
    isActive: true
}

var huehue3 = {
    name: 'I am huehue3',
    age: 4,
    isActive: true
}

let users = new Map()                           //        COLECTION of objects....   -> for directly sending it to database

console.log(typeof users);
users.set('HARSHAN', harshan)
 users.set('huehue1',huehue)
 users.set('huehue2',huehue2)
users.set('huehue3', huehue3)
 

console.log(users.size);                                    // size 

console.log(users.get('HARSHAN'));

console.log(users.keys());  
console.log(users.values());                              



for (const keys of users.keys()) {      // keys , values
    console.log(keys);
}

for (const values of users.values()) {      // keys , values
    console.log(values.name);
}



// for arrays
for (const [key, values] of users.entries()) {
    console.log(key + '=' + values.name);
}

users.forEach((key, value) => console.log(key + '=' + value.name))


var arrofArr = [['1','one'],['2', 'two'],['3','three']]
var newMap = new Map(arrofArr)
console.log(newMap);