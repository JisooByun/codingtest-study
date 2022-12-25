//https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    //자릿수 다 더해서 
    let string = String(x)
    let sum = 0
    for(let i=0; i<string.length; i++){
        sum += parseInt(string[i])
    }
    //그 값으로 나누었을때 
    if(x%sum===0)return true
    else return false
}

//자릿수를 더하는 여러가지 방법
//1번 방법은 다른 언어에서도 쓸 수 있으니까 참고하기
//1. 각자리수를 10으로 나눈 나머지를 변수에 차곡차곡 더함 -> while문이 반복될때마다 10자리씩 줄여줌
//let temp = x
//
// while(temp>0){
//         sumN=sumN+temp%10 
//         temp=Math.floor(temp/10) 
//     }

// 세트메뉴 -> 자릿수 뒤집기
// res = 0 
// while x>0:
//         t=x%10
//         res=res*10+t
//         x=x/10

//2. 문자열로 만들어 배열로 만든다음 맵돌려서 숫자로 만들고 리듀스이용해서 누산함
//let arr = x.toString().split("").map(x=>parseInt(x))
// return arr.reduce((acc, cur)=>acc+cur , 0 )

//https://themarketer.tistory.com/68
