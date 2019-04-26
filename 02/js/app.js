'use strict';
const res = 0 || null || 5;
console.log(res);
let num = 2;
while (num <= 9) {
    let num2 = 2;
    while (num2 <= 9) {
        console.log(num * num2++);
    }
    num++;
}
let x = 11;
do {
    console.log(x++);
} while (x <= 10);
let y = null;
/*do {
    y = parseFloat(prompt('input y'));
    if(isNaN(y)) {
        alert('wrong "y" value');
    }
} while (isNaN(y));*/
console.log(y ** 2);
console.log('-------------------');
while (true) {
    const num = Math.ceil(Math.random() * 10);
    console.log(num);
    if(num >= 5) {
        break;
    }
}
y = 1;

while (y <= 10) {
    if(y % 2 === 0) {
        y++;
        continue;
    }
    console.log(y);
    y++;
}

for(let y = 1; y <= 10; y++) {
    console.log(y);
}

const foo = y >= 10 ? 56 : 45;
console.log(foo);

const arrNums = [11, 2, 13, 4, 5, 6];
console.log(arrNums[6]);
arrNums[6] = 1;
console.log(arrNums[6]);
console.log(arrNums);

/*arrNums[9] = 122;
console.log(arrNums[9]);*/

arrNums[arrNums.length] = 122;
arrNums[arrNums.length] = 133;
arrNums.push(456);
const lastElem = arrNums.pop();
const lastElem1 = arrNums[arrNums.length - 1];
console.log(arrNums);
console.log(lastElem);
console.log(lastElem1);

const firstElem = arrNums.shift();
console.log(firstElem);
console.log(arrNums);

arrNums.unshift('string');
console.log(arrNums);
arrNums[4] = 5555;
console.log(arrNums);

console.log(arrNums.slice(2, 5));
console.log(arrNums);
arrNums.splice(5, 0, 2);
console.log(arrNums);
console.log(arrNums.indexOf(2, 3));
console.log(arrNums.lastIndexOf(2));
console.log(arrNums);
const bar = arrNums.join('|');
console.log(bar);
const array = bar.split('|');
console.log(array);

const [a, b, ...other] = arrNums;

console.log(a, b, other);
console.log(arrNums);

const baz = [2, 3, 4, ...other];
const newArr = baz.concat([222, 3, 45, 6]);
console.log(newArr);
console.log(baz);


for(let index = 0; index < newArr.length; index++) {
    console.log(index, newArr[index]);
}
console.log('-------------------------');
for(let index in newArr) {
    console.log(index, newArr[index]);
}

console.log('-------------------------');
let sum = 0;
for(let value of newArr) {
    sum += value;
}
console.log(sum);



