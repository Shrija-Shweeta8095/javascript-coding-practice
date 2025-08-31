// 🔹 Strings
//  1. Valid Palindrome
//  2. Longest Substring Without Repeating Characters
//  3. Group Anagrams
//  4. Longest Palindromic Substring
//  5. Valid Parentheses


//Valid Palindrome
var isPalindrome = function(s) {
    let stringVal= s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let reverseStr=''
    for(let i=stringVal.length-1;i>=0;i--){
        reverseStr+=stringVal[i];
    }
     return stringVal === reverseStr;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))


// removeOccurence

const removeOccurence=(s,part)=>{
    while(s.indexOf(part)!==-1){
        s=s.replace(part,"");
    }
    return s;
}
console.log(removeOccurence('daabcbaabcbc','abc'))
// Longest Substring Without Repeating Characters