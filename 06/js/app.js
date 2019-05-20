'use strict';
const [a, b] = [1, 3];
const obj = { id: 2, name: 'Lalal', h: 3, k: 'fff' };
const { name, id, ...other } = obj; // { id: 2, name: 'Lalal' };
const newObj = {
    name,
    id,
    test
};

function test() {
    console.log('test')
}

function multSum({ a, b }) {
    const sum = a + b;
    const mult = a * b;

    return { sum, mult }
}

const { mult } = multSum({ a: 2, b: 3 });
console.log(mult);

const setVar = new Set([1, 2, 3]);
const mapVar = new Map([
    [1, '22'],
    [2, '22']
]);

const n = 8;
const array = [1, 2, 3, 5, 6, 665, 657, 34];
const result = new Map();
for(let number of array) {
    result.set(n - number, number);
}
console.log(result.entries());
/*
    1. Напишите функцию, которая создаёт комбинацию
    двух списков таким образом:

    [1, 2, 3] (+) [11, 22, 33] -> [1, 11, 2, 22, 3, 33]


    2. У вас есть девять цифр: 1, 2, …, 9. Именно в таком порядке.
    Вы можете вставлять между ними знаки «+», «-» или ничего.
    У вас будут получаться выражения вида 123+45-6+7+89.
    Найдите все из них, которые равны 100.
*/

class MyClass {
    constructor() {
        this._message = 'Hello';
        this.firstName = 'Vasya';
        this.lastName = 'Pupkin';
    }
    get message() {
        return this._message;
    }
    set message(value) {
        if(typeof value === 'string') {
            this._message = value;
        } else {
            throw 'Bad data!';
        }
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

}
const myObj = new MyClass();

console.log(myObj.message);
myObj.message = 'ssss';
console.log(myObj.message);
console.log(myObj.fullName);




class Helper {
    static sum(a, b) {
        return a + b;
    }
}
class Helper1 {
    static sum(a, b, c) {
        return a + b + c;
    }
}

console.log(Helper.sum(2, 3));
console.log(Helper1.sum(2, 3, 44));


