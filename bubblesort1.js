var array;
array = [20,10,4,5,6,19,34,0]

function insurtionSort(arr) {
    for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < arr.length; i++) {
            var temp;
            if (arr[i] < arr[i-1]) {
                temp = arr[i];
                arr[i] = arr[i-1];
                arr[i-1] = temp;
            }
        }
    }
    return arr;
}

console.log(insurtionSort(array));