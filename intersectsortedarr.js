//Intersect Sorted Arrays
//Given two sorted arrays, return a new array containing all the numbers they have in common

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []

var array1 = [1,1,1,3,4,5,7,10,12];
var array2 = [1,1,3,6,7];
var array3 = [9,8,10,12,14]
var newArray = [];

function compareArr(array1, array2){
    for(var i = 0; i < array1.length; i++){
        if(array1[i] === array2[i]){
                newArray.push(array2[i]);
            }
        else{
            for(var b = 0; b < array2.length; b++){
                if(array1[i] === array2[b]){
                    if(array2[b] === newArray[b]){
                        break
                    }
                    else{
                        newArray.push(array2[b])
                    }

                }
            }
        }
    }
    // console.log("--Break--");
    // console.log(newArray);
    return newArray;
}

console.log(compareArr(array1, array2));