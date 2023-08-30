//-------------------Question--------------------
// https://www.geeksforgeeks.org/print-all-the-duplicates-in-the-input-string/
// Print all the duplicate characters in a string
// Given a string S, the task is to print all the duplicate characters with their occurrences in the given string.

// Example:
// Input: S = “geeksforgeeks”
// Output:

// e, count = 4
// g, count = 2
// k, count = 2
// s, count = 2

let string = 'geeksforgeeks';

let stringArr =string.split("") //Convert string to array
//console.log(w);
let result = {}  
let DublicateChar ={}

for(let string of stringArr){
    //console.log(string);  Each string print 
    if(result[string]){
         result[string]=  result[string]+1
         DublicateChar[string] = result[string]
    }else{
        result[string]=1
    }
    

}

// Loop in object
for(let key in DublicateChar){
    console.log(`${key}, count ${DublicateChar[key]}`);
}

console.log(result)
console.log(DublicateChar)