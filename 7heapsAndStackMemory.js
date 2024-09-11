// Two types of memories:
//1)Stack memory 2) Heap memory
//!note- Primitive types are stored in stack memory.
//!note- Non-primitive types are stored in heap memory.

//* Stack memory is used for storing local variables and function calls.
//* Heap memory is used for storing objects in Java
//* Stack memory is faster than heap memory
//* In stack memory, memory allocation and deallocation is done by JVM

//? if anything(primitve) is stored in stack, then we would get the copy of the value.
//? if anything(non-primitve) is stored in heap, then wee would get the refrence of the value.            


let name = "suvesh";
let newName = name;
newName = "suvesh pandey";         //getting the copy of the name.
console.log(name);
console.log(newName);

let user1 = {                      //will get the reference.
    name: "suvesh",
    email: "suvesh@gmail.com",
}

let user2 = {
    name: "sp",
    email: "sp@gmail.com",
}
user1.name = "suvesh pandey";           //changing user1.name, bcz we age getting this by reference.

console.log(user1)