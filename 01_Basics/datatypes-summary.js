// primitive 
// 7 types :String : Number :Boolean :null :undefined : Symbol : BigInt:

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId= Symbol('123')


console.log(id==anotherId);

//const bigNumber = 3625434726325428167353n

//Reference (Non primitive)

//Array ,Objects ,Function;

const heros = ["salmankhan","shahrukh khan","Amirkhan"];
let myObj={
    name:"Hashim",
    age:24,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp);



//***** */

// Stack (Primitive), Heap (Non-Primitive)

let myLearningname="Github"

let anothername = myLearningname
anothername ="VsCode"

console.log(myLearningname);
console.log(anothername);

let userOne ={
    email :"raza.@gmail.com",
    upi : "74600@ybl"
}

let userTwo = userOne
userTwo.email ="hashim@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);