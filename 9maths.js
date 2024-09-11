const score = 10;
console.log(score)
const score1 = new Number(100);
console.log(score1);
console.log(score1.toString().length);
console.log(score1.toFixed(2));

let num = 123.8966;
console.log(num.toPrecision(3));
let num2 = 1000000;
console.log(num2.toLocaleString('en-IN'));


//* ---------------------Maths---------------------
console.log(Math)
console.log(Math.max(10, 9, 12, 4));
console.log(Math.min(10, 9, 12, 4));
console.log(Math.abs(-4));    //absolutu change

console.log(Math.round(2.3));


console.log(Math.random());     //* value between 0 and 1.
console.log(Math.random()*10+1);



//other to calculate 
const min = 10;
const max = 20;
console.log(Math.random() * (max-min +1) + min);