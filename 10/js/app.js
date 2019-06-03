'use strict';
const str = " Hello world!.";
console.log(/^[a-z !а-яё\.]+$/i.test(str));
const password = 'asd34';
console.log(/^[a-z0-9]{6,20}$/i.test(password));

const rules = [
    {
        text: 'Минимум 1 большая буква',
        regex: /[A-Z]+/
    },
    {
        text: 'Минимум 1 большая буква',
        regex: /[A-Z]+/
    },
    {
        text: 'Минимум 1 большая буква',
        regex: /[A-Z]+/
    }
];

const inputText = 'dsdsfg';
let errorCount = 0;
rules.forEach(function (item) {
    if(item.regex.test(inputText)) {
        // покрасить правило в зеленый
        errorCount--;
    } else {
        // покрасить правило в красный
        errorCount++;
    }
    // проверка на количество ошибок
});
