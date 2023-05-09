// 산술 연산자
// 연산자 - 기호 / 피연산자 - 데이터
// console.log(1 + 2)
// console.log(5 - 7)
// console.log(3 * 4)
// console.log(10 / 2)
// console.log(7 % 5)

// function isEven(num) {
//     return num % 2 === 0
// }
// console.log(isEven(3))
// console.log(isEven(12))

// 할당연산자
// const는 재할당이 불가능해 잘못된 코드
// const a = 3
// a = a + 2
// console.log(a)

// let a = 3
// a = a + 2
// console.log(a)

// a += 2
// console.log(a)

// a -= 2
// console.log(a)

// a *= 2
// console.log(a)

// a /= 2
// console.log(a)

// a %= 2
// console.log(a)

// // 증감 연산자
// let a = 3

// console.log(a)
// // 증가연산자 -> 여기서 더해지고 그 다음에 더해진 결과가 나옴
// console.log(a++)
// // 감소연산자
// console.log(a--)
// console.log(a)
// // 앞에 달면 바로 결과나옴
// console.log('---------')
// console.log(--a)
// console.log(a)
// console.log('+++++++++')
// console.log(++a)
// console.log(a)

// // 부정 연산자 - !
// console.log(!true)
// console.log(!false)
// // 0은 대표적인 falsy임 -> 부정연산자 사용하면 true됨
// console.log('===== 0 =====')
// console.log(!0)
// console.log(!!0)
// console.log(!!!0)

// console.log('===== falsy =====')
// console.log(!null)
// console.log(!undefined)
// console.log(!NaN)
// console.log(!'')

// console.log('===== Truthy =====')
// console.log(!{})
// console.log(![])

// // 비교연산자
// const a = 1
// const b = 3
// // == 동등연산자는 형변환이 된다
// console.log(a == b)
// // a와 b는 동등하지 않다 // 형변환
// console.log(a != b)

// // 일치연산자
// console.log('===')
// console.log( a === b )

// // 불일치연산자
// console.log('!==')
// console.log(a !== b)

// // 큼
// console.log('>')
// console.log(a > b)

// // 크거나 같음
// console.log('>=')
// console.log(a >= b)

// // 작음
// console.log('<')
// console.log(a < b)

// // 작거나 같음
// console.log('<=')
// console.log(a <= b)

// 논리 연산자
// const a = true
// const b = false
// const c = true

// // AND
// if(a && b){
//     console.log('모두가 참 !!')
// }

// // AND
// if(a && c){
//     console.log('모두가 참 !!')
// }

// // OR
// if(a || b){
//     console.log('하나 이상이 참 !!')
// }

// // 거짓을 만나면 반환
// console.log(true && false)
// console.log(1 && 0)
// console.log(1 && 2 && 0)
// console.log(1 && 0 && 2)
// console.log(0 && 1 && 2)
// console.log('A' && 'B' && '')
// console.log('A' && 'B' && 'C')

// OR 가장 먼저만나는 참 데이터 반환
// console.log(false || true)
// console.log(0 || 1)
// console.log(false || 0 || {})
// console.log(false || {} || null)
// console.log(function() {} || undefined || '')
// // true 없으면 제일 마지막 false 반환
// console.log(false || 0 || NaN)

// Nullish 병합연산자 - ??
// const n = 0
// // OR를 사용 -> 왼쪽에서 오른쪽으로 참을 찾아 참인 7을 반환
// const num1 = n || 7
// console.log(num1)
// // Nullish -> null / undefined 건너뛰고 나머지 모든 데이터를 만나면 변환
// // 0 -> ||에서는 건너뛰지만, Nullish는 건너뛰기 X
// // OR -> falsy가 기준
// // Nullish -> null / undefined 가 기준 // OR보다 범위를 축소
// const num2 = n ?? 7
// console.log(num2)

// console.log(null ?? 1)  // 1
// console.log(undefined ?? 2) // 2
// console.log(null ?? undefined)  // 못 넘어가서 제일 마지막꺼 반환
// console.log(null ?? 1 ?? 2)
// console.log(false ?? 1 ?? 2)
// console.log(0 ?? 1 ?? 2)

// 삼항연산자
// const a = 1
// if (a < 2){
//     console.log('참!')
// } else {
//     console.log('거짓...')
// }

// console.log(a < 2 ? '참!' : '거짓...')

// function getAlert(message){
//     return message ? message : '메시지가 존재하지 않습니다 !'
// }

// console.log(getAlert('하이'))
// console.log(getAlert(''))

// // 전개 연산자
// const a = [1, 2, 3]
// console.log(a)
// console.log(...a)

// const b = [4, 5, 6]
// // concat으로 배열 2개 합치기
// console.log('=====c=====')
// const c = a.concat(b)
// console.log(c)
// console.log('=====d=====')
// const d = [a, b]
// console.log(d)
// console.log('=====e=====')
// const e = [...a, ...b]
// console.log(e)

// const a = { x : 1, y : 2}
// const b = { y : 3, z : 4}
// // a와 b를 병합
// const c = Object.assign({}, a, b)
// console.log(c)

// const d = {a, b}
// console.log(d)
// // y가 중복됨 -> 나중에 들어오는 속성으로 덮어짐
// const e = {...a, ...b}
// console.log(e)

function fn(x, y, z){
    console.log(x, y, z)
}

fn(1, 2, 3)

const a = [1, 2, 3]
fn(a[0],a[1],a[2])
// indefined
fn(a)
fn(...a)