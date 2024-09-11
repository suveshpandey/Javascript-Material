let s = "abc";
let y = "de";

s = s.concat(y);
console.log(s)

//! String Interpolation => ``

// let string = new String("Samosa");
let string = "samosa";
console.log(string);
console.log(string.__proto__);
console.log(string.toUpperCase()); //original string is not changed.
console.log(string.charAt(1));
console.log(string.indexOf('a'));
const newS = string.substring(0, 3);
console.log(newS);

const newS1 = string.slice(1, 4);
console.log(newS1);

const str = "    samosa   ";
console.log(str);
console.log(str.trim())

const url = "https://samosa.com/suvesh%10pandey";
console.log(url.replace('%10', '-'));      //!permanently change nhi hota.

let arr = url.split('.');
console.log(arr);
