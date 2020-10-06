console.log("welcome to ES6 Classes");

class Organism{
    constructor(organismName){
        this.organismName = organismName;
        this.isAlive = true;
    }
    greeting(){
        console.log(`Hi my name is ${this.organismName}`);
    }
}

let fred = new Organism("Fred");
fred.greeting();

let bob = new Organism("Bob");
bob.greeting();