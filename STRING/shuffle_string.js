let str1 = "BA"
let str2 = "XY"
let shuffle = "XfAB" 

let newShuffle=shuffle.split("")
let new_str=str1+str2
let strArr = new_str.split("")

if(newShuffle.length !==strArr){
    console.log("false");
}

for(let i=0;i<newShuffle.length; i++){

    for(let j =0 ; j<strArr.length; j++){
        if(newShuffle[i]===strArr[j]){
            strArr.splice(j, 1); // delete array
            break;
        }
    }
 }

 if(strArr.length>0){
    console.log("false")
 }else{
    console.log("true");
 }