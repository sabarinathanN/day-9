//print odd number in array using annonyms function
var odd=function(a)
{
if(a%2==0)
{
  return "Even";
}
else
if(a==0)
{
  return "Zero";
}
else
{
  return "Odd";
}

}
console.log(odd([3]))

//IIFE function 

(()=>{
  var arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
   let odds1 = arr1.filter(n1 => n1%2)
  console.log(odds1)
})();


//capitalize the string
//Convert all the strings to title caps in a string array

const string = function(){
function toTitleCase(str){
str =str.toLowerCase().split(' ');
for( i=0;i<str.length;i++){
str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1);
   }
  return str.join(' ');
}
console.log(toTitleCase("WELCOME TO GUVI"));
}
string();


 IIFE function

(()=> {function toTitleCase1(str1){
 str1 =str1.toLowerCase().split(' ');
 for( i=0;i<str1.length;i++){
   str1[i] = str1[i].charAt(0).toUpperCase()+str1[i].slice(1);
  }
    return str1.join(' ');
}
console.log(toTitleCase1("WELCOME TO GUVI"));
})();


//print sum of an array(annonyms)
var sum = 0;
var a=function(arr)
{
for(let i=0;i< arr.length;i++) 
{
   sum += arr[i];
   
}
return sum
}
console.log (a([1,2,3,4]));


//rotate a number k times

const a= function(nums, k)
{

  for (let i = 0; i < k; i++) 
  {
      nums.unshift(nums.pop());
  }

  return nums;
}
console.log(a([1,2,3,4,5],3));

// IIFE function
(function(){
  var rotate=function(nums,k){
  let i=0;
  while(i<k){
  nums.unshift(nums.pop())
  i++;
  }
  return nums;
  }
  var nums=[1,2,3,4,5,6,7]
  var k=2
  console.log(rotate(nums,k));
  })();

//arrow function
//print odd Number
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var a=[];


inp.on("line", (data) => {
  a=data;
});

inp.on("close", () => {
  var odd=(a)=>
{
if(a%2==0)
{
  return "Even";
}
else
if(a==0)
{
  return "Zero";
}
else
{
  return "Odd";
}

};
console.log(odd([a]))
 
});

//palindrom 
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

var a=[];


inp.on("line", (data) => {
  a=data;
});

inp.on("close", () => {
 const pal=(a)=>
 {
const b=a.split('').reverse().join('');
console.log(b);
if(a===b)
{
  console.log("the string is palindrom")
}
else 
{
  console.log("the string is not a palindrom")
}
};
console.log(pal(a));
});

//palindrome using arrow function

//anonymous function
function palindromeArray(arr){
  let isPalindrome = true;
  for(let i = 0; i < arr.length / 2; i++) {
      if(arr[i] !== arr[arr.length - i - 1]){
        isPalindrome = false; 
        break;
      }
  }

  return isPalindrome;
}

console.log(palindromeArray([1,2,2,1]));



// IIFE
(()=>{
let palindromeArrays = (arr1) => {
let Palindrome = true;
  for(let i = 0; i < arr1.length / 2; i++) {
      if(arr1[i] !== arr1[arr1.length - i - 1]){
        isPalindrome = false; 
        break;
      }
  }

  return Palindrome;
}
console.log(palindromeArrays([1,2,2,1]));
})();

//anonymous function OF RETURN PRIME NUBERS
const array = [2,3,4,5,6,7,8,9,10,11]; 
function isPrime(num) {
 for (let start = 2; num > start; start++) {
 if (num % start == 0) {
return false;
    }

  }

return num > 1;

}
console.log(array.filter(isPrime));

// IIFE OF RETURN PRIME NUBERS

(()=>{
  var arr=[1,2,3,4,5,6,7];
  numArray =arr.filter((number)=>{
    for(var i=2;i<=Math.sqrt(number);i++){
      if(number%i===0)
      return false;
    }

    return true;
    })
  console.log(numArray)
})();

//Return median of two sorted arrays of the same size

 //anonymous function

function median(a, b){
    let c = [...a, ...b].sort((a, b) => a - b);
    const half = c.length / 2 | 0;
    if (c.length % 2) 
    return c[half];
    return (c[half] + c[half - 1]) / 2;
}
const arr1 = [1, 12, 15, 26, 38];
const arr2 = [2, 13, 17, 30, 45];
console.log(median(arr1, arr2));


// IIFE function

(() => {

const median = (a, b) => {
 let c = [...a, ...b].sort((a, b) => a - b);
 const half = c.length / 2 | 0;
 if (c.length % 2) 
 return c[half];
  return (c[half] + c[half - 1]) / 2;
}

const arr1 = [1, 12, 15, 26, 38];
const arr2 = [2, 13, 17, 30, 45];
console.log(median(arr1, arr2));
})();

Remove duplicates from an array


 //anonymous function
function Unique(num) {
 let duplicate = [...new Set(num)];
 console.log(duplicate)
}
var num = [111,11,11,111,22,222,222];
Unique(num);

//IIFE function
(()=>{
 let num = [1,1,1,2,2,2,3,3,3];
 let uniqueNum = [...new Set(num)];

console.log(uniqueNum);

})();
//Remove duplicates from an array


 //anonymous function
function Unique(num) {
 let duplicate = [...new Set(num)];
 console.log(duplicate)
}
var num = [111,11,11,111,22,222,222];
Unique(num);

//IIFE function
(()=>{
 let num = [1,1,1,2,2,2,3,3,3];
 let uniqueNum = [...new Set(num)];

console.log(uniqueNum);

//arrow function
//arrow function using Print odd numbers in an array

var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var OddNumber=(arr)=>{
  let odds = arr.filter(n => n%2)
    console.log(odds)
};
   OddNumber(arr);

   //Convert all the strings to title caps in a string array
   const string =()=>{
    function toTitleCase(str){
      str =str.toLowerCase().split(' ');
    for( i=0;i<str.length;i++){
     str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1);
        }
      return str.join(' ');
    
    }
    console.log(toTitleCase("WELCOME TO GUVI"));
     }
     string();

     //Sum of all numbers in an array
     var c=[1,2,3,4,5,6,7,8,9,10]
     var Sum=(c)=>{
      var total=0;
      for(var i in c) { 
      total += c[i];
      }
      console.log(total)
     } 
     Sum(c);

     //Return all the prime numbers in an array

     const array = [2,3,4,5,6,7,8,9,10,11]; 
var isPrime = (num)=>{
for (let start = 2; num > start; start++) {
 if (num % start == 0) {
 return false;
    }

  }

  return num > 1;

}
console.log(array.filter(

  //Return all the palindromes in an array

  let palindromeArr = (arr1) => {

    let isPalindrome = true;
    for(let i = 0; i < arr1.length / 2; i++) {
        if(arr1[i] !== arr1[arr1.length - i - 1]){
          isPalindrome = false; 
          break;
        }
    }
  
    return isPalindrome;
  
  }
  console.log(palindromeArray([1,2,2,1]));

  //Remove duplicates from an array

  var Unique=(num)=>{
    let duplicate = [...new Set(num)];
    console.log(duplicate);
    }
    var num = [111,11,11,111,22,222,222];
    Unique(num);