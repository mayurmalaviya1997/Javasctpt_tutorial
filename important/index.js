// JavaScript Types are Dynamic

/**
|--------------------------------------------------
| NaN
|-------------------------------------------------
*/

// let a =10;
// let b = "aa";

// let total = a/b; 

// console.log(">>>>>> ", typeof NaN)

/**
|--------------------------------------------------
| Type Conversion / type casting
|--------------------------------------------------
*/

//1. String To Number.

let a = "10.5";
let b = 10.5; 
// method1 : parseInt, parseFloat, Number() , before variable add "+"

// console.log(`====>> parseInt >`,typeof parseInt(a))
// console.log(`====>> before >`,typeof a);

// let total = parseInt(a) + parseInt(b);
// let total = parseFloat(a) + parseFloat(b);
// let total = Number(a) + Number(b);
let total = +a + +b;
console.log(`====>> total`,total);

//2. Number to String.

let a1 = 100; 
let a2 = String(200);

// methods : after variable +"", toString() , String()

console.log(`====>> `,typeof a1.toString())
console.log(`====>> `,a1 + a2)


let num1 = BigInt(88888888888888888888888888888888888888);
let num2 = BigInt(222222);
let num4 = 8888888n;
let num5 = 8888888n;

let num3 = num1 + num2;
// console.log(`====>> num3`,num3)
console.log(`====>> num5`, typeof num5);

/**
|--------------------------------------------------
| Escape charcters
|--------------------------------------------------
*/

let str1 = 'Mayur1 \\ ';

document.write(str1)













