
/*-> array destructuring */
// const data = ["delta", "alpha", "charlie", "bravo"];
// make varibale directly from array
// let name1 = data[1];
// let name2 = data[2];
// let name3 = data[3];

let [name0, , , name1] = ["delta", "alpha", "charlie", "bravo"];
console.log(`====>> `, name0,)
console.log(`====>> `, name1,)
// console.log(`====>> `,name2,)

// console.clear()
/*->  object */
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
};

let firstName = "mayur" // alredy declared variable can't chnage

let  {firstName: mychoice , age} = person;
console.log(`====>> firstName >>`,mychoice)
console.log(`====>> age >>`,age)


// example-1
let { name10 , name3 } = {name10 :"mayur1" , name2: "mayur2" , name3 :"mayur3"};
console.log(`====>> name10 >>>`,name10);
console.log(`====>> name3 >>>`,name3);

// console.clear()

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const person2 = {
    firstName: "mayur",
    age: 56,
};

//  ...()
let obj3 = { ...person1, firstName:"mayur3" , age:44};
// console.clear()

/*-> Nested Destructuring */
let userData = {
    name:"mayur amlaviya",
    email:"mayur@yopmail.com",
    address : {
        company: { address:"varchaa"},
        home: {name:"nana varachha"},
        permanentAddress:["amreli"]
    }
} 

let { address :{company , home , permanentAddress}} = userData;
console.log(`====>> company`,company)
console.log(`====>> home`,home)
console.log(`====>> permanentAddress`,permanentAddress);
// console.log(`====>> address`,address)

// console.clear()
/*-> Rest : make variable and prepare new object from remaining data */
let userData1 = {
    name:"mayur amlaviya",
    email:"mayur@yopmail.com",
    age:22,
    company :"xyz",
    address:"varachaa",
    dist: "suart"
}

let {name, email, ...vadhelaData} = userData1;
console.log(`====>> name`,name)
console.log(`====>> vadhelaData`,vadhelaData)

/*-> Default Parameter */
let sum = (x = 0,y = 0)=>{
    return x+y;
}
let total = sum(10,20)
let part = total /4;
console.log(`====>> total`,total) 

let fullName1 = (name = "", surName = "")=>{
    return `${name} ${surName}`
} 
console.log(`====>> `,fullName1());

/*-> Parameter Destructuring */
// console.clear()
// let fullNameFn = (obj)=>{
//     return  `${obj.name} ${obj.surName}`
// }


// OR 
let fullNameFn = ( {name, surName , ...rest})=>{
    console.log(`====>> rest`,rest)
    return  `${name} ${surName}`
}
let employee = {
    name:"mayur",
    surName: "malaviya",
    email:"mayur@yopmail.com",
    age:22,
    company :"xyz",
    address:"varachaa",
    dist: "suart"
}

console.log(`====>> `,fullNameFn(employee));

// console.clear()

// let multipleArgument = ({a,b,c,d,e})=>{
//     return 0
// }
// multipleArgument({a:10, b:20, c:30, d:40,e:50})


/*-> funtion returning function */
// console.clear()
function a() {
    function hello() {
        console.log(`====>> hello !!!`,)
        return 0
    }
    return { total:20, hello:hello}
}
let {total : mytotal, hello} = a();

console.log(`====>> `,mytotal)
console.log(`====>> `,hello())

// let b = function hello() {
//     console.log(`====>> hello !!!`,)
// }

