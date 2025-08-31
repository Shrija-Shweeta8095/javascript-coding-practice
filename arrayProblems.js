// two sum

const twoSum=(nums,target)=>{
    for(let i=0;i<nums.length;i++){
     for(let j=i+1;j<nums.length;j++){
        if(nums[i] + nums[j] === target){
            return [i,j]
        }
     }

    }
    return [];
}
// console.log(twoSum([5,2,7,9,11], 9))


// best time to buy and sell stock

const maxProfit=(prices)=>{

    let buy=0;
    let sell=0;
    let max=0;
    for(let i=0;i<prices.length;i++){
        if(prices[sell]< prices[buy]){
            buy=sell;
        }else{
            let profit= prices[sell] - prices[buy];
            max=Math.max(profit,max)
        }
        sell++;
    }
    return max;
}
// console.log(maxProfit([7,1,5,6,4]))

// maximum subarray
// using brute force
const maximumSubArray=(arr)=>{
    let maxSum=-Infinity;
    for(let start=0; start<arr.length;start++){
        let currentSum=0;
        for(let end=start;end<arr.length;end++){
            currentSum+=arr[end];
            maxSum=Math.max(currentSum,maxSum)
        }
    }
    return maxSum;
}
console.log(maximumSubArray([-2,1,-3,4,-1,2,1,-5,4]))

// using Kadane's algorithm

const maxSubArray=(nums)=>{
    let maxSum=-Infinity, currentSum=0;
    for(let i=0;i<nums.length;i++){
        currentSum+=nums[i];
        maxSum=Math.max(currentSum,maxSum)
        if(currentSum<0){
            currentSum=0
        }
    }
    return maxSum
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))


// merge Intervals
const mergeIntervals=(intervals)=>{
 let n=intervals.length;
    let visited= new Array(n).fill(false);
    let result=[];
    for(let i=0;i<n;i++){
        if(visited[i]) continue;
        let [start,end] =intervals[i];

        for(let j=i+1;j<n;j++){
            if(visited[j]) continue;
            let [s,e] =intervals[j]; 

            if(s<=end && e>=start){
                start=Math.min(start,s);
                end= Math.max(end,e);
                visited[j]= true;
            }
           
        }
         result.push([start,end])
       
    }
     return result;
}
console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))


// product of array except self
const productArrayExceptSelf=(nums)=>{
    let result=[];
    for(let i=0;i<nums.length;i++){
        let product=1;
        for(let j=0;j<nums.length;j++){
            if(i!==j){
                product*=nums[j]
            }
        }
        result[i]=product
    }
    return result
}
console.log(productArrayExceptSelf([1,2,3,4]))