/* 3. Find the counts of duplicates in an array?
const arr= ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9" ,"13"] */



const arr = ["1", "5", "9", "14", "5", "22", "48", "25", "22", "20", "9", "13"]

function duplicateNumbers(arr) {
    // let duplicateNumber = []
    // let count=0;
    let count ={};
  /*   for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i) {
       
            // duplicateNumber.push(arr[i])
            count =count+1
        }
    } */
    arr.forEach(element => {
        count[element]=(count[element] || 0)+1;
        
    });
    // return duplicateNumber
    return count ;
}

console.log(duplicateNumbers(arr))