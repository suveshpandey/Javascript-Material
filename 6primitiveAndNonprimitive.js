// Datatypes are defined on the basis of how data is stored in memory and accessing them from the memory.
//Two types - 1) Primitive and 2) Non-primitive/Refrence type.

//Primitive Data Types:
    // These are the most basic types of data built into a programming language. They represent single values and are not composed of other data types.
    // They are usually stored directly in memory and have a fixed size.

    // 1) Number: Number is a primitive data type in JavaScript. It can be integer, floating-point number, or a special value NaN (Not a Number).
    let num1 = 10;
    let num2 = 20.5;
    let num3 = NaN;
    // 2) String: String is a sequence of characters and is a primitive data type in
    let str1 = "Hello World";
    let str2 = 'Hello World';
    // 3) Boolean: Boolean is a primitive data type in JavaScript and can have only two values: true or false.
    let bool1 = true;
    let bool2 = false;
    // 4) Symbol: Symbol is a unique and immutable primitive data type in JavaScript. It can be used as keys in object properties.
    let sym1 = Symbol("key");
    let sym2 = Symbol("key");
    // 5) BigInt: BigInt is a primitive data type in JavaScript that can store integers with arbitrary precision.
    let bigInt1 = BigInt(12345678901234567890);
    let bigInt2 = BigInt(98765432109876543210);
    // 6) undefined: undefined is a primitive data type in JavaScript and represents the absence of a value.
    let undefinedVar;
    // 7) null: null is a primitive data type in JavaScript and represents the intentional absence of a value.
    let nullVar = null;


//Non primitive types:
    // Also known as reference types, these are more complex data structures that can store multiple values or refer to other data types.
    //Non-primitive types are often dynamic, and instead of holding data directly, they store references to memory locations where the actual data is kept.

    // 1) Objects: Objects are non-primitive data types in JavaScript. They are created using object literals, constructors, or by using the built-in Object.create() method.
    let obj1 = {name: "John", age: 30};
    let obj2 = new Object({name: "Jane", age: 25});
    // 2) Arrays: Arrays are non-primitive data types in JavaScript. They are created using array literals or the Array constructor.
    let arr1 = [1, 2, 3, 4, 5];
    // 3) Functions: Functions are non-primitive data types in JavaScript. They are created using function declarations, function expressions, or arrow functions.
    let func1 = function() {
        console.log("Hello, World!");
    }
    let func2 = () => {
        console.log("Hello, World!");
    }