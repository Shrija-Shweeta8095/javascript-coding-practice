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
console.log(twoSum([5,2,7,9,11], 9))


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
console.log(maxProfit([7,1,5,6,4]))