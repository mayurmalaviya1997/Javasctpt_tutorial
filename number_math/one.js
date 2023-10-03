
/**
|--------------------------------------------------
| toFixed(), 
Math
ceil(), floor() , min, max , random()
|--------------------------------------------------
*/

let num = 5.4;
let n = num.toFixed();
console.log(`====>> n`,n) // 5
console.log(`====>> ceil `,Math.ceil(1.9))
console.log(`====>> ceil `,Math.floor(1.1))
console.log(`====>> ceil `,Math.round(null));


let randomNum = Math.round(Math.random()*1000)
console.log(`====>> randomNum`,randomNum)