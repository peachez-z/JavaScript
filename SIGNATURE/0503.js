// const string1 = "hello"
// const string2 = 'hello'
// const string3 = `hello ${string1} ?!`

// console.log(string3)

const number1 = 123
console.log(number1+1)

const number2 = -123
console.log(number2+1)

const number3 = .14
console.log(number3)
console.log(typeof(number3))

const number4 = -123
console.log(number4 + undefined)
// 숫자 연산에 숫자가 아닌 다른 값이 포함되어 있을 때
// Not a number
console.log(typeof(number4 + undefined))

const a = 0.1
const b = 0.2
// 부동소수점 오류
console.log(a+b)
// 소수점 1자리 숫자만 남기기
console.log((a+b).toFixed(1))
// toFixed는 숫자를 문자데이터로 바꾸니까 주의 할 것
console.log(typeof (a+b).toFixed(1))
// 숫자로 바꾸기
console.log(Number((a+b).toFixed(1)))
console.log(typeof Number((a+b).toFixed(1)))