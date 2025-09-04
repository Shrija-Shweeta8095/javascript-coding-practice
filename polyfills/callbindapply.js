
//call
var obj={name:'Shrija'};

function sayHello(age){
    return 'Hello'+" "+this.name +"is"+ age
}

console.log(sayHello.call(obj, 24))



//apply

var obj1={name:'Shrija'}

function sayHi(age,profession){
    return "hello" + " " +this.name  +" is " +age +" and profession is "+profession
}

console.log(sayHi.apply(obj1, [27, 'Software Engineer']))



//bind

const bindFunc= sayHi.bind(obj)
console.log(bindFunc(27, 'Software Engineer'))





// Output based question

const person = { name: 'Shrija' };

function sayHi(age) {
  return `${this.name} is ${age} years`;
}

console.log(sayHi.call(person, 24));  // Shrija is 24 years
console.log(sayHi.bind(person, 24));  // return entire function 
// ƒ sayHi(age) {
//   return `${this.name} is ${age} years`;
// }


const age = 10;
var person1 = {
    name: "Shweeta",
  age: 20,
  getAge: function(){
    return this.age;
  }
}

var person2 = {age:  24};
console.log(person1.getAge.call(person2)) // show with apply and bind as well //24
console.log(person1.getAge.apply(person2)) //24
console.log(person1.getAge.bind(person2)) // fn

var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

//   console.log(data.getStatus());  // 🥑
//   console.log(data.getStatus.call(this)) //😎
}, 0);



const animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Queen' }
];

function printAnimals(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }

for(let i=0;i<animals.length;i++){
    printAnimals.call(animals[i],i)
}



const array = ['a', 'b'];
const elements = [0, 1, 2];
// array.push(elements)
array.push.apply(array,elements)

console.log(array)




const numbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply

let max = Math.max.apply(null, numbers); // equal to Math.max

let min = Math.min.apply(null, numbers); // equal to Math.min 

// vs. simple loop based algorithm

max = -Infinity, min = +Infinity;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log(max,"MAX") //7
console.log(min,"MIN") //2




function f() {
  console.log( this ); // ?
}

let user = {
  g: f.bind(null)
};

user.g();




function f(){
    console.log(this.name)
}

f=f.bind({name:'John'}).bind({name:'Ann'});
f();



//polyfill for call
let car1={
    color:'Red',
    company:'Ferrari'
}

function purchaseCar(currency,price){
    console.log(`I have purchased ${this.color}- ${this.company} car for ${currency} ${price}`)
}

// purchaseCar.call(car1,'Rs', 5000000)

Function.prototype.myCall=function(context={}, ...args){
    if(typeof this !== "function"){
        throw new Error(this +'It is not callable')
    }

    context.fn=this;
    context.fn(...args)
}

purchaseCar.myCall(car1,'Rs', 5000000)


//polyfill for apply

Function.prototype.myApply= function(context=[], args=[]){
    if(typeof this !== 'function'){
        throw new Error(this +'It is not callable')
    }

    if(!Array.isArray(args)){
        throw new Error('args is Array type')
    }
    context.fn=this;
    context.fn(...args)
}

purchaseCar.myApply(car1,['Rs', 5000000])


//pollyfill for bind
console.log(purchaseCar.bind(car1,'Rs', 5000000)())

Function.prototype.myBind=function(context={}, ...args){
    if(typeof this !== 'function'){
        throw new Error(this + 'It is not callable')
    }

    context.fn= this;
    return function(newArgs){
        return context.fn(...args, ...newArgs)
    }
}

console.log(purchaseCar.myBind(car1,'Rs', 5000000)())
