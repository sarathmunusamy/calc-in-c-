//sample
//sample//sample
//sample//sample
//sample//sampledsadad
//sample//sample
//sample//sample
//sample//sample
//sample
var unique = function(origArr) {
    var newArr = [],
        origLen = origArr.length,
        found, x, y;

    for (x = 0; x < origLen; x++) {
        found = undefined;
        for (y = 0; y < newArr.length; y++) {
            if (origArr[x] === newArr[y]) {
                found = true;
                break;
            }
        }
        if (!found) {
            newArr.push(origArr[x]);
        }
    }
    return newArr;
}

var arr = ['a', 'b', 'c', 'a', 'd', 'e', 'b', 'c', 'f', 'g', 'f'];

var arrUnique = unique(arr);
var arrUnique = unique(arr);

alert(arrUnique);
