// 🧠 JavaScript Programming Questions

// 1.⁠ ⁠Reverse a String

// 2.⁠ ⁠Check for Palindrome

// 3.⁠ ⁠Find the Largest Number in an Array

// 4.⁠ ⁠Remove Duplicates from an Array

// 5.⁠ ⁠Flatten a Nested Array

// 6.⁠ ⁠Debounce Function Implementation

// 7.⁠ ⁠Deep Clone an Object

// 8.⁠ ⁠Check if Object is Empty




// 1.⁠ ⁠Reverse a String

const reverseString = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};
console.log(reverseString("Hello"));

// 2.⁠ ⁠Check for Palindrome
const checkPalindrome = (str) => {
  let strVal = str.replace(/[^a-z0-9]/gi,'').toLowerCase();
  let reverse = "";
  for (let i = strVal.length - 1; i >= 0; i--) {
    reverse += strVal[i];
  }
  if (reverse === strVal) {
    console.log("Palindrome");
    return true;
  } else {
    console.log("Not Palindrome");
    return false;
  }
};
console.log(checkPalindrome("Madam"));
console.log(checkPalindrome("madam"));
console.log(checkPalindrome("A man, a plan, a canal: Panama"))


// 3.⁠ ⁠Find the Largest Number in an Array

const findLargest=(arr)=>{
    let max=arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
console.log(findLargest([3,12,4,9,20]))


//4.⁠ ⁠Remove Duplicates from an Array

const removeDuplicates=(arr)=>{
    const uniqueArr=[];
    for(let i=0;i<arr.length;i++){
        if(!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i])
        }
    }
        return uniqueArr;
    
}
console.log(removeDuplicates([2,3,5,1,2,5,6,8,8,9,1,1,10]))


// 5.⁠ ⁠Flatten a Nested Array

const flattenArray=(arr)=>{
    const result=[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result.push(...flattenArray(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result;
}

console.log(flattenArray([1,[2,[3,4],8,[9,10]]]))

// 6. debounce implementation
const debounce=(fn,delay)=>{
    let timer
    return function(...args){
        const context=this;
        clearTimeout(timer)
        timer= setTimeout(()=>{
            fn.apply(context,args)
        },delay)
    }
}
const handleSearch=(e)=>[
    console.log(e.target.value)
]

const handleDebounceSearch= debounce(handleSearch,1000)

// Attach event listener to input when DOM is ready
// window.onload = function () {
//   const searchInput = document.querySelector('input[type="search"]');
//   searchInput.addEventListener("input", handleDebounceSearch);
// };
//7. ⁠Deep Clone an Object

// using JSON.parse and JSON.stringify
const deepClone=(obj)=>{
    const clonedObj=JSON.parse(JSON.stringify(obj))
    clonedObj.b.c=42;
    console.log(obj,"obj")
    console.log(clonedObj,"clonedObj")

}

console.log(deepClone({ a: 1, b: { c: 2 } }))

// using structedClone
const deepClone2=(obj)=>{
    const clonedObj= structuredClone(obj)
    clonedObj.a=10;
    console.log(obj,"obj")
    console.log(clonedObj,"clonedObj")

}
console.log(deepClone2({ a: 1, b: { c: 2 } }))

//using recursion
const deepCloneRecursion=(obj)=>{
    if(obj===null || typeof obj !== "object") return obj;

    if (obj instanceof Date) return new Date(obj);
    if(Array.isArray(obj)) return obj.map(deepCloneRecursion)

    const clone={}
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            clone[i] = deepCloneRecursion(obj[i])
        }
    }
    return clone;
}
const original = { a: 1, b: { c: [2, 3] }, d: new Date() };
const copy = deepCloneRecursion(original);

copy.b.c[0] = 99;
console.log(original.b.c[0]);


// 8.⁠ ⁠Check if Object is Empty

const checkObjEmpty=(obj)=>{
    const a= Object.keys(obj).length;
    if(a===0){
        return true;
    }else{
        return false
    }
}
console.log(checkObjEmpty({ a: 1, b: { c: [2, 3] }, d: new Date() }))
console.log(checkObjEmpty({  }))
