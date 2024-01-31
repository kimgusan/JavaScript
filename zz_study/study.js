// function add(...args) {
//     for (let i in args) {
//         console.log(`index: ${i}`);
//     }

//     for (let i of args) {
//         console.log(`value: ${i}`);
//     }
// }

// add(10, 22, 44, 55);

// const multply = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 * number2);
//     }
//     return number1 * number2;
// };

// result(1, 4, (result) => {
//     console.log(result);
// });

// const payStatus = (price, total, callback) => {
//     if (callback) {
//         return callback(total / price);
//     }
//     return total / price;
// };

// const result = payStatus(1000, 3000, (count) => {
//     return count <= 5;
// });
// console.log(result);

// const setStatus = (price, status, callback) => {
//     if (callback) {
//         callback(status ? "결제완료" : "결제실패");
//     }
// };

// setStatus(3000, true, (message) => {
//     console.log(message);
// });

// let user = {
//     name: "김규산",
//     age: 20,
//     address: "경기도",
//     introduct: () => {
//         console.log("hi");
//     },
// };

// // console.log(user);
// console.log(user.name);
// user.introduct();
// console.log(user["name"]);

// let lunch = new Object();

// lunch.name = "김밥";
// lunch.price = "30000";

// console.log(lunch);
// lunch.pay = () => {
//     console.log("결제완료");
// };

// console.log(lunch);
// lunch.pay();

// let mart = new Object();

// mart.client1 = { names: "홍길동", age: 30, point: 3500 };
// mart.client2 = { names: "이순신", age: 22, point: 0 };
// mart.client3 = { names: "장보고", age: 66, point: 9500 };

// // console.log(mart.client1.point);

// for (let i = 0; i < 3; i++) {
//     console.log(mart[`client${i + 1}`]);
// }
// 프로토타입 new Object

// function Object(id, pw, name, age) {
//     this.id = id;
//     this.pw = pw;
//     this.name = name;
//     this.age = age;
// }

// const kim = new Object("kim", 123, "규산", 20);
// console.log(kim);

// let datas = [10, 8, 20, 3, 2];
// datas.splice(1, 2);
// console.log(datas);
// console.log(datas.pop());
// console.log(datas.shift());
// const [num1, num2, num3, num4, num5] = datas;
// console.log(num1);

// const result = datas.filter((data) => data % 2 != 0);

// const result = datas.reduce((variable, data, i) => {
//     console.log(data, i);
//     variable += data;
//     return variable;
// }, 0);
// console.log(result);

const datas = new Array(7).fill(0);
let array = [];
datas.forEach((data) => {
    list.push(data);
});

console.log(array);
