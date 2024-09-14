let date = new Date();

console.log(date.toString());
console.log(date.toISOString());
console.log(date.toLocaleString());    //* very good output.
console.log(date.toJSON());
console.log()
let d1 = new Date("2024-01-14");
// let d2 = new Date("08-29-2005");
console.log(d1.toDateString())


let myDate = new Date("08-29-2005");

let myTimeStamp = Date.now();
console.log(myTimeStamp)
console.log(myDate.getTime())
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())