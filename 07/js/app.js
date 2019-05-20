'use strict';

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        // this.fullName = `${firstName} ${lastName}`
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(value) {
        const names = value.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

const user = new User('Vasya', 'Petrov');
console.log(user);
console.log(user.firstName);
console.log(user.fullName);
user.firstName = 'Petya';
console.log(user.fullName);
user.fullName = 'Nikita Djigurda';
console.log(user.fullName);

const appDiv = document.getElementById('app');
console.log(appDiv);
const tagP = document.createElement('p');
console.log(tagP);
const message = 'ddd';
tagP.innerHTML = `<strong>${message}</strong>`;
console.log(tagP);
appDiv.appendChild(tagP);
document.querySelectorAll('.cc');
appDiv.classList.add('some-class');
appDiv.classList.toggle('some-class');

const btn = document.getElementById('btn');
const link = document.getElementById('link');
btn.addEventListener('click', event => {
    event.stopPropagation();
    console.log(event.target.innerText);
});
link.addEventListener('click', event => {
    event.preventDefault();
    console.log('dd');
});
function onButtonClick(event) {
    console.log('BODY CLICK', event.target);
    document.body.removeEventListener('click', onButtonClick);
}
document.body.addEventListener('click', onButtonClick);

// appDiv.hidden = true;
//tagP.style = 'color: red; background: yellow; text-align: right;';


