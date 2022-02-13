class User {                                                            // -->> class
    constructor(firstname, lastname, rank) {                            // -->> constructor
        this.firstname = firstname;
        this.lastname = lastname;
        this.rank = rank;
    }

    getfullname() {
        var fullname = `${this.firstname} ${this.lastname} is my full name`;        // --> methods
        return fullname;
    }

    editname(newname){
        const myname = newname.split(' ');
        this.firstname = myname[0];
        this.lastname = myname[1];
    }
}




const harsh = new User('Harshan', 'Singh', 1)                   //--> normal object
console.log(harsh);                                     
harsh.editname('Huehue ded');




class Teacher extends User {
    constructor(firstname, lastname, rank, subject ) {
        super(firstname, lastname, rank);
        this.subject = subject;
    }       
    getfullname() {                                                                // --->  find child method if not found runs parent 
        let fullname = `my full name is ${this.firstname} ${this.lastname} and i study ${this.subject}`     
        return fullname
    }

}                                                          // --> inheritence
const john = new Teacher("John", "Anderson", 34,"JavaScript");

console.log(harsh);
harsh.editname('Huehue ded');
console.log(harsh);


console.log(harsh);