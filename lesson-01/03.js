//code
let number = 1;
const temp = [];
temp.push(number++);
console.log(temp.join(','));
temp.push(++number);
console.log(temp.join(','));
temp.push(number--);
console.log(temp.join(','));
temp.push(--number);
console.log(temp.join(','));
