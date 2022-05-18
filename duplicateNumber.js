/* 3. Find the counts of duplicates in an array?
const arr= ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9" ,"13"] */



const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]

function duplicateNumbers(arr) {
    let duplicateNumber = []
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i) {
       
            duplicateNumber.push(arr[i])
        }
    }
    return duplicateNumber
}

console.log(duplicateNumbers(arr))