

const cart =['shoes', 'shirts', 'pants'];

// 2 apis
// 1. create order
// 2. proceedToPayement

// api.createOrder(cart, function(){
//     api.proceedToPayment(orderId, function(){
//         api.sendConfirmationEmail(orderId, function(){
//             api.validatecart(cart, function(isValid){
//                 if(isValid){
//                     console.log('Order placed successfully');
//                 } else {
//                     console.log('Cart validation failed');
//                 }
//             });
//         });
//     })
// })

// 1. callback Hell or Pyramid of doom
// 2. inversion of control

//consumer part

const promise= createOrder(cart);
console.log(promise,"promise")
promise.then((orderId)=>{
    console.log('Order placed successfully with ID:', orderId);
    // return proceedToPayment(orderId);
}).catch((error)=>{
    console.error('Error:', error);
});

// producer part
function createOrder(cart){
    const pr = new Promise((resolve,reject)=>{
        if(!validateCart(cart)){
            reject('Cart validation failed');
        }else{
        const orderId = Math.random().toString(36).substring(2, 15);
        console.log('Order created with ID:', orderId);
        resolve(orderId);
        }
      
    })
    return pr;
}

function validateCart(){
    return true;
}


// first repeating character in a string
function firstRepeatingCharacter(str){
    const countMap={};
    for(let i=0;i<str.length;i++){
        const char=str[i];
        if(countMap[char]){
            return char;
        }else{
            countMap[char]=1;
        }
    }
    return null;
    
}

console.log(firstRepeatingCharacter('aabjdgc'))



// remove duplicates from array
const array = [1, 2, 2, 3, 4, 4, 5];

function removeDuplicates(arr){
    const result=[];
    for(let i=0;i<arr.length;i++){
        if(!result.includes(arr[i]) ){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(removeDuplicates(array))