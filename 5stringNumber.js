// console.log(1+2+"2");
// console.log("1"+2+3);
// console.log(typeof("1"+"2" + 3));
// console.log(+true);

// let num1, num2, num3;
// num1 = num2 = num3 = 2+2;
// console.table([num1, num2, num3])

// let count = 0;
// console.log(++count)
// console.log(count)

//lec 8 - comparison
console.log("2">1);
console.log("2">1);

console.log(null >0);
console.log(null == 0);
console.log(null >=0);   //true. why? ->
//the reason is that euality check (==) and comparisons(> < >= <=) work differently.
//comparisons convert null to a number , treating it is 0.
//therefore null>0 -> false, null == 0 -> false, null >= 0 -> true.

console.log()

console.log(undefined >0);
console.log(undefined == 0);
console.log(undefined >=0);

console.log();

console.log(2 === 2);
console.log("2" === 2);   //conversion is not performed.