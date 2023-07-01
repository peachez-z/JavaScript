// for of 반복문
// const fruits = ['Apple', 'Banana', 'Cherry']

// for (let i=0; i < fruits.length; i += 1) {
//     console.log(fruits[i])
// }

// for (const a of fruits) {
//     console.log(a)
// }

// const users = [
//     {
//         name: 'autumn',
//         age: 28
//     },
//     {
//         name: 'aris',
//         age: 18
//     },
//     {
//         name: 'momo',
//         age: 40
//     }
// ]

// for (const user of users){
//     console.log(user.name, user.age)
// }

// for in 반복문
// const user = {
//     name: 'aris',
//     age: '18',
//     isValid: true,
//     email: 'aris@gmail.com'
// }

// for (const key in user){
//     console.log(user[key])
// }

// while 반복문
// let n = 0
// while (n < 4) {
//     console.log(n)
//     n += 1

// }

// Do while 반복문
let n = 0
// do 에 실행할 코드 / while에 조건
// 조건을 먼저보는것 X do 안에 코드를 먼저 실행함
do {
    console.log(n)
    n += 1
} while (n < 4)