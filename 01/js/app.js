'use strict';
// трочный комментарий
/*
Блочный
комментарий
*/
//console.log(isTrue);
const PI = 3.14; // number
let name = 'Petya ' + PI; // string
let name1 = "Petya"; // string
let name2 = `Petya ${PI}`; // string
var isTrue = true; // boolean
let y = undefined; // undefined
let x = null; // null
let obj = {}; // object

let a = 1;
let b = '2.5f4';

let res = a + b;
res += 34; // res = res + 34;
const res1 = a + parseFloat(b);
console.log(res);
console.log(res1);

const z = 4 % 2;
console.log(z);

let num1 = parseFloat(prompt('input num 1'));
let num2 = parseFloat(prompt('input num 2'));
let result = num1 + num2;
console.log(result);
result = 2;
console.log(result++); // 2
console.log(result); // 3
console.log(++result); // 4
console.log(result); // 4
console.log(--result); // 3
console.log(result--); // 3

let v = 2, n = 4, c = 6;

const k = v++ - --n + ++c - ++v;
console.log(k ** 3);
console.log(Math.pow(k, 3));

const test = 3 < 4; // true
const test1 = 3 > 4; // false
const test2 = 3 >= 4; // false
const test3 = 3 <= 4; // true
const test4 = 3 == '3'; // true
const test5 = 3 === '3'; // false
const test6 = 3 !== '3'; // true

const userName = 'переменная';
const age = 18;
if (age >= 18) {
    if (age >= 21) {
        console.log('Продаем сигареты, водку и пиво!!');
    } else {
        console.log('Продаем сигареты и пиво!!');
    }
} else {
    console.log('Пошел вон!!!');
}
const cc = '';
if (!!cc) {
    console.log(cc);
}

if (age >= 18 && age < 21) {
    console.log('Продаем сигареты и пиво!!');
}
if ((age >= 18 || age < 21) && age === 19) {
    console.log('Продаем сигареты и пиво!!');
}

if (age === 18) {
    // code
} else if (age === 21) {
    // code
}
switch (age) {
    case 18:
        //code
        break;
    case 21:
        //code
        break;
    default:
        // code
        break;
}












