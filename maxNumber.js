/* Find the maximum number in a jagged array given below array of numbers?
var ar= [2,4,10,[12,4,[100,99],4],[3,2,99],0]; */


var ar = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0]

function getMaxNumber(ar,max = -Infinity) {
    
    for (var i = 0; i < ar.length; i++) {
        if (Array.isArray(ar[i])) {
            return getMaxNumber(ar[i],max);
        };
        if (ar[i] >max) {
           max = ar[i];
        }
    };
    return max;
}

console.log(getMaxNumber(ar));