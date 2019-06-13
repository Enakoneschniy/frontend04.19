'use strict';
const btn = document.getElementById('rnd-btn');

btn.addEventListener('click', async function (e) {
    e.preventDefault();
    try {
        const post = await getPost(random());
        render(post);
    } catch (e) {
        console.log(e.response);
        errorRender(e.message);
    } finally {

    }

});

function random() {
    return Math.round(Math.random() * 1000);
}

async function getPost(id) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return response.data;
}

function errorRender(errorMessage) {
    const postContainer = document.getElementById('post');
    postContainer.innerHTML = `
    <h3 class="error-message">${errorMessage}</h3>
    `;
}

function render({ title, body }) {
    const postContainer = document.getElementById('post');
    postContainer.innerHTML = `
    <h2 class="post-title">${title}</h2>
    <div class="post-body">${body}</div>
    `;
}

function divide(a, b) {
    if(b === 0) {
      throw new Error('Divide by zero!!!!!!!!!');
    }
    return a / b;
}
try {
    divide(1, 0);
} catch (e) {
    console.warn(e.message)
}






