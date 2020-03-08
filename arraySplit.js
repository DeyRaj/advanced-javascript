console.log("----Slice----");
const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2, 5);
console.log(part);
console.log(nums);

console.log("----Splice----");
const numbers = [1,2,3,4,5,6,7,8];
const removed = numbers.splice(2, 3, 55 ); //55 is goining to  be injected in the array
console.log(removed);
console.log(numbers);

console.log("----Array Join----");
const arrayJoin = [1,2,3,4,5,6,7,8];
const together = arrayJoin.join(",");
console.log(together);
