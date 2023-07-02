// 함수

// // 함수 선언문(Declaration)
// // function으로 시작해서 이름이 붙음
// function hello() {}

// // 함수 표현식(Expression)
// // const나 let으로 만들어진 변수에
// // 할당연산자로 함수가 들어감
// const hello = function() {}

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// hello()

// const hello = function() {
//     console.log('Hello')
// }

// // 반환 및 종료
// function hello() {

// }
// console.log(hello())
// console.log(hello)

// function plus(num) {
//     if (typeof num !== 'number') {
//         console.log('숫자를 입력해주세요!')
//         return 0
//     }
//     return num + 1
// }

// console.log(plus(2))
// console.log(plus(7))
// console.log(plus())

// 매개변수 패턴(Parameter Pattern)
// 기본값(Default value)
// function sum(a, b = 1) {
//     return a + b
// }

// console.log(sum(1, 2))
// console.log(sum(7))

// 객체 구조 분해 할당(Destruncturing assignment)
// const user = {
//     name : 'aris',
//     age : 17
// }

// function getName({name}){
//     return name
// }

// function getAge({age}){
//     return age
// }

// function getEmail({email = '이메일이 없습니다'}){
//     return email
// }

// console.log(getName(user))
// console.log(getAge(user))
// console.log(getEmail(user))

// 배열 구조분해할당
// const fruits = ['Apple', 'Banana', 'Cherry']
// const numbers = [1, 2, 3, 4, 5, 6, 7]

// function getSecondItem([, b]){
//     return b
// }

// console.log(getSecondItem(fruits))
// console.log(getSecondItem(numbers))

// 나머지 매개변수(Rest parameter)
// 전개연산자 사용 -> 들어오는 모든 인수를 배열 데이터로 받음
// function sum(...rest) {
//     console.log(rest)
//     // arguments = Array-Like 유사배열
//     // 따로 지정하지 않아도 함수에서 언제든 사용가능
//     // 배열이 아니기 때문에 reduce 사용 불가 그래서 rest 사용
//     console.log(arguments)
//     // reduce : 배열데이터의 아이템 개수만큼 콜백함수를 실행
//     return arguments.reduce(function(acc, cur) {
//         return acc + cur
//     // 초기값 0
//     }, 0)
// }

// console.log(sum(1, 2))
// console.log(sum(1, 2, 3, 4))
// console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))

// 화살표 함수(Arrow function)
// function sum() {}
// const sum = function() {}
// // 간결하게 작성 가능
// const sum = () => {}

// function sum(a, b) {
//     return a + b
// }


// const sum = (a, b) => a + b

// console.log(sum(1, 2))
// console.log(sum(10, 20))

// 매개변수 넣기 가능 
// 매개변수가 하나면 소괄호 생략 가능
// 매개변수가 여러개면 소괄호 생략 불가능
const a = () => {}
const b = x => {}
const c = (x, y) => {}

const d = x => { return x * x}
const e = x => x * x

// return 으로 시작하지 않고 다른 로직으로 시작할 경우
// return과 중괄호 생략 불가능한 경우
const f = x => {
    console.log(x*x)
    return x*x
}

// 객체를 return
const g = () => { return { a: 1 }}
// 틀린 코드
// const h = () => { a: 1 }
// 맞는 코드 - 괄호로 감싸줘야 객체 데이터인걸 안다.
const h = () => ({ a: 1 })

// 배열을 return
const i = () => { return [1, 2, 3]}
// 배열은 소괄호 사용할필요 X
const j = () => [1, 2, 3]