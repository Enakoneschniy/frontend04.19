(function () {
    'use strict';
    { // task 17
        const inputArray = [1, 2, 3, 4, 5, 6];
        const outputArray = [];

        for (let index = inputArray.length - 1; index >= 0; index -= 2) {
            outputArray.push(inputArray[index - 1], inputArray[index]);
        }
        console.log(outputArray.join());
    }
    { // task 16
        const inputArray = [1, 2, 3, 4, 5, 6];
        const outputArray = [];

        for (let index = 0; index < inputArray.length; index += 2) {
            outputArray.push(inputArray[index + 1], inputArray[index]);
        }
        console.log(outputArray.join());

    }
    {
        const matrix = [
            [10, 20, 30, 40, 50],
            [11, 21, 31, 41, 51],
            [12, 22, 32, 42, 52],
            [13, 23, 33, 43, 53],
            [14, 24, 34, 44, 54]
        ];
        console.log(matrix);
        console.log(matrix[2][4]);
        const n = 10;
        const testMatrix = [];
        for (let row = 0; row < n; row++) {
            testMatrix[row] = [];
            for (let cell = 0; cell < n; cell++) {
                testMatrix[row][cell] = (row + 1) * (cell + 1);
            }
        }
        console.log(testMatrix);
    }
    {
        const n = 10;
        const testMatrix = [];
        for (let row = 0; row < n; row++) {
            testMatrix[row] = [];
            for (let cell = 0; cell < n; cell++) {
                if (row === cell) {
                    testMatrix[row][cell] = 1;
                } else {
                    testMatrix[row][cell] = (row + 1) * (cell + 1);
                }
            }
        }
        console.log(testMatrix);
    }

// sayHello('Hello world!');
    function sayHello(message) {
        alert(message);
    }

    function sum(a, b = 4, c = 5) {
        if (a + b === 8) {
            return 6;
        }
        return a + b + c;
    }

    const result = sum(3, 5, 8);
    console.log(result);

    /*function allSum() {
        let sum = 0;
        for (let num of arguments) {
            sum += num;
        }
        return sum;
    }*/
    function allSum(...args) {
        // console.log(args);
        let sum = 0;
        for (let num of args) {
            sum += num;
        }
        return sum;
    }

    const res = allSum(1, 2, 4, 6);
    console.log(res);

    const foo = function (a, b) {
        return a + b;
    };

    const x = foo(1, 4);

    function testCallback(a, b, callback) {
        callback(a + b, 56, 676);
    }

    function cb11(a, b, c) {
        console.log('LALAL', arguments);
    }

    testCallback(2, 3, cb11);

    const array = [1, 2, 3, 5];
    const array1 = [1, 2, 3, 5];

    function pow2(item) {
        return item ** 2;
    }

    const resArray = array.map(pow2);
    const resArray1 = array1.map(pow2);
    console.log(array, resArray, resArray1);

    /*for (let item of array) {

    }*/
    /*let sumArray = 0;
    array.forEach(function (item) {
        sumArray += item;
    });*/
    let sumArray = array.reduce((sum, item) => sum + item, 0);


    const inc = a => a + 1;

    const f = inc(2);

    const resArray2 = array.map(item => item ** 2);

    function testFunc(a) {
        return function (b) {
            return a + b;
        }
    }

    const testRes = testFunc(2)(3);
    //const fullRes = testRes(3);


})();


