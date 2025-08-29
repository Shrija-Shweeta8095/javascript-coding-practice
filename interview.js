// reverse a string
const reverseString = (strVal) => {
  let reverse = "";
  for (let i = strVal.length - 1; i >= 0; i--) {
    reverse += strVal[i];
  }
  return reverse;
};
console.log(reverseString("Hello"));

// check if string is palindrome or not

const checkPalindrome = (strVal) => {
  let reverse = "";
  const val = strVal.toLowerCase();
  for (let i = val.length - 1; i >= 0; i--) {
    reverse += val[i];
  }
  if (val === reverse) {
    console.log("Palindrome");
    return true;
  } else {
    console.log("Not Palindrome");
    return false;
  }
};
console.log(checkPalindrome("Madam"));
console.log(checkPalindrome("madam"));

// remove duplicates from string;
const removeDuplicates = (strVal) => {
  let removeDuplicate = "";
  for (let i = 0; i < strVal.length; i++) {
    if (strVal[i] !== strVal[i - 1]) {
      removeDuplicate += strVal[i];
    }
  }
  return removeDuplicate;
};

console.log(removeDuplicates("Heeellllooo"));

// find first non repeating character
const firstNonRepeatingChar = (strVal) => {
  const charCount = {};
  for (let chars of strVal) {
    if (charCount[chars]) {
      charCount[chars] += 1;
    } else {
      charCount[chars] = 1;
    }

    if (charCount[chars] === 1) {
      return chars;
    }
  }
  //
};

console.log(firstNonRepeatingChar("Shhrriiijja"));

// count the occurence of each character
const countCharacters = (strVal) => {
  const count = {};
  for (let char of strVal) {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }
  return count;
};

console.log(countCharacters("Learn Javascript"));

// reverse words in sentence

const reverseWords = (strVal) => {
  const words = strVal.split(" ");
  const output = words.map((itm) => {
    let val = "";

    for (let i = itm.length - 1; i >= 0; i--) {
      val += itm[i];
    }
    return val;
  });
  return output.join(" ");
};

console.log(reverseWords("Hello World"));

// check if two strings are anagram

const checkAnagram=(word1, word2)=>{
    const val1=[], val2=[];
    for(let i=0;i<word1.length;i++){
        val1.push(word1[i])
    }

    for(let j=0;j<word2.length;j++){
        val2.push(word2[j])
    }

    const anagram1= [...word1].every((char)=>val2.includes(char))
    const anagram2= [...word2].every((char)=>val1.includes(char))

    if(anagram1 === anagram2){
        console.log('Anagram')
        return true
    }else{
             console.log('Not Anagram')
        return false;
    }

}

console.log(checkAnagram('silent','listen'))
console.log(checkAnagram('silent','listendc'))

// find the longest substring without repeating character
const longetsSubString=(strVal)=>{
    let character='';
    let longest='';

    for(let chars of strVal){
        const index= character.indexOf(chars)

        if(index !==-1){
            character = character.slice(index+1)
        }

        character+=chars;
    }
      // update longest if current window is bigger
    if (character.length > longest.length) {
      longest = character;
    }

  return longest;
}

console.log(longetsSubString('abcabc'))

//convert a string to an integer