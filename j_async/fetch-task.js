fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        return users.map((user) => user.address.zipcode);
    })
    .then(console.log);

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        return users.forEach((user) => {
            console.log(user.address.zipcode);
        });
    });

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        for (i = 0; i < users.length; i++) {
            console.log(users[i].address.zipcode);
        }
    });

//강사님 코드
// https://jsonplaceholder.typicode.com/users
// zipcode만 추출하기
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            const { zipcode } = user.address;
            test(zipcode);
        });
    });

function test(zipcode) {
    console.log(zipcode);
}
