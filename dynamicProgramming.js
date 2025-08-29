// Fibonacci Series
// using recursion

const fibonacci=(n)=>{
    let result;

    if(n <= 1 ) return n;

    result = fibonacci(n-1) + fibonacci(n-2);

    return result;
}

console.log(fibonacci(7))

// using top down approach

const fibonacciTopDown=(n, memo={})=>{
    if(n<=1) return n;

    memo[n] = fibonacci(n-1) +fibonacci(n-2)

    return memo[n];
}
console.log(fibonacciTopDown(6))

// using bottom up approach

const fibonacciBottomUp=(n)=>{
    let dp=[0,1]

    for(let i=2; i<=n;i++){
        dp[i] = dp[i-1] +dp[i-2];
    }
    return dp[n];

}

console.log(fibonacciBottomUp(9))

// using space optimization

const fibonacciSpaceOptimization=(n)=>{

    let current;
    let previous= 1;
    let previous2=0;
    for(let i=2;i<=n;i++){
        current = previous+ previous2;
        previous2 = previous;
        previous= current
    }
    return current
}

console.log(fibonacciSpaceOptimization(19))


// Climbing Stairs
// using recursion
const climbingSatirs=(n)=>{
    if(n<=2) return n;

    return climbingSatirs(n-1) + climbingSatirs(n-2);
}

console.log(climbingSatirs(5))

// using top down approach
const climbingStairsTopDown=(n, memo={})=>{
    if(n<=2) return n;

    memo[n] = climbingStairsTopDown(n-1) +climbingStairsTopDown(n-2)

    return memo[n];

}

console.log(climbingStairsTopDown(5))

// using bottom up approach
const climbingStairsBottomUp=(n)=>{
    let dp=[0,1,2];

    for(let i=3;i<=n;i++){
        dp[i] = dp[i-1] +dp[i-2];
    }
    return dp[n];
}
console.log(climbingStairsBottomUp(5))

// using space optimization
const climbingStairsSpaceOptimization=(n)=>{
      if(n<=2) return n;
    let current;
    let previous =2;
    let previous2 =1;
   

     for(let i=3;i<=n;i++){
        current= previous+previous2;
        previous2= previous;
        previous=current;
     }
     return current;
}
console.log(climbingStairsSpaceOptimization(5))