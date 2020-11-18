function unionSort(arr1, arr2){
    let output = [];
    var counter = 0;
    for(let i = 0; i<arr1.length; i++){
        while(arr2[counter] < arr1[i]){

            output.push(arr2[counter]);
            counter++;
        }
        if(arr2[counter] == arr1[i]){
            counter++
        }
        output.push(arr1[i]);
    }
    while(counter < arr2.length){
        output.push(arr2[counter])
        counter++;
    }
    console.log(output);
    return output;
}

unionSort([1,2,3,3,5], [2,3,4,6])
unionSort([1,1], [1])