// var x = 1;
// console.log(x);
// function a() {
//   x = 10;
//   console.log(x);
// }

// a();

// output :-
// 1
// 10

// // -----------------------------------

// let x = 10;
// console.log(x);
// function a() {
//   x = 100;
//   console.log(x);
// }
// a();
// x = 1000;

// output :-
// 10
// 100

// // -----------------------------------

// const x = 100;
// console.log(x);
// function a() {
//   x = 10;
//   console.log(x);
// }
// a();

// output :-
// 100
// then there is typeError as x is constant that cannot be changed

// // -----------------------------------

// function a() {
//   console.log(x);
// }
// a();
// var x = 2;
// output :-
// Due to hoisting, x will be assigned a memory block but x is yet to be initialized after the function call so undefined is printed 

// // -----------------------------------

// let x;
// function b() {
//   console.log(x);
// }
// b();
// x = 2;
// output :-
// (undefined)  as x is defined but haven't assigned a value by the time it is printed 
//  It is in the dead temporal zone

// // -----------------------------------

// function a() {
//   console.log(x);
// }
// a();
// let x = 2;

// output :-
// x is initialized after it is accessed so error is thrown

// // -----------------------------------

// var a = 1;
// let b = 2;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// console.log(b);

// output :-
// 10
// 20
// 30
// 2
// // ----------------------------------

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// var z = x();
// console.log(z);
// z();

// output :-    
// f y(){
//   console.log(a);
// }
// 7

// // ----------------------------------

// function x() {
//   for (var i = 0; i < 6; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000 * i);
//   }
// }
// x();

// output :-
// 6 is printed 6 times
// // ----------------------------------

// function x() {
//   for (var i = 0; i < 6; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, 1000 * i);
//     }
//     close(i);
//     console.log('interview');
//   }
// }
// x();

// output :-
// interview is printed 6 times
// 0
// 1
// 2
// 3
// 4
// 5

// -----------------------------------

const person = {
    name:"nagarro",
    age:100,
    isAutherised: false,
    isUnicorn:true,
    bestDomain:"analytics"
}

// question1: make copy of the object and manipulate values inthe new copied object

const p0=person;                   // Deep copy 
        p0.isAutherised=true;
        p0.bestDomain="Full stack";


const p1=Object.create(person);    // forms the prototype
        p1.name="Abhay kumar",
        p1.age=20;
        p1.isAutherised=true;
        p1.bestDomain="Full stack";

const p2=Object.assign({},person); // Shallow copy
        p2.name="Abhay kumar Pro",
        p2.age=21;


// question2: print all the properties using appropriate for loop 

// let travel=p0;
let travel=p1;
// let travel=p2;

for(let i in travel){
    console.log(` property : ${i}, value : ${travel[i]} `);
}






// theory questions you should also prepare
// 1. what is GEC (global execution context)? -- mcp and cep
// 2. single threaded meaning? 
// 3. what is hoisting?
// 4. call back queue
// 5. let and const hoisted hote hai?? and kahan hote hai? (dead temporal zone mei hote hai) -->  read about dead temporal zone
// 6. block scope and global scope
// 7. closure?
// 8. event loop
// 9. asynchronous 
// 10. for each loop