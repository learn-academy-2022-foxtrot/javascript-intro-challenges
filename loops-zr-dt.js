// for (let index = 1; index < 21; index++) {
//     console.log(index)
// }

// let numsArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
// for (let index = 1; index < numsArray.length; index++) {
//     if (numsArray[index] % 2 == 0) {
//         console.log(`${numsArray[index]}`)
//     } 
// }

// let numsArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
// for (let index = 1; index < numsArray.length; index++) {
//     console.log(numsArray[index] * 3)
// }

// let numsArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
//     for (let index = 1; index < numsArray.length; index++) {
//         if (numsArray[index] % 2 == 0) {
//         console.log(`${numsArray[index]}`)
//     } else if (numsArray[index] % 2 !== 0) {
//         console.log("odd")
//     }
// }

const nums = [3, 57, -9, 20, 67]
let highNum = nums[0]

for(let i = 0; i < nums.length; i++) {
    if (nums[i] > highNum) {highNum = nums[1]}
    
    } console.log(highNum)