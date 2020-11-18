function partition(arr, idx){
    var last = arr.length-1;
    var temp;
    for(let i = last; i > idx; i--){

        if(arr[i] < arr[idx])
        {
            temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
            idx = i
            partition(arr, idx);
        }
    }
    for(let i = 0; i < idx; i++){

        if(arr[i] > arr[idx])
        {
            temp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;
            idx = i
            partition(arr, idx);
        }
    }
    return arr;
    }


function quickSort(arr){
    for(let i = 0; i<arr.length; i++){
        partition(arr, i);
    }
    arr.forEach((e, i) => {
        if(arr[i+1] < e){
            quickSort(arr);
        }
    });
    return arr;
}