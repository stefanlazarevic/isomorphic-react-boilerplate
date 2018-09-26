export default () => fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());
