
let counter = 0;
function getData() {
    console.log("Fetching data...", counter++);
}

function debounce(func, delay) {
    let timer;
    return function (...args) {
        const context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args)
        }, delay)
    }

}



const handleSearch = debounce(getData, 300)


function throttle(func,limit){
    let flag=true
    return function(){
        if(flag){
            func();
            flag=false;
            setTimeout(()=>{
                flag=true
            },limit)
        }
    }
}
const throttledSearch= throttle(getData,1000) // even if writing any character quickly getData will be called only once in 1 second




//Hoisting- phenomena in JS through which you can access variables and functions even before you initialised it or put some value to it

// Example

// console.log(val); // undefined
var val=10;


// let and const values are also hoisted but they are in a temporal dead zone
// temporal dead zone the time at which you access the variable and the time at which you initalised value to it
//Example

// console.log(a); // Reference error. // same with const
let a=10;


//what is global execution context

// whenever any program is written in JS a global execution context is created through JS engine
// here all code is executed
// it has two parts
//1. varibale environment or memory execution
// 2. code environment or thread of execution

// in variable environment entire code is written in key value pair in which variables are assigned as undefined 
// and functions are assigned as it is
// now in code envirenment all line of code is run one by one
// Ex

// var x=10;

function multiply(num){
    const ans=num*num;
    return ans;
}

// var y= multiply(x);
var z= multiply(5);






//closure- closure is a combination of functions bundled together in its lexical environment
// lexical environemnt menas if innnr function is accessing any variable inside that and if it will not able to find in its local scope
// then it will search that variable in oute function scope that scope is call lexical environment


//exampke

function outer(){
    let a=10;
    function inner(){
        // console.log(a, "aaa");  // 10
    }
    inner();
}
outer();

// closures and settimeout example
function x(){
    var i=1;
    setTimeout(function(){
        // console.log(i);
    },3000)
// console.log("hello")

}
x();


function print(){
    for(var i =1; i<=5; i++){
        setTimeout(()=>{
            // console.log(i); // print 666666 i.e 6 5 time because here var keyword is used and it takes same reference
        },i*1000);
    }
}

print();


function print1(){
    for(let i =1; i<=5; i++){
        setTimeout(()=>{
            // console.log(i);  // prints 1 2 3 4 5 after each second 
        },i*1000);
    }
}

print1();

// different behaviour because of var and let declaration
// var is function scoped so on each iteration it refer to same value means refernce doesn't change
// but in case of let it is block scoped so on every iteration a new value of i is there so i gets changes on each iteration




// if want same behaviour with var keyword
function printPattern(){
    for(var i=1;i<=5;i++){
        function y(x){
            setTimeout(()=>{
                // console.log(x);
            },x*1000);
        }
        y(i);
    }
}
printPattern();

// y(x) is accepting x as a parameter which has its own scope so whenever y is called it has its won value of x
//You use var i in the loop, which is normally function-scoped (not block-scoped), meaning all iterations would share the same i. But...

//Inside the loop, you're calling a function y(i) — and passing the current value of i as an argument to the function y.

//Inside function y(x), the value of i is copied into the parameter x, which has its own scope. So each call to y(i) uses a new value for x.

//Then, setTimeout is called with x * 1000 as the delay, and console.log(x) inside the callback.

//Because x is not affected by future loop iterations, the callback logs the correct value (1, 2, ..., 5) after the correct delay (1s, 2s, ..., 5s).



//currying example
// currying is a proceess of transforming a functions with multiple arguments into a single function each taking one argument.
//
// function add(a){
//     return function(b){
//         return a+b;
//     }
// }

// console.log(add(2)(3))


//🔹 undefined
// A variable is declared but not assigned a value.


// let a;
// console.log(a); // 👉 undefined
// The variable a is declared.

// Since it’s not assigned a value, JavaScript gives it the default value undefined.

// ✅ Key Points:
// The variable exists in scope.

// typeof a is "undefined".


// not defined
// A variable is not declared at all in the current scope.


// console.log(b); // ❌ ReferenceError: b is not defined
// The variable b is never declared, so trying to access it throws a ReferenceError.

// It's not in memory.

// ❌ Key Points:
// The variable does not exist in scope.

// Using it causes a runtime error.


//  null
// Represents an intentional absence of any value. It is explicitly assigned by the programmer.


// let b = null;
// console.log(b); // 👉 null
// You use null when you want to manually clear or empty a variable.

// Common in APIs or DOM where null means "no object".



// higher order functions- functions which takes another function as an argument and returns a new function
// uses-
// 1. reusability
// 2. abstraction


