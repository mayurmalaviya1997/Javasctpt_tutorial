
/**
|--------------------------------------------------
length
push 
pop
shift
unshift
concat
slice
splice
join()
toString()
Includes
map
filter
Array.isArray()
some
every
forEach
find
findIndex
findLastIndex
fill
flat
reduce
reverse
sort

|--------------------------------------------------
*/


/** Join , toString : to conver array in string */

const fruits = [["cherry"], "Banana", "Orange", "Apple", "Mango", 0, null, undefined,];

let str = fruits.join("-")
let str1 = fruits.toString()

// console.log(`====>> `,  str);
// console.log(`====>> `, str1);
// console.log(`====>> fruits`,fruits)


/** slice */
const fruits1 = ["Banana", "Orange", "berry", "Apple", "Mango"];
// let copy = fruits1.slice(2)
// console.log(`====>> copy`,copy)
// console.log(`====>> fruits1`,fruits1) 

/** splice :  add, delete , add delete both  */
// syntax : splice( startIndex, number of delete, add new (optional))

// // delete only ;  delete three elemet form 1st index
// let deletedValue = fruits1.splice(1,3) // arg1 - index , arg2- 2 
// console.log(`====>> deletedValue`,deletedValue)
// console.log(`====>> fruits1`,fruits1);

// //add only :- 
// console.log(`====>> old`,fruits1)
// fruits1.splice(2 , 0,"berry new", "hhh");
// console.log(`====>> fruits1`,fruits1)

// // add and delete both
console.log(`====>> old`, fruits1)
// // //add only :- 
let deletedValues = fruits1.splice(0, 2, "berry", "hhh", "hhh2");
console.log(`====>> deletedValues`, deletedValues);
console.log(`====>> fruits1`, fruits1)

// // delete in array

const fruits2 = ["Banana", "Orange", "Apple", "Mango", 0, null, undefined];
// delete fruits2[0];
fruits2.splice(500, 25);

// console.log(`====>> fruits2`,fruits2.length)

//// Includes
const array1 = [1, 2, 3];
console.log(array1.includes(2));
// Expected output: true
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
// Expected output: true
console.log(pets.includes('at'));
// Expected output: false

/*-> Map 
similar to loop , check all elemets of array
return new array , 
not chnge in origial array
*/

console.clear()
const array7 = [1, 4, 9, 16, "mayur", { name: "mayur" }];

let outPut = array7.map((item) => {
    console.log(`====>> item>>>`,item) 
    return item * 2
});

console.log(`====>> outPut`,outPut)
// console.log(`====>> array7`,array7)

// Expected output: Array [2, 8, 18, 32]

/*-> Filter */


const array8 = [85, 47, 35, 23, 20, 70, 99, 91, 95, 65, 78, 60];

let grade1 = array8.filter((item) => {
    if (item >= 90) {
        return item
    }
})
let grade2 = array8.filter((item) => {
    if (item < 90 && item >= 70) {
        return item
    }
});

let grade3 = array8.filter((item) => {
    if (item >= 35 && item < 70) {
        return item
    }
})

let grade4 = array8.filter((item) => {
    if (item < 35) {
        return item
    }
})

// add gracing marks 
let newGrade4 = grade4.map((item, index) => {
    console.log(`====>> index`, index)
    return (35 - item) + item
})

console.log(`====>> grade1`, grade1)
console.log(`====>> grade2`, grade2)
console.log(`====>> grade3`, grade3)
console.log(`====>> grade4`, grade4)
console.log(`====>> newGrade4`, newGrade4)
console.log(`====>> array8`, array8)


/*-> diffrent variants / short syntax */
const array9 = [85, 47, 35, 23, 20, 70, 99, 91, 95, 65, 78, 60];
let newArr = array9.map((item, index) => item + 3);
let newArr1 = array9.filter(item => item > 25);

console.log(`====>> newArr`, newArr)

/*-> isArray()	Checks whether an object is an array */
let arr = [];
let arr2 = {};
console.log(`====>> arr`, Array.isArray(arr))
console.log(`====>> arr2`, Array.isArray(arr2))

// console.clear()
/*->  some , every .forEach */
const array10 = [85, 47, 35, 23, 70, 99, 91, 95, 65, 78, 60];

let returnValue1 = array10.some((item) => item > 20);  // atlease one true
let returnValue2 = array10.every((item) => item > 20);  // must true for each element 
array10.forEach((item) => console.log(`====>> item`, item));  // only for loop through elemets of array ,not return  anything
console.log(`====>> returnValue1`, returnValue1);
console.log(`====>> returnValue2`, returnValue2);

// console.clear()
/*-> reverse */
const fruits10 = ["Banana", "Orange", "Apple", "Mango"];

console.log(`====>> fruits10`, fruits10);
fruits10.reverse()
console.log(`====>> fruits10`, fruits10)


// console.clear()
/*-> find (very important)  ,findIndex*/
const fruits11 = ["Banana", "Orange", "Apple", "Mango", "Orange",];
let matchedValue1 = fruits11.find((item) => item === "Orange1");  // give value directly
let matchedValue2 = fruits11.filter((item) => item === "Orange1"); // give array which includes value
let matchedIndex3 = fruits11.findIndex((item) => item === "Orange1");  // return index of match case from start
let matchedIndex4 = fruits11.findLastIndex((item) => item === "Orange1"); // return index of match case form end
console.log(`====>> matchedValue1 >>>`, matchedValue1);
console.log(`====>> matchedValue2 >>>`, matchedValue2);
console.log(`====>> matchedIndex3 >>>`, matchedIndex3);
console.log(`====>> matchedIndex4 >>>`, matchedIndex4);

