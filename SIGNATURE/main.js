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

// let a = 0
// let b = 0
// let c = 0
// const arr = [1, 2, 3];
// [a, b, c] = arr
// console.log(a, b, c)

// let b = 0
// let c = 0
// const arr = [1, 2, 3];
// // 1이 들어갈 자리 비워줘야함
// // 그래야 2와 3이 b, c할당된다
// [, b, c] = arr
// console.log(b, c)

// // 배열 구조 할당에서는 구조를 맞춰서 순서대로 할당
// // 사용하지 않는 변수는 ,로 비워놓자
// // 배열데이터는 item 순서가 매우 중요함 !!

// const arr = [1,2,3]
// const [a, rest] = arr
// console.log(a,rest)

// // a 부분만 할당하고 나머지는 rest로 들어가게 해보자

// const arr = [1,2,3]
// const [a, ...rest] = arr
// console.log(a,rest)

const obj = {
    a: 1,
    b: 2,
    c: 3
}

// const a = obj.a
// const b = obj.b
// const c = obj.c

// const {} = obj
// const [] = arr 
console.log(obj.a ,obj.b)
const { a, b } = obj

console.log(a, b)
