// 호출스케줄링
// 자스 함수의 호출을 지연 or 반복적으로 호출하게 만들어줌

// setTimeout 함수로 실행하려는 함수의 실행시간 지연가능
// 시간 ms단위로 작성
// 2초뒤에 함수를 실행

// const hello = () =>{
//     console.log('Hello')
// }
// // const timeout = setTimeout(hello, 2000)
// // // h1 태그를 클릭 시 타이머를 해제
// // const h1El = document.querySelector('h1')
// // h1El.addEventListener('click', () => {
// //     console.log('Clear')
// //     clearTimeout(timeout)
// // })

// // setInterval - 2초 마다 함수를 실행
// const timeout = setInterval(hello, 2000)
// // h1 태그를 클릭 시 타이머를 해제
// const h1El = document.querySelector('h1')
// h1El.addEventListener('click', () => {
//     console.log('Clear')
//     clearInterval(timeout)
// })

// this
// 일반 함수의 this 호출 위치에서 정의
// 화살표 함수의 this는 자신이 선언한 함수(렉시컬) 범위에서 정의

const user = {
    firstName : 'aris',
    lastName : 'key',
    age : 17,
    getFullName:()=> {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(user.getFullName())