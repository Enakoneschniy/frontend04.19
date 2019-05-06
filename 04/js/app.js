//'use strict';

function foo(a, callbackFn) {
    // b = b || 5;
    callbackFn();
    //return a + b;
}

//foo(4, 0);
const baz = function () {
    console.log('test');
};
const y = 6;
foo(y, baz);

const array = [1, 2, 3, 4, 5, 6];

/*const resultArray = array.map(function (item) {

});*/

function map(array, callbackFn) {
    const resultArray = [];
    for (let index in array) {
        resultArray[index] = callbackFn(array[index]);
    }
    return resultArray;
}

const res = map(array, function (item) {
    if (item % 2 === 0) {
        return item ** 2;
    }
    return item;
});
const ress = map(array, item => (item % 2 === 0) ? item ** 2 : item);
console.log(res);
const res1 = array
    .filter(item => item % 2 === 0)
    .map(item => item * 2)
    .filter(item => item > 4)
    .reduce((sum, item) => sum + item, 0);

console.log(res1);

function carry(pow) {
    return function (num) {
        return num ** pow;
    }
}

const pow2 = carry(2);

console.log(pow2(3));

const pow3 = carry(3);

console.log(pow3(3));


function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));

function bazz(a, b) {
    console.log(this, a, b);
    console.log(this + a + b);
}

bazz.call(2, 3, 4);
bazz.apply(2, [3, 4]);
const newBazz = bazz.bind(2);
newBazz(3, 4);

function square(num) {
    return num ** 2;
}

function add() {
    return [].reduce.call(arguments, (sum, item) => sum + item, 0);
}
function add1(...args) {
    return args.reduce((sum, item) => sum + item, 0);
}
function fmap(square, add) {
    return function (...args) {
        // const sum = add(...args);
        // return square(sum);
        return square(add(...args));
    }
}

const squareAdd = fmap(square, add);
console.log(squareAdd(2, 2, 2));


const [g, j, ...arr] = [1, 3, 4, 5];
console.log(g, j, arr);

Array.prototype.map = function (item) {
    console.log(this);
};
Array.prototype.sum = function () {
    return this.reduce((sum, item) => sum + item, 0);
};
console.log([1, 3, 4, 5].sum());
