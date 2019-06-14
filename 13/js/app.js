(async () => {
    async function getUsers() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        return response.data;
    }
    function render(users) {
        const tableBody = document.getElementById('users-table-body');
    }
    render(await getUsers());

})();


