// Javascript String based coding questions
// 1. Reverse a string
const reverseString = (str) => {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
};

console.log(reverseString("Hello"));

// using predefined functions
const reverseStringUsingFunctions = (str) => {
  const reverseString = str.split("").reverse().join("");
  return reverseString;
};
console.log(reverseStringUsingFunctions("Shrija"));

// 2. Palindrome Check

const checkPalindrome = (str) => {
  let reverse = "";
  const stringVal = str.toLowerCase();
  for (let i = stringVal.length - 1; i >= 0; i--) {
    reverse += stringVal[i];
  }
  if (reverse === stringVal) {
    console.log("String is palindrome");
    return true;
  } else {
    console.log("String is not palindrome");
    return false;
  }
};
console.log(checkPalindrome("Madam"));
console.log(checkPalindrome("Hello"));

// using predefined functions
const checkPalindromUsingPredefinedFunctions = (str) => {
  const stringVal = str.toLowerCase();
  const reverse = stringVal.split("").reverse().join("");
  if (stringVal === reverse) {
    console.log("Palindrome");
    return true;
  } else {
    console.log("Not Palindrome");
    return false;
  }
};

console.log(checkPalindromUsingPredefinedFunctions("Madam"));
console.log(checkPalindromUsingPredefinedFunctions("Hello"));

// 3. Count Vowels
const countVowels = (str) => {
  let counter = 0;
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      counter += 1;
    }
  }
  return counter;
};
console.log(countVowels("palindrome"));

// other way

const countVowelsinString = (words) => {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let counter = 0;
  let obj = {};

  for (let i = 0; i < words.length; i++) {
    if (!vowels.includes(words[i])) continue;

    if (words[i] === words[i + 1]) {
      counter++;
    } else {
      obj[words[i]] = counter;
      counter = 1;
    }
  }
  return obj;
};

console.log(
  countVowelsinString(
    "UuuuuuuuuuNOBJECTIONABLEshdbbajhsfwyeywefgbcsdjchbeeeeeeee"
  )
);

// 4. Anagram Check

const checkAnagram = (str1, str2) => {
  const result1 = [];
  const result2 = [];
  for (let i = 0; i < str1.length; i++) {
    result1.push(str1[i]);
  }
  for (let i = 0; i < str2.length; i++) {
    result2.push(str1[i]);
  }
  const res1 = [...str1].every((char) => result2.includes(char));
  const res2 = [...str2].every((char) => result1.includes(char));
  if (res1 === res2) {
    console.log("Anagram");
    return true;
  } else {
    console.log("Not Anagram");
    return false;
  }
};

console.log(checkAnagram("silent", "listen"));
console.log(checkAnagram("hello", "world"));



//5.Remove Duplicates
const removeDuplicates=(words)=>{
    let filteredValue=[];
    for(let i=0;i<words.length;i++){
        if(!filteredValue.includes(words[i]) ){
            filteredValue.push(words[i]) ;
        }
    }
    return filteredValue.join('');
}

console.log(removeDuplicates('Helloobsdnnndd'))


// 6.Capitalize Words
const capitalizeWords=(words)=>{
    let capitalizeWords=[];
    for(let i=0;i<words.length;i++){
        capitalizeWords.push(words[i].toUpperCase())
    }
    return capitalizeWords.join('')
}

console.log(capitalizeWords('hello'))

// 7. character count
const characterCount=(words)=>{
    let obj={}
    for(let letters of words){
        
        if(obj[letters]  ){
            obj[letters] +=1; 
        }else{
            obj[letters]= 1;
        }
    }
    return obj;
}

console.log(characterCount('aaabbcccc'))


//8. String Compression- String compression means reducing the size of a string by replacing repeated characters 
// or patterns with a shorter representation, while still allowing it to be reconstructed later.
// revisit
const stringCompression=(words)=>{
    let compressed='';
    let count=1;
    for(let i=0;i<words.length;i++){
        if(words[i] === words[i+1]){
            count++;
        }else {
            compressed+= words[i]+count
            count=1;
        }
    }
    return compressed;
}

console.log(stringCompression('aaabbcccc'))


// 9. Rotate String
const rotateString=(words,position)=>{
    let rotate='';
    for(let i=0;i<words.length;i++){
        
    }
}

console.log(rotateString('hello',1))