/*-> fill */
// syntax : fill(new value, starIndex, endIndex) //  add 1 in add index 
let emptyArray = ["Banana", "Orange", "Apple", "Mango", "kkkkk"];
emptyArray.fill("mayur", 2, 4)
console.log(`====>> fill >>>`, emptyArray);

// console.clear()
/*-> flat()	Concatenates sub-array elements */
// let arrayInArray = [ "one" , ["two" , ["three", "four"] ] , "six"]
let arrayInArray = [
    "one",
    [
        "two", "three",
        [
            "four",
            [
                "five"
            ]
        ]
    ]
]

let arr1 = arrayInArray.flat(3);
console.log(`====>> arr1`, arr1)
console.log(`====>> arrayInArray`, arrayInArray)

/*-> reduce()	Reduce the values of an array to a single value (going left-to-right) */
let productPrices = [10, 20, 10, 15, -20];
let totalPrice = productPrices.reduce((total, item) => { return total + item }, 1)

// 0 +10 > 10
// 10 +20 > 30
// 30 + 10 > 40
// 40 + 15 > 55
// 55 + 15 > 70
// 70 + 10 > 80
console.log(`====>> totalPrice`, totalPrice)


/*-> sort()	Sorts the elements of an array */
// console.clear()
let studentMarks = [10, 20, 10, 15, 122, "b", "a", "A", "B", 96, 97,];
console.log(`====>> studentMarks before >>>.`, studentMarks)
// let newArrAfterSort = studentMarks.sort() 
// let newArrAfterSort = studentMarks.sort( (a,b)=> { return a - b})  // small to learge
let newArrAfterSort = studentMarks.sort() // small to learge
console.log(`====>> newArrAfterSort after >>>.`, newArrAfterSort.sort((a, b) => { return a - b }))
// console.log(`====>> studentMarks after >>>.`,studentMarks)

/*-> import thing to remember */
// console.clear()
const a = 10
// a= 20;
const arr25 = [1, 2, 3, 4];
// arr25 = [] // wrong : type Error


/*-> What array of Object */
let studentList = [
    { _id: 1,rollNum:1, name: "student1", surName: "surname1", marks: 20, age: 11, email: "stydent1@test.com" },
    { _id: 2,rollNum:2, name: "student2", surName: "surname2", marks: 35, age: 11, email: "stydent2@test.com" },
    { _id: 3,rollNum:3, name: "student3", surName: "surname3", marks: 55, age: 11, email: "stydent3@test.com" },
    { _id: 4,rollNum:4, name: "student4", surName: "surname4", marks: 65, age: 11, email: "stydent4@test.com" },
    { _id: 5,rollNum:5, name: "student5", surName: "surname5", marks: 75, age: 11, email: "stydent5@test.com" },
    { _id: 6,rollNum:6, name: "student6", surName: "surname6", marks: 85, age: 11, email: "stydent6@test.com" },
];

/*-> find student which have email address : stydent3@test.com */
let student = studentList.find( (item )=> item.email === 'stydent3@test.com');
console.log(`====>> student`,student)

/*-> make new student list who has marks morethan 65 */
let newArrayWithSurname = [];
for (const item of studentList) {
    if (item.marks >= 65) {
        newArrayWithSurname.push(item)
    }
}
console.log(`====>> newArrayWithSurname`, newArrayWithSurname);



// let moreThan65 = studentList.filter((item) => {
//     if (item.marks >= 65) {
//         return item;
//     }
// });
// console.log(`====>> moreThan65`,moreThan65)
/*-> make new array which have full name of all students  */
// desiredoutput ; ["student1 surname1" ,"student2 surname2","student3 surname3"]

// forof
// let  newArrayWithSurname =[];
// for (const item of studentList) {
//     newArrayWithSurname.push(`${item.name} ${item.surName}`)
// }
// console.log(`====>> newArrayWithSurname`,newArrayWithSurname);

// let newArrayWithSurname = studentList.map( (item) =>{
//     return `${item.name} ${item.surName}`
// })
// console.log(`====>> newArrayWithSurname`,newArrayWithSurname);


/*-> print name and surname : forof, forEach, map */
// studentList.map( (item) =>{
//     console.log(`====>> item`,`${item.name} ${item.surName}`)
// })
// studentList.forEach( (item) =>{
//     console.log(`====>> item`,`${item.name} ${item.surName}`)
// })
// for (const item of studentList) {
//     // console.log(`====>> item`,item.name + " " + item.surName)
//     console.log(`====>> item`,`${item.name} ${item.surName}`)
// }


//  ctrl + home  -> first line of file
//  ctrl + end  -> last line of file
// end  -> end of line
// home -> start of line
// crtl + enter -> to go to new line 
// shift + alt + down arrow key  // to copy line 
// alt + up or down arrow ket  // to move line up and down
// alt + left  arrow key // to move last coding location
// alt + right  arrow key // to move foreward coding location
// alt + clik  // to make multiple cursor

console.clear()

// Doubt solution

const months = ['march', 'Jan', 'jjj','Feb', 'Dec' , 'March'];
// console.log(`====>> months`,months)
// months.sort();
// console.log(`====>> months`,months)

// let numericArray = []

// let arr22 = [0 ,5 , "mayur" , {name:"mayur",}, null, undefined];
// arr22.map( (item, index)=>{
//     if(typeof item === 'number'){
//         numericArray.push(item)
//     }else if(typeof item === 'string'){

//     }else if(typeof item === 'object'){
        
//     }else{
        
//     }
// })















