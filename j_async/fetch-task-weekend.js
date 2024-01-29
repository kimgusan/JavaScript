fetch("https://jsonplaceholder.typicode.com//posts")
    .then((response) => response.json())
    .then((users) => {
        return users.forEach((user) => {
            console.log(user.address.zipcode);
        });
    });
