// 구조 분해 할당
//  각 데이터의 구조에 맞게 변수를 쉽게 만들 수 있어 편리

// // 배열
// const arr = [1, 2, 3]
// // const a = arr[0]
// // const b = arr[1]
// // const c = arr[2]

// // console.log(a, b, c)

// // 구조 분해 할당 문법
// // 배열을 분해해서 재할당하는 것임
// const [a, b, c] = arr
// console.log(a, b, c)

let a = 0
let b = 0
let c = 0
const arr = [1, 2, 3];
[a, b, c] = arr
console.log(a, b, c)
