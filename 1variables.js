const accountId = 12345;
let accountEmail = "sp@gmail.com";
let accountPass = "123";
accountCity = "satna";
let samosa;


// accountId = 2;   //not allowed
accountEmail = "newemail@gmail.com";
accountPass = "34";

console.log(accountId, accountEmail, accountPass, accountCity);
console.table([accountId, accountEmail, accountPass, accountCity, samosa]);

//1- do not use var at all, bcz of issue in block scope and functional scope.
//2- prefer not to declare a variable without let, const. Although it is safe in js, but prefer not to do so.
//3- if variable is declared but not intialised, no problem.(*only in let, not in const).


let x = null;  //completely empty.    => null
let y;         //not initialized yet. => undefined
const id = Symbol('123') //symbol => unique and immutable
const newId = Symbol('123') //symbol
console.log(id == newId)       //bcz symbol is unique.