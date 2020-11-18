function insertSort(arr){
    for(let i = 1; i < arr.length; i++){
        if (arr[i] < arr[i-1]) {

            for(let j = i; j > 0; j--){

                if(arr[j] < arr[j-1]){
                    [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
                } 
            }
        }
    }
}

myArr = [5,4,14,3,10,2,1];
insertSort(myArr);
console.log(myArr);

