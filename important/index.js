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

// console.log(`====>> `,typeof a1.toString())
// console.log(`====>> `,a1 + a2)


let num1 = BigInt(88888888888888888888888888888888888888);
let num2 = BigInt(222222);
let num4 = 8888888n;
let num5 = 8888888n;

let num3 = num1 + num2;
// console.log(`====>> num3`,num3)
// console.log(`====>> num5`, typeof num5);

/**
|--------------------------------------------------
| Escape charcters
|--------------------------------------------------
*/

let str1 = 'Mayur1 \\ ';

document.write(str1);


/**
|--------------------------------------------------
| How to get user Input in Js
|--------------------------------------------------
*/

// let num10 = prompt("Enter number1")
// let num11 = prompt("Enter number2")
// let num11 = BigInt(parseFloat(prompt("Enter number2")))
// let uaerName = prompt("Enter Your Name")

// console.log(`====>> prompt`,typeof num10, typeof num11)
// console.log(`====>> prompt`,uaerName)

/**
|--------------------------------------------------
| getElementById()
|--------------------------------------------------
*/

// let p_tag_age = document.getElementById('age') ;
// p_tag_age.innerHTML = "my new age is 24"

// console.log(`====>> p_tag_age`,p_tag_age.innerHTML)


/**
|--------------------------------------------------
| Looping though index
|--------------------------------------------------
*/


let name1 = "MAYUR";
// desired out put = RUYAM
let temp = "";
for(let i = name1.length ; i >= 0 ; i-- ){
    // console.log(`====>> `,name1.charAt(i))
    // console.log(`====>> `,name1[i])
    // temp.concat(name1.charAt(i))
    temp =  temp + name1.charAt(i)
}
console.log(`====>> temp`,temp);

/**
|--------------------------------------------------
| confirm()
|--------------------------------------------------
*/

// let wantToPlayAgain = confirm("Want to Play Again ?")
// console.log(`====>> wantToPlayAgain>>>>`,wantToPlayAgain);



/**
|--------------------------------------------------
| Optional Chaining
|--------------------------------------------------
*/

// console.clear()
let obj6 ={
    name: "mayur",
    bioData:{
        fullName:"Mayur Malaviya",
        age:22,
    }   
}

console.log(`====>> obj6`,obj6?.usertData?.contact)


/**
|--------------------------------------------------
| OR 
|--------------------------------------------------
*/

let obj7 ={
    name: undefined,
    bioData:{
        fullName:"Mayur Malaviya",
        age:22,
    },
    // hobbies : ["cricket", "movie"]
    hobbies : null
}

// let name  =  undefined || false || 0 || null || "";
let name  =  obj7.name || ""
let surname = "malaviya"

let full = name.concat(surname)

console.log(`====>> full`, full );

// let oneHob = obj7?.hobbies[0] || []

obj7.hobbies?.push("chess");

console.log(`====>> oneHob`,obj7.hobbies);















