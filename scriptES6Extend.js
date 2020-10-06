console.log("Extending ES6 Classes");

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

class Snake extends Organism{
    constructor(organismName, venomous){
        super(organismName);
        this.venomous = venomous;
    }
    climbTrees(){
        console.log(`${this.organismName} really likes to climb trees`);
    }
}
let jim = new Snake("Jim", false);
jim.greeting();
jim.climbTrees();

class GilaMonster extends Snake{
    constructor(organismName, venomous, numLegs){
        super(organismName, venomous);
        this.numLegs = numLegs;
    }
}

let gill = new GilaMonster("Gill", true, 4);
gill.greeting();
gill.climbTrees();
console.log(gill.numLegs);