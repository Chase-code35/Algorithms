function countStrings(strang) {
    var counter = 0;
    var arr = strang.split('')
    var newStrang = strang[0]

    arr.forEach((e, i) => {

        if (e == strang[i]) {

            counter++
            if (e != strang[i + 1]) {
                if (strang[i + 1] == undefined) {
                    // console.log(newStrang)
                    return newStrang += counter.toString();
                }

                newStrang += counter.toString() + strang[i + 1];
                counter = 0;


            }
        }
        // console.log(newStrang)
    });


    return newStrang;
}

var theStrang = 'aaabbcccc';

console.log(countStrings(theStrang));