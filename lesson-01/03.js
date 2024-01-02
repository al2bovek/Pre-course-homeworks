//code
let number = 1;
const temp = [];
temp.push(number++);
console.log(temp[0]);
temp.push(++number);
console.log(temp[0], temp[1]);
temp.push(number--);
console.log(temp[0], temp[1], temp[2]);
temp.push(--number);
console.log(temp[0] + ',' + temp[1] + ',' + temp[2] + ',' + temp[3]);
