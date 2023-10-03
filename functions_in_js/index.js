debugger
let aa1IsLocal;
var aa2IsGlobal;
var aa3IsGlobal;
var aa4IsGlobal;

{
    var aa5IsGlobal;

}


/**
|--------------------------------------------------
| Functions
|--------------------------------------------------
*/

/**
 * Function Declaration/defination
 * Function calling
 * Arguments and parameter
 * Methods vs Functions
 * Function Expression
 * Arrow Function
 *  
 * Nesting of Function
 * Hoisting of Funtions
 * Callback functions
 *  
 * Default Parameter
 * First-class Functions
 * pass value - pass by refrence 
 * 
 * Functions returning Functions
 * Default Parameters
Rest Parameters
Parameter Destructuring
*/

// function nameOfFunction (){}
/*
"" '' ``
{}  scope
() -> function
[] ==> array

let name = {} --> obj

declartion
calling
argument
parameter

with argument
without arguments
with arg, with return;
wthout arg, wthout return 
*/

// declation/defination  
function sum(arg1, arg2) {  // arguments
    // console.log(`====>> arg1`,arg1)
    // console.log(`====>> arg2`,arg2)
    let total = arg1 + arg2;

    return total
    console.log(`====>> the end `,)

    // return [] []
    // return {} {}
    // return {} 
    // return 0;
}


// sum(10, 10) // function calling/ parameter
let outPut1 = sum(11, 10)
// let outPut2 = sum(11000, 10)
// let outPut3 = sum(11, 15454540)
// let outPut4 = sum(14545341, 1354540);

console.log(`====>> outPut`, outPut1)
// let num1 = 10;
// let num2 = 20;

// let total = num1+num2



/**
|--------------------------------------------------
| Type of Function
    1. function declaration
    2. function expression
    3. Annonymus Function
    4. Arrow function  (ES6)
|--------------------------------------------------
*/

// function multi (){

// }


// expression 
let multi1 = function functionName() {
    return "MAYUR1"
}

let multi2 = function () {
    return "MAYUR2"
}

console.log(`====>> multi1 `, multi2())

// Annonymus Function 
let multi3 = function () {
    return "MAYUR2"
}


let str1 = "dhdfjhd ma yur1    may ur1   may ur1 1 mayu r1x";

let op = str1.match(/mayur/gi);

console.log(`====>> op`, op);

// arrow type functions

// let variable  = ()=>{}



/**
|--------------------------------------------------
| Nesting of function
|--------------------------------------------------
*/
function aa() {

    function bb() {

        function cc() {
            return "this is CC"
        }
        cc() // right
        return "this is bb"
    }
    bb() // right
    // return "this is aa"
    return bb()
}

let dd = aa();
console.log(`====>> dd`, dd)
// bb() // wrong
// cc() // wrong


function calculationFn(a, b) {
    console.log(`====>> `, a, b)
    return a + b
}


function outer1(a, b) {

    // caltion done then 
    // let aaa = calculationFn(b,a)
    // return aaa;

    return calculationFn(b, a) // correct
}

function outer2() {

}

let total = outer1(10, 20);
console.log(`====>> total`, total)

/**
|--------------------------------------------------
| Hoisting of function
access before initialization/declaration
|--------------------------------------------------
*/

itWillHoist()
// userName1() // wrong

// console.log(`====>> userName1>>>`,userName1);
let userName1 = function () {
    console.log(`====>> it will not hoist `,)
};
// console.log(`====>> userName1>>>`,userName1);

function itWillHoist() {
    console.log(`====>> it is hoistable`,)
}


/**
|--------------------------------------------------
| Callback function
|--------------------------------------------------
*/

function fullName(fName, lName) {
    console.log(`====>> fullName>>>>`, fName + " " + lName)
}

function printName(a, b, c) {
    c(a, b)
}

// printName("Mayur");
// printName("Amit");

printName("Mayur", "malaviya", fullName)


//Examle -2 

let value = 1;

console.log(`====>>  before`, value)
function aaa (value1 ){
    console.log(`====>> value1 before`,value1)
    value1 = 2;
    console.log(`====>> value1 after`,value1)
}
aaa(value)
console.log(`====>> after`, value);



prompt(`
create PIN 
reset PIN 
cash add /credit
cash withdraw
`)


