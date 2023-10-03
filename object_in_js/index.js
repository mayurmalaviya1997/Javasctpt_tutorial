
/**
|--------------------------------------------------
| Objects in JS
syntax
let varible = {
    key/properties1 : value,
    key/properties2 : value,
    key/properties3 : value,
}
|--------------------------------------------------
*/

// declaration
let carFiat = {} // empty object
let carFiat1 = new Object() // empty object

console.log(`====>> `, typeof carFiat1);
let arr = [1, 2, 3, 4, 5]
console.log(`====>> `, typeof arr);


// console.clear()
// key name must not same
let employee = {
    name: "mayur1",
    age: 22,
    email: "mayur@yopmail.com",
    addess: "tapt darshan",
    "1full 1name": "mayur1 new",
    "@NAME": "hhhh"
}

let employeeCopy = { ...employee };
// to add new key with value in object 
employeeCopy.contact = "8888888888"

console.log(`====>> employee`, employee);
console.log(`====>> employee`, employeeCopy);

console.clear()

/**
 *  get data from object
 *  dot notation
 *  bracket notation
 * 
 * stntax :  objectName.keyName
 * **/
let employee2 = {
    name: "mayur1",
    age: 22,
    email: "mayur@yopmail.com",
    addess: "tapt darshan",
    "full name": "mayur1 new",
    "@NAME": "hhhh"
}

let emailAddrss = employee2.email;
let employee3 = {};
employee3.emailAddrss = employee2.email;


// console.log(`====>>employee2 `, employee2)
console.log(`====>>employee3 `, employee3)

// bracket notation : objName["keyName"]
employee3.fullName = employee2['full name'];

/***
 * for of loop cannot use with object
*/
// console.clear()
// for (const value of employee2) {
//     console.log(`====>> value`,value)
// }

let arr1 = [1, 2, 3, 4, 5, 6, null, 7, 8, 10];

for (const key in arr1) {
    console.log(`====>> key>>>`, arr1[key])
}


// console.clear()
// delete keys and value from object
let employee5 = {
    name: "mayur1",
    age: 22,
    email: "mayur@yopmail.com",
    addess: "tapt darshan",
    "full name": "mayur1 new",
    "@NAME": "hhhh"
};

delete employee5.age;
console.log(`====>> `, employee5);

/**
|--------------------------------------------------
| Object nesting
|--------------------------------------------------
*/

let allDataTypes = {
    bool1: true,
    null1: null,
    sum: (x, y) => {
        return x + y
    },
    mul: (x, y) => {
        return x * y
    },
    userData: {
        name: "mayur1",
        age: 22,
        location: {
            lat: "100 0 010 ",
            long: "100 444 44"
        }
    }
}

console.log(`====>> alldata`, allDataTypes.userData.location.lat);
console.log(`====>> `, allDataTypes.userData.location.let1);

let total = allDataTypes.sum(10, 20);
console.log(`====>> `, total);


let name = ["smit1", "smit2", "smit3"]
let name1 = name.slice()

console.log(`====>> name1`, name1)

let name2 = ["smit1", "smit2", "smit3"]
let name3 = [].concat(name2)

console.log(`====>>name3 `, name3)


let name4 = [...name1]

console.log(`====>> name4 `, name4);


// console.clear();

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

/*-> Object.keys */

let arrayOfKeys = Object.keys(person);
let arrayOfValues = Object.values(person);
let array = Object.entries(person);
console.log(`====>> arrayOfKeys`,arrayOfKeys) //['firstName', 'lastName', 'age', 'eyeColor']
console.log(`====>> arrayOfValues`,arrayOfValues) //['John', 'Doe', 50, 'blue']
console.log(`====>> array`,array) 


