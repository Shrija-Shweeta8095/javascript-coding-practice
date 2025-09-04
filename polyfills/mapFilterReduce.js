// map , filter and reduce

//map
const nums = [2, 3, 4, 5];
const multiplyThree = nums.map((itm) => itm * 3);
console.log(multiplyThree)


//filter
const numArr=[1,2,3,4];
const moreThanTwo= numArr.filter((num)=>num>2);
console.log(moreThanTwo,"moreThanTwo")

//reduce
const numValue=[1,2,3,4];
const sum=numValue.reduce((acc,curr)=>{
     acc+=curr;
     return acc
},0)
console.log(sum,"sum")


//polyfill for map

//Array.map((nums,index,arr)=>{})

Array.prototype.myMap=function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        temp.push(cb(this[i],i, this))
    }
    return temp;
}

const multiplyByFour = nums.myMap((itm) => itm * 4);
console.log(multiplyByFour,"multiplyByFour")

//polyfill for filter

Array.prototype.myFilter= function(cb){
    let temp=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i],i,this)){
            temp.push(this[i])
        }
    }
    return temp
}

const divisibleByTwo= numArr.myFilter((num)=>num%2===0);
console.log(divisibleByTwo,"divisibleByTwo")


// polyfills of reduce

Array.prototype.myReduce= function(cb, initialValue){
    var accumulator = initialValue;
    for(let i=0;i<this.length;i++){
        accumulator = accumulator? cb(accumulator, this[i], i, this) : this[i]
    }
    return accumulator;
}

const max=numValue.myReduce((acc,curr)=>{
  return acc>curr?acc:curr;
},0)

console.log(max,"max")