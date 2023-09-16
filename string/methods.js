
// String length
// String toUpperCase()0
// String toLowerCase()
// String concat()

// String slice()  and splice()
// String substring()
// String substr()

/**
|--------------------------------------------------
| slice // slice(startIndex, endIndex(optional))   // splice()
|--------------------------------------------------
*/

// MAYUR
// 01234  
let str1 = "Mayur Malaviya";
// let strCut1 =  str1.slice(1,5); 
// let strCut1 =  str1.slice(); 
// let strCut1 =  str1.slice(-1);
// let strCut1 =  str1.slice(-8, -4);

// console.log(`====>> strCut1`,strCut1);
// console.log(`====>> str1`,str1.slice());


/**
|--------------------------------------------------
| substr()	Extracts a number of characters from a string, from a start index (position)
// syntax : substr(startIndex , numberofCharacter)
// syntax : substring(startIndex , endIndex)
substring()	Extracts characters from a string, between two specified indices (positions)
|--------------------------------------------------
*/

// mayurMalaviya
// 0123456789012
let str2 = "mayurMalaviya";

// let cut1 = str2.substr();
// let cut2 = str2.substring();
// console.log(`====>> cut1>>`,cut1)
// console.log(`====>> cut1>>`,cut2)

// let cut1 = str2.substr(5,5); // S- index E- number of chracters
// let cut2 = str2.substring(5,5); // index - SE
// console.log(`====>> cut1>>`,cut1)
// console.log(`====>> cut1>>`,cut2)


let cut1 = str2.substr(-2); // 
let cut2 = str2.substring(); // 
console.log(`====>> cut1>>`,cut1)
console.log(`====>> cut1>>`,cut2) 



// let str2 = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, nostrum.";


/**
|--------------------------------------------------
| String trim()
String trimStart()
String trimEnd()
|--------------------------------------------------
*/


let str3 = "    mayur      malaviya     ";
console.log(`====>> str3`,str3.trim())
console.log(`====>> str3`,str3.trimStart())
console.log(`====>> str3`,str3.trimEnd());

document.write(str3);


/**
|--------------------------------------------------
| String split()  // syntax  split(charater)
 -> return array 

|--------------------------------------------------
*/


let str5 = "mayur@malaviya, mayur1@mayur1" // why ? 

// let arr = str5.split(','); // reuirement 1 sperate from comma
// let arr = str5.split('@'); // reuirement 1 sperate from @ sign
// let arr = str5.split('m'); // reuirement 1 sperate from M sign

let str6 = "mayur malaviya"
let arr = str6.split()
console.log(`====>> arr>>>> `,arr);

// document.write(arr)

// Array ?
let name =  "Mayur";
let fruits = []

// let arr = []
// let obj = {} --> scope

// if(true){

// }

// function sum() {
    
// }

let a;
// let a;
{
    let a;
}
// let a;
{
    let a;
}

let userData = {} // object

/**
|--------------------------------------------------
| charAt()  // return  character at given index
|--------------------------------------------------
*/

let text = "HELLO WORLD";
let letter = text.charAt(50);
console.log(`====>> `,typeof letter )
console.log(`====>> `,typeof text[50] );

if(text[50]){
    console.log(`====>> text[50]>>>> `,text[50])
}else{
        console.log(`====>> `,)
}

/**
|--------------------------------------------------
| concat()  // string , array

// return new stirng with conacat them
|--------------------------------------------------
*/

let str7 = "mayur1 "
let str8 = "mayur2"
let str9 = "mayur3"

str7 = str7.concat( str8," @ " ,str9)
console.log(`====>> str7`,str7);


/**
|--------------------------------------------------
| includes()   // string, array
// return boolean value
|--------------------------------------------------
*/

let str10 = "Hello world, welcome to the universe.";
let result1 = str10.includes("world");
let result2 = str10.includes("mayur");

console.log(`====>> result`,result1)
console.log(`====>> result`,result2)

let fruitsList = ['apple', 'banna', 'kiwi', 'orange'];

console.log(`====>> fruitsList `,fruitsList.includes('kiwi'))

/**
|--------------------------------------------------
| replace(),replaceAll
// what is regular expression   /your cases/gi
g-> global
i--> in-case-sensitive 
|--------------------------------------------------
*/

let str11 = "Visit Microsoft! Microsoft Microsoft Microsoft";
// let result3 = str11.replace("Microsoft", "W3Schools");
// let result4 = str11.replaceAll("Microsoft", "W3Schools");

// requiremnent  -> match calpical  Microsoft, microsoft

let result5 = str11.replaceAll(/mIcRoSoFt/gi, "W3Schools");
// let result5 = str11.replace(/mIcRoSoFt/gi, "W3Schools");
// let result5 = str11.replaceAll(/mIcRoSoFt/gi, "W3Schools");

// console.log(`====>> result`,result3)
// console.log(`====>> result`,result4)
console.log(`====>> result`,result5)

// problem = "mayur1 mayur2 mayur8"  --> regex

/**
|--------------------------------------------------
| match()
|--------------------------------------------------
*/

let str12 = "The rain rain rain rain in SPAIN stays mainly in the plain";
let str13 = str12.match("rain");
console.log(`====>> str13`,str13);

/**
|--------------------------------------------------
| search()
|--------------------------------------------------
*/
let str15 = "Mr. Blue has a blue house";
let position = str15.search("Blue");
console.log(`====>> position`,position);


/**
|--------------------------------------------------
| fromCharCode();
|--------------------------------------------------
*/

let char = String.fromCharCode(65);
console.log(`====>> char`,char);

for(let i =65; i<=90; i++){
    console.log(`====>> ${i} -> `,String.fromCharCode(i))
}


// number to string
let a11 = "10.15";
let a12 = 10.15;

let a13 = parseFloat(a11)+parseFloat(a12);

console.log(`====>> a13`,a13);

// string to number

let a14 = 10;
let a15 = toString(a14);

console.log(`====>> a15`,typeof a15);

let fristName = "Priyanka Vaghani";

let user_Name = fristName.slice(2,10);

console.log("==> user_Name ==> ",user_Name);

// iyanka V


let n=5
for(i=1; i<=n; i++){
    if(i%2==0){
        console.log(">>EVEN>>",i)
    }else{
        console.log(">>ODD>>",i)
    }
    
    
}

let a5=10;
let b5="aa"
let sum=a5*b5;
console.log("Total Is",typeof sum);
console.log(`====>> `,typeof null);







