(async () => {
    async function getUsers() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        return response.data;
    }
    function render(users) {
        const tableBody = document.getElementById('users-table-body');
    }
    render(await getUsers());
    [].slice.call(document.querySelectorAll('.t-header'))
        .forEach(th => {
            th.addEventListener('click', e => {
                console.log(e.target.getAttribute('data-prop'))
            })
        });
    document.querySelector('thead tr')
        .addEventListener('click',e => {
            const tag = e.target;
            if(tag.classList.contains('.t-header')) {
                console.log(tag.getAttribute('data-prop'))
            }
        })
})();


