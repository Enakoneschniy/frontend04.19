'use strict';

/*const calcForm = document.getElementById('calcForm');

calcForm.addEventListener('submit', e => {
    e.preventDefault();
    const a = calcForm.querySelector('input[name="a"]').value;
    const b = calcForm.querySelector('input[name="b"]').value;
    const op = calcForm.querySelector('select[name="op"]').value;
    const result = eval(`${a} ${op} ${b}`);
    document.getElementById('result').innerText = result;
});*/
$('#calcForm').submit(function (e) {
    e.preventDefault();
    const formData = $(this).serializeArray();
    const jsStr = formData.reduce((res, item) => res + ` ${item.value}`, '');
    $('#result').html(eval(jsStr));
});

$('.btn').click(function () {
    console.log('click');
    // $('.container').append('<button class="btn">Text</button>');
});

$('.btn1').one('click', function () {
    console.log('click one');
});

$('.container').on('click', '.btn', function () {
    console.log('click');
});




