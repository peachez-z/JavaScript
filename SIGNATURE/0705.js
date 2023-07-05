// 즉시실행함수(IIFE)
// 함수를 만들었으면 호출해야 동작함
// 함수를 만들자마자 동작하는 함수
// const a = 7
// const double = () => {
//     console.log(a * 2)
// }

// double()

// ;(()=>
//     {
//         console.log(a * 2)
//     }
// )()

// 다양한 즉시 실행 함수 표현법
// ;(()=>{})()                 // (F)()
// // 화살표 함수로 표현 불가 / 일반 함수   
// ;(function () {})()         // (F)()
// ;(function () {}())         // (F())
// ;!function () {}()          // !F()
// ;+function () {} ()         // +F()


// // 다양한 즉시 실행 함수 표현법
// ;(()=>{console.log(a * 2)})()                 // (F)()
// // 화살표 함수로 표현 불가 / 일반 함수   
// ;(function () {console.log(a * 2)})()         // (F)()
// ;(function () {console.log(a * 2)}())         // (F())
// ;!function () {console.log(a * 2)}()          // !F()
// ;+function () {console.log(a * 2)} ()         // +F()

// 즉시실행함수는 두번쨰 소괄호에 들어가는 데이터를
// 즉시실행하는 해당 함수의 매개변수로 전달할 수 있다
// 전역데이터들의 이름을 간소화할 수 있음
// window와 document를 a, b라는 유추할 수 없는 변수로 작성 가능
// ;((a, b) => {
//     console.log(a.innerHeight)
//     console.log(b.body)
// }) (window, document)


// 콜백 -> 하나의 함수임
// 함수가 실행될 때 인수로 들어가는 또하나의 함수
// 아래에선 b가 콜백임
// const a = callback => {
//     callback()
//     console.log('A')
//     callback()
// }

// const b = () => {
//     console.log('B')
// }

// a(b)

// const sum = (a, b, c) => {
//     setTimeout(() => {
//         c(a + b)
//     }, 1000)
// }

// // 콜백 함수가 c로 들어감
// sum(1, 2, value => {
//     console.log(value)
// })
// sum(3, 7, value => {
//     console.log(value)
// })

// 콜백 이용해서 이미지 띄우기
// https://www.gstatic.com/webp/gallery/4.jpg

// const loadImg = (url, cb) => {
//     // 자스 메모리상에 img태그 만들기
//     const imgEl = document.createElement('img')
//     // img 정보에 url을 할당
//     imgEl.src = url
//     // img에 load 이벤트를 추가
//     // load 이미지는 src 속성에 부여된 이미지의 주소를 실제로 load
//     // load가 끝나면 콜백이 실행
//     imgEl.addEventListener('load', () => {
//         setTimeout(() => {
//             cb(imgEl)
//         }, 4000)
//     })
// }
// // html 구조의 컨테이너 클래스를 가진 요소를 찾기
// const containerEl = document.querySelector('.container')
// loadImg('https://www.gstatic.com/webp/gallery/4.jpg', (imgEl) => {
//     // 컨테이너를 비워주고
//     containerEl.innerHTML = ''
//     // imgEl 넣기
//     containerEl.append(imgEl)
// })


// 재귀(Recursive)
// let i = 0
// const a = () => {
//     console.log('A')
//     i += 1
//     if(i < 4){
//         a()
//     }
// }

// a()

const userA = { name: 'A', parent: null}
const userB = { name: 'B', parent: userA}
const userC = { name: 'C', parent: userB}
const userD = { name: 'D', parent: userC}

const getRootUser = user => {
    if (user.parent) {
        return getRootUser(user.parent)
    }
    return user
}

console.log(getRootUser(userA))
console.log(getRootUser(userB))
console.log(getRootUser(userC))
console.log(getRootUser(userD))