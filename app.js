console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person{
    constructor(name, pets, residence, hobbies){
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }
    addHobby(){
    }
    removeHobby(){
    }
    greeting(){ 
        console.log("Hello there!")  
    }
    info(){

    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
class Coder extends Person{
    constructor(name, pets, residence, hobbies, occupation){
        super(name, pets, residence, hobbies);

        this.occupation = "Full stack web developer";
    }
    greeting(){
        console.log("Hey friend!");
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
let coder = new Coder(
    "Emily",
    2,
    "Athens",
    ["running", "soccer", "lifting"],
    "Full stack web developer");

    coder.addHobby("gaming");
    console.log(coder);

    coder.removeHobby("lifting");
    console.log(coder);

    coder.greeting();

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

class Calculator{
    constructor(result){
        this.result = result || 0;
    }

    add(x,y){
        x + y == this.result;
        return this.result;
    }
    subtract(x,y){
        x - y == this.result;
        return this.result;
    }
    multiply(x,y){
        x * y == this.result;
        return this.result;
    }
    divide(x,y){
        x / y == this.result;
        return this.result;
    }

    displayResult(){
        console.log(`Result: ${this.result}`);
    }
}
let myCalculator = new Calculator();

myCalculator.add(2,5);
myCalculator.displayResult();

myCalculator.subtract(3,1);
myCalculator.displayResult();

myCalculator.multiply(2,5);
myCalculator.displayResult();

myCalculator.divide(10,2);
myCalculator.displayResult();
