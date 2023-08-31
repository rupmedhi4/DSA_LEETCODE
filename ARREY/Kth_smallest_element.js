//Kth smallest element
//https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1


//Given an array arr[] and an integer K where K is smaller than size of array, the task is to find the Kth smallest element in the given array. It is given that all array elements are distinct.

//Note :-  l and r denotes the starting and ending index of the array.

//Example 1: Input:
// N = 6
// arr[] = 7 10 4 3 20 15
// K = 3
// Output : 7
// Explanation :
// 3rd smallest element in the given 
// array is 7.



let arr = [7 ,10, 4, 20, 15]
let K = 4

      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
          if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
          }
        }
      }

     console.log(arr[K-1])