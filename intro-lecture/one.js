/**
|--------------------------------------------------
| common thing for every programming language
|--------------------------------------------------
*/

/*
variable
data type
operator
loops
switch
conditional statements
function
syntax
reserve keyword
*/


/**
|--------------------------------------------------
| History
|--------------------------------------------------
*/

//Introduction

// ES-1  1997
//ES-2 -1998

// ES-5 - 2009
// ES-6 - 2015
// ES-7-2016
// ES-13 - 2022 // latest 
// Es-14 -2023

/**
|--------------------------------------------------
| How To Link Js 
|--------------------------------------------------
*/
/**
|--------------------------------------------------
| Where To see Output
|--------------------------------------------------
*/

// console.log()
// window.alert()
// document.write()
// document.getElementById('write id here').innerHTML

// meaningful console to easily idetification 
// ex : console.log() --> simple
// ex : cosole.log("====>> write anything ", variable name here) --> meaningful 

/**
|--------------------------------------------------
| Statements Tremination  ;
|--------------------------------------------------
*/

/**
|--------------------------------------------------
| Commnets in JS
|--------------------------------------------------
*/

// single-Line    //   ctrl + fwdSlash
// console.log("HEllo !!!!")

// multi-line
/*
line-1
line-1
line-1
line-1
line-1
*/  

/**
|--------------------------------------------------
| Common Definations
|--------------------------------------------------
*/

// value and datatype
// variable
// variable declartion
// variable re-declaration
// assign value to variable  = 
// change value Or value-over-ride OR re-assign value to variable


'use strict'  // to reduce misatke in coding

//varibale and declartion

// Js is dynamically typed languages
// c, c++ are ststic typeprogramming languages

// reserve key word --> those word cannot use in varible declartion

/**
|--------------------------------------------------
| variable Declaration
|--------------------------------------------------
*/

// local scope and global scope
// 1.var
// 2.let
// 3.const  

// declartion examples 
var userName; // variable is declare but value is not assign to it 
let userName1;
const userName3 = "mayur"; // assign value when varible is declare

// declartion
var name = "mayur malaviya";
let surname = "malaviya";
const email = "mayurmalaviya@yopmail.com"

var name = "prince"  //  -->redeclartion  of "name" variable
// let surname = "desai";  // --> cannot redeclare
// const email = "prince@yopmail.com"  // ---> cannot redeclare 

console.log("====>> name >>> ", name);
console.log("====>> surame >>> ", surname);


let  a = 10;
console.log(`====>> pre a>>>`,a);
// let a = 20; // redeclation
a = 20;
console.log(`====>> post a>>>`,a);

const b = 40;
// b= 50; // can not reassign 
console.log(`====>> b `,b);


//varibale declartion rules
// 1. can not have space
// let user name = "mayur malaviya" // wrong
// let username  = "mayur malaviya " // right

//2. case sensitive 
let user = "mayur";
let USER= "prince";

//3.can not start with numeric value and spcial charateres other than (_, $)
// let 12user = "mayur" // wrong
let _user = "mayur" ;
let $mayur = "prince";
let userName5 = "mayur5";
let _111111111 = "mayur6" // valid
// let 1wrong1 = "mayur"
// let @wrong1 = "myaur"
// let user@Name = "mayur" // wrong
console.log(`====>> `,_111111111);

// let user@name = "mayur7"  // wrong
let user_name = "mayur7" // right


s = "mayur";
console.log(`====>> s`,s);

// 4. can not use reserve key word.

// let function = "mayur10";  // wrong 'function' is reserve keyword
// console.log(`====>> function`,function)

console.log("external console!!")


var name = "mayur malaviya"; // declaration 
var name = "prince desai"; // redeclaration 
var name = "prince1 desai1"; // redeclaration 


let name1 = "mayur malaviya";
// let name1 = "mayur malaviya"; // redeclaration
name1 = "nimisha" // re-assign value 

const name2 = "mayur malaviya";
// name2 = "new mayur";  // can not re-assign value;


var surname1 = "hhhhh"; // declaration and value assign
let surname2; // declaretion
// const surname;

/**
|--------------------------------------------------
| Task
|--------------------------------------------------
*/


let name  = "Mayur malaviya";
let education = "BE";
let address = "tapi darshan";
let company = "UBS";
let conatct = "99999999";
let emailAddress = "mayur@gmail.com";

console.log("name >>>>>>", name);
console.log("education <<<<<, ",education);
console.log(address);








