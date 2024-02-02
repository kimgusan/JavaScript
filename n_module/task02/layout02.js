const todoLayout = (() => {
    const showList = (todos) => {
        const table = document.querySelector(".todos");
        let text = ``;
        todos = todos.slice(0, 10);
        todos.forEach((todo) => {
            if (todo.completed) {
                text += `<tr style="color: red"><td>${todo.id}</td><td>${todo.title}</td><td>${todo.completed}</td></tr>`;
            } else {
                text += `<tr style="color: blue"><td>${todo.id}</td><td>${todo.title}</td><td>${todo.completed}</td></tr>`;
            }
        });
        table.innerHTML = text;
    };
    return { showList: showList };
})();
