// if 조건문
// 1. 조건이 참일 경우에만 실행
// if (조건){

// }

// // 2. 조건이 거짓일 때도 실행하고 싶을 때 사용
// if (조건){

// } else{

// }

// // 3. 조건이 여러개 제공할 때
// if (조건1) {

// } else if (조건2) {

// } else if (조건3) {

// } else {

// }

// // if 조건문 예제
// function isPositive(number) {
//     if (number > 0) {
//         return '양수'
//     } else if(number < 0){
//         return '음수'
//     } else {
//         return '0'
//     }
// }

// console.log(isPositive(1))
// console.log(isPositive(10))
// console.log(isPositive(-21))
// console.log(isPositive(0))

// // switch 조건문
// switch (조건) {
//     case 값1:
//         // 조건이 값1일 때 실행
//         break
//     case 값2:
//         // 조건이 값2일 때 실행
//         break
//     default:
//         // 조건이 값1도 값2도 아닐 때 실행
// }

// // 예제
// function price(fruit) {
//     // switch (fruit) {
//     //     case 'Apple':
//     //         return 1000
//     //     case 'Banana':
//     //         return 1500
//     //     case 'Cherry':
//     //         return 2000
//     //     default:
//     //         return 0
//     // }
//     if (fruit === 'Apple'){
//         return 1000
//     } else if ( fruit === 'Banana'){
//         return 1500
//     } else if ( fruit === 'Cherry'){
//         return 2000
//     } else {
//         return 0
//     }
// }

// console.log(price('Apple'))
// console.log(price('Banana'))
// console.log(price('Cherry'))
// console.log(price('Mango'))

// // for 반복문
// for ( 초기화; 조건; 증감){
//     // 반복 실행할 코드
// }

// 예제
for (let i = 9; i > -1; i -= 1) {
    if (i%2 === 0){
        continue
    }
    console.log(i)
}