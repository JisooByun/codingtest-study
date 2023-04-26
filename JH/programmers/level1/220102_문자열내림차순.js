function solution(s) {
    return s.split('').sort().reverse().join('')
}
//sort는 배열에 할 수 있는거 잊지말자구
//sort()를 할 경우, 자동으로 대문자가 먼저 A부터 Z로 정렬되고, 소문자가 a->z 로 정렬된다




// 참고할 다른 사람 코드
// function solution(s) {
//     return s.split("").sort((a,b) => a<b ? 1:-1).join("")
// }
// sort 함수의 동작원리를 알아야 위의 코드를 이해할 수 있다
// https://noirstar.tistory.com/359 
// a-b해서 양수면 자리바꿔서 앞으로 작은걸 보내고(오름차순이 됨) 아니면 그대로 두는건데
// 그러면 sort((a,b) => b-a)를 해서 내림차순을 하면되는데 왜 저렇게 삼항 연산자로 양음을 구별했나? 
// 문자이니까 a-b를 해도 NaN이 나오지 숫자가 출력되지 않음
// 문자여도 a>b를 하면 false가 나와서 사용할 수 있게됨 그래서 저렇게 삼항연산자로 양음을 입력하게 한 것임


// 그런데 실제로 obj.sort().reverse()가 효율성 측면에서 같은 기능을 구현하는 하위 두가지 메소드 보다 좋다.

// obj.sort((a, b) => (a > b ? -1 : 1)
// obj.sort((a, b) => b.localeCompare(a) )


// https://velog.io/@ne_ol/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EB%AC%B8%EC%9E%90%EC%97%B4-%EB%82%B4%EB%A6%BC%EC%B0%A8%EC%88%9C%EC%9C%BC%EB%A1%9C-%EB%B0%B0%EC%B9%98%ED%95%98%EA%B8%B0JavaScript
// https://stackoverflow.com/questions/52030110/sorting-strings-in-descending-order-in-javascript-most-efficiently


//그리고 sort()하면 기본적으로 안에 함수를 넣지않으면 오름차순 정렬이긴하다 그런데 조심할게 있다, 숫자일때 조심해서 써야한다 문자열처럼 정리되기때문
//자바스크립트의 정렬 디폴트값은 문자 정렬이다!!!!!!!!!!!!

//그래서 결론은 문자열 정렬할때 sort()를 쓰고 숫자는 조심해서 쓰도록하자 
//문자열 정렬할때는 기본적으로 사용하던 a-b를 쓰지말자~

