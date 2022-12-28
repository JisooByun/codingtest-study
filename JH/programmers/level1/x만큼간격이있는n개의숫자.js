function solution(x, n) {
    //x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트
    var answer = [];
    for(let i=1; i<=n; i++){
        answer.push(x*i)
    }
    return answer;
}

//참고할 만한 코드 //https://vvs1.tistory.com/m/132
//fill() 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.
//arr.fill("d",1,3)=>인덱스 1부터 3-1까지 d로 채움

// function solution(x, n) {
//     return Array(n).fill(x).map((v, i) => (i + 1) * v)
// }

// function solution(x, n) {
//     return [...Array(n).keys()].map(v => (v + 1) * x);
// }

//풀려다 부적절하다고 생각해서 버린 아이디어
// function solution(x, n) {
//     var answer = [];
//     //while(answer.length>n일때까지){
//     answer.reduce((acc, cur)=>acc+cur,x)
//     //   }
//     return answer;
// }