// memoization - memoization in javascript is an optimization techniquique which stores the result of expensive function call and returns 
// the chached result when same input occur again

// ex-
function add(a,b){
    return a+b;
}

function memoize(func){
    const cache={};
    return function(...args){
        const key=JSON.stringify(args);
        if(cache[key]){
            console.log('from cache');
            return cache[key];
        }else{
            console.log('calculating result');
            const result= func(...args);
            cache[key]=result;
            return result;
        }
      
    }
}

const memoizedAdd= memoize(add);
console.log(memoizedAdd(2,3)); // calculating result
console.log(memoizedAdd(2,3)); // from cache


function memoizeFibonacci(){
    let cache={};

    function fib(n){
        if(n<=1){
            return n;
        }
        else{
            if(cache[n]){
                console.log('from cache');
                return cache[n];
            }
            else{
                console.log('calculating result');

                const result= fib(n-1)+ fib(n-2)
                cache[n]= result;
                return result;
            }
        }
    }
    return fib;
}

const memoizedFib = memoizeFibonacci();
console.log(memoizedFib(5))
console.log(memoizedFib(5))



// pure function- is a function which given the same input return the same output without any side effects
// side effects are the changes made to the state of the application or any external system like database
// ex-
function add(a,b){
    return a+b;
}       

// impure function- is a function which given the same input return different output or it has side effects
// ex-
let count=0;
function increment(){
    count++;
    return count;
}



// example of data hiding
function counter11(){
    let count=0; // private variable

    this.increment= function(){
        count++;
        return count;
    }

    this.decrement= function(){
        count--;
        return count;
    }
}

const c= new counter11();
console.log(c.increment()); // 1
console.log(c.increment()); // 2
console.log(c.decrement()); // 1
// console.log(c.count); // undefined, count is not accessible outside the counter function



// reverse string
function reverseString(str){
    const result = str.split('').reverse(). join('');
    return result;
}

console.log(reverseString("hello")); // "olleh"

// without predefined methods
function reverseStringWithoutMethods(str){
 let reversed='';
 for(let i=str.length-1; i>=0;i--){
    reversed+=str[i]
 }
 return reversed;
}

console.log(reverseStringWithoutMethods("Shrija")); // "olleh"

// function to reverse a number

function reverseDigit(num){
    let reverseNum=0;

    while(num>0){
        const digit= num%10;
        reverseNum = reverseNum*10+ digit;
        num = Math.floor(num/10);
        
    }
    return reverseNum
}

console.log(reverseDigit(12345))



// palindrom string

function palindromeString(str){
    let reverse= '';
    for(let i= str.length-1; i>=0;i--){
        reverse+= str[i]
    }
    if(reverse===str){
        console.log('Palindrome')
        return true;
    }else{
        console.log('Not Palindrome')
        return false;
    }
}

palindromeString("madam"); // Palindrome
palindromeString("hello"); // Not Palindrome


// flattenArray
function flattenArray(arr){
    const result=[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
             result.push(...flattenArray(arr[i])); // recursive flattening // recursive call to flatten nested arrays
        }else{
            result.push(arr[i])
        }
    }
    return result;
}
console.log(flattenArray([1,2,[3,4,[5,6]],7])); // [1, 2, 3, 4, 5, 6, 7]


// max array

function maxArray(arr){
    let max=0;
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>max){
            max= arr[i];
        }
    }
    return max;
}
console.log(maxArray([1,2,3,4,5,6,7,8,9])); // 9


// debounce

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}


// depclone
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") return obj;

  let result = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    result[key] = deepClone(obj[key]);
  }
  return result;
}


// once
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }
    return result;
  };
}



// currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...next) => curried(...args, ...next);
    }
  };
}


// map
Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};



function debouncex(fn, delay){
    let timer;
    return function (...args){
        const context= this;
        clearTimeout(timer);
        timer= setTimeot(()=>{
            fn.apply(context,args)
        }, delay);

    }
}



let arr = [
  { name: "sachin", age: 20 },
  { name: "virat", age: 22 },
];

const addKey = (array) => {
  return array.map((itm) => {
    const obj = { salary: 0 };
    itm = { ...itm, ...obj };
    return itm;
  });
};

// console.log(addKey(arr));

let arr1 = [1, 2, 3, 5, 5, 6, 1, 6];

const sumArray = (arrVal) => {
  return arrVal.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);
};
console.log(sumArray(arr1));



for (let i = 0; i < 3; i++) {
  function log() {
    console.log(i);
  }
  setTimeout(() => {
    log();
  }, 500);
}