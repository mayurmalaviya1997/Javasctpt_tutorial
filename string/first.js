// string

// "mayur"
// 'mayur'
// `mayur`

let name  = "mayur"; 
let num1 = 123;
let areYouComing = true;
let userName;
let userName1 = null;


console.log(`====>> name >>`,typeof name )
console.log(`====>> num1 >>`,typeof num1 )
console.log(`====>> areYouComing >>`,typeof areYouComing )
console.log(`====>> userName >>`,typeof userName )
console.log(`====>> userName1 >>`,typeof userName1 ) // Js bug



//  string index

let userName3 = "mayur";

// "M A Y U R"
// 0  1 2 3 4

// how to find length ?

let str1 = "Lorem ipsum dolorsit amet consectetur adipisicing elit. Odit, blanditiis ut optio culpa labore minima nemo modi atque illo reprehenderit."

let lengthOfString = str1.length;
console.log(`====>> lengthOfString`,str1.length);


let str2 = 'str1.length';

let str3 = `str1.length`  //--->> template literal 

// why new string ?

// string operations

// 1. concatination 

let surname1 = "malaviya";

let firstName = "mayur"  // --> camel case
let First_Name // --> snake case

let lastName = "malaviya"

let fullName = firstName + " " + lastName + " " +"mayur1" + "mayur2";

let fullNameNew = `${firstName} ${lastName} sjdhsdgsajdjsadbjsadjsabds`

let str5  = "\nmayur \t malaviya \t tapi darshn"


// concat

// console.log(`====>> fullName`,fullName)
// console.log(`====>> fullNameNew`,fullNameNew)
console.log(`====>> str5`,str5);


// alert("hello in learning JS!!!")

//Accessing characters 

let str6 = "mayur sdssadsad ssdsdsadsad sadsadsad sad assdsad asd asd dds";

console.log(`====>> first character >>>`, str6[str6.length -1])

//Changing the case

let str7 = "mayur"
console.log(`====>> str7>>>> `, str7  );

let capitalName  = str7.toUpperCase();

str7 = "prince desai"

console.log(`====>> capitalName>>>>`, capitalName  )
console.log(`====>> str7>>>>`, str7  );

str7 = "Nimisha";
console.log(`====>> str7>>>>`, str7  );




