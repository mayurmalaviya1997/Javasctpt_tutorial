
/**
|--------------------------------------------------
| JavaScript Arrays
|--------------------------------------------------
*/

// array declartion
let class10 = ["mayur1", "mayur2","mayur3", null,undefined, {name:"mayur"}, false, ]  //--> empty array
let class11 = new Array()  // empty array 
let class12 = new Array(100)  // fixed size array 

// console.log(`====>> `,class10.length)
// console.log(`====>> `,class11.length)
// console.log(`====>> `,class12.length)


// how to access element of array
const cars = ["Saab", "Volvo", "BMW","m6", null, 0, false];
console.log(`====>> cars >>>>`,cars[0])
console.log(`====>> cars >>>>`,cars[1])
console.log(`====>> cars >>>>`,cars[2])
console.log(`====>> cars >>>>`,cars[3])
console.log(`====>> cars >>>>`,cars[1000])

// acces elemt using loop
// }

console.clear()
// 
for(let item of cars){
    console.log(`====>> `,item) 
}

/**
|--------------------------------------------------
| Operations with array
clone/ copy array
1. concat
2. slice
3. spread operator ...
|--------------------------------------------------
*/

// right methods
let array1 = ["mayur1", "mayur5"];
let array2 = [].concat(array1);
// console.log(`====>> array2`,array2)


let list = ['apple','banana'];
let listCopy = list.slice();

console.log(`====>> list`,list)
console.log(`====>> listCopy`,listCopy)

let studets = ["amit", "keval", "akash"];
let studetsCopy = [...studets]


// wrong mthod
let arr1 = ["mayur1", "mayur2"];
let arr2 = arr1;  // wrong approach

// console.log(`====>> arr1`,arr1);
// console.log(`====>> arr2`,arr2);


// add, delete element
/*
push , unshift
pop, shift , 
*/
console.clear()

let employee = ["one", "two","three"];

console.log(`====>> before`,employee)
// add last 
employee.push('four')
// add start
employee.unshift("five");
// employee.shift("five");
console.log(`====>> after`,employee)

employee.shift("five")
console.log(`====>> after delete`,employee);

//  why not assign directly / refrence Error

console.clear()

let a =10;
let b = a;
 console.log(`====>> before a>>`,a ,"b>>>",b)
//  a=20;
b = 30;
 console.log(`====>> after  `,a ,b)
 
 console.clear()
 // aaa
let userList1 = ["mayur1","mayur2","mayur3","mayur4"]

//aaa
let userList2 = userList1.slice();

console.log(`====>> before userList1`,userList1, )
console.log(`====>> before userList`,userList2, )

userList2.pop();
userList1.unshift("mayur5")

console.log(`====>> after userList1`,userList1, )
console.log(`====>> after userList2`,userList2, )














