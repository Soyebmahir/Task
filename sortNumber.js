const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8]

function uniqueValue(arr) {
    const uniqueNumber = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueNumber.indexOf(arr[i]) === -1) {
            uniqueNumber.push(arr[i]);
        }
    }
    uniqueNumber.sort(function (a, b) {
        return a - b
    })
    return uniqueNumber
}

//   const arr = [1, 5, 7, 44, 5, 9, 4, 5, 9, 10, 6, 7, 8];
const result = uniqueValue(arr);
console.log(result);