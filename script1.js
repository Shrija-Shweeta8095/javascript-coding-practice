function reverseString(str){
    const reverseString= str.split('').reverse().join('');
    return reverseString;
}

console.log("Reversed String: " + reverseString("Hello World!"));


// without using predefined function

function reverseStr(str){
    let reverseSt='';
    for (let i=str.length-1;i>0;i--){
        reverseSt=reverseSt+str[i]
    }
    return reverseSt
}

console.log('Reverse string ',reverseStr('Shrija Shweeta'))


/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let k=m+n-1;
    let i=m-1; 
    let j=n-1;
    while(j>=0){
        if(i>=0 && nums1[i] >nums2[j]){
            nums1[k] = nums1[i];
            i--;
        }else{
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
};

let nums1 = [1,2,3,0,0,0];
let m = 3;
let nums2 = [2,5,6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // [1,2,2,3,5,6]




/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== val){
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};

let nums = [3, 2, 2, 3];
let val = 3;

let k = removeElement(nums, val);
console.log(k);           // Output: 2
console.log(nums.slice(0, k)); // Output: [2, 2]