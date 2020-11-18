function removeDupe(str){
    var newStr = str[0];
    var dupe = false;
    for(let i=1; i<str.length; i++){
        for(let j=0; j<newStr.length; j++){
            if(str[i] == str[j]){
                dupe = true;
                break;
            }
        }
        if(dupe){
            dupe = false;
            continue;
        } else {
            newStr += str[i];
        }
    }
    console.log(newStr)
    return newStr;
}

var str = "Hello world!"
removeDupe(str);