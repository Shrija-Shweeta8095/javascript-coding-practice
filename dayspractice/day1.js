// 1. Deep Flatten an Array

// const arr = [1, [2, [3, [4, 5]]]];

 // Output: [1, 2, 3, 4, 5]
const flattenArray=(arr)=>{
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result.push(...flattenArray(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result;
}

console.log(flattenArray([1, [2, [3, [4, 5]]]]))


//2. Flatten a Nested Object

 const obj = {
 a: 1,
 b: {
 c: 2,
 d: { e: 3 }
 }
};

//  Output: { "a": 1, "b.c": 2, "b.d.e": 3 }
const flattenObject = (obj, parentKey = '', result = {}) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;

      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        flattenObject(obj[key], newKey, result); // pass newKey and result
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
};
console.log(flattenObject(obj))


// 3. Flatten + Remove Duplicates + Sort

const input = [1, [2, [3, 2], 4], 5, [3, [6]]];

//  Output: [1, 2, 3, 4, 5, 6]

const flattenRemoveSortArray=(arr)=>{
    let flattenArrayVal=[];
    const flattenArray=(arr)=>{
    let result=[];
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            result.push(...flattenArray(arr[i]))
        }else{
            result.push(arr[i])
        }
    }
    return result;
}
    flattenArrayVal= flattenArray(arr);
    const sortArray= flattenArrayVal.sort();
    const uniqueArray=[... new Set(sortArray)]
    return uniqueArray;

}
console.log(flattenRemoveSortArray(input))

const flattenRemoveSortArrayFn = (arr) => {
  return [...new Set(arr.flat(Infinity))].sort((a, b) => a - b);
};

console.log(flattenRemoveSortArrayFn(input)); 
// [1, 2, 3, 4, 5, 6]


const flattenRemoveSortArrayff = (arr) => {
  const flattenArray = (arr) => {
    return arr.reduce((acc, val) => 
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), 
    []);
  };
  
  return [...new Set(flattenArray(arr))].sort((a, b) => a - b);
};

console.log(flattenRemoveSortArrayff([1, [2, [3, 2], 4], 5, [3, [6]]])); 
// [1, 2, 3, 4, 5, 6]




//  4. Fetch Multiple Users in Parallel

function fetchUserData(id) {
 return new Promise((res) => setTimeout(() => res({ id, name: "User " + id }), 1000));
}

Promise.all([fetchUserData(1),fetchUserData(2), fetchUserData(3)]).
then((users)=>{
    users.forEach(user=>console.log(user.name))
}).catch((err)=>{
    console.error(err)
})
//  Fetch users with ID 1, 2, 3 in parallel and log names



// 5. Retry Failing API with async/await

//  Simulate an API that fails twice and succeeds on the 3rd try
//  Write a retry mechanism using async/await with 3 attempts
 



// 6. Flatten Array Containing Promises


//  Output: [1, 2, 3, 4, 5]

async function flattenPromiseArray(arrVal) {
  const result = [];

  for (let i = 0; i < arrVal.length; i++) {
    let value = arrVal[i];

    // If it's a Promise, wait for it
    if (value instanceof Promise) {
      value = await value;
    }

    // If the resolved value is an array, flatten it recursively
    if (Array.isArray(value)) {
      result.push(...(await flattenPromiseArray(value)));
    } else {
      result.push(value);
    }
  }

  return result;
}
const arr = [1, Promise.resolve(2), [3, Promise.resolve([4, 5])]];

flattenPromiseArray(arr).then(console.log);