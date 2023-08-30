//<====================QUESTION LINK ===============================>
//https://leetcode.com/problems/rotate-string/submissions/

//796. Rotate String
//Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.

//A shift on s consists of moving the leftmost character of s to the rightmost position.

//For example, if s = "abcde", then it will be "bcdea" after one shift.
//Example 1:

//Input: s = "abcde", goal = "cdeab"
//Output: true
//Example 2:

//Input: s = "abcde", goal = "abced"
//Output: false

//<================================================================================>

let s = "abcd";
let goal = "cdab";

if (s.length !== goal.length) {
    return false
}

let string = s + s
let stringArr = string.split("")
let goalArr = goal.split("")
let result = []

for (let i = 0; i < stringArr.length; i++) {

    if (stringArr[i] === goalArr[0]) {
        let k = i

        for (let j = 0; j < goalArr.length; j++) {

            if (stringArr[k] === goalArr[j]) {
                result.push(goalArr[j])
                k++
            } else {
                result = []
                break;
            }

        }
        if (result.length === goalArr.length) {
            return true
        }
    }
}
return false