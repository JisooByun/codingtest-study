function solution(n) {
  let arr = String(n).split("").reverse()
  let answer = []
  for(el of arr){
      answer.push(parseInt(el))
  }
    return answer
}

//다른 사람 풀이
// function solution(n) {
//     // 문자풀이
//     // return (n+"").split("").reverse().map(v => parseInt(v));
//     // 숫자에 문자 더해서 문자열 화 할 수 있구나 생각못했다.., 맵돌려서 정수화
//     // 숫자풀이
//     var arr = [];

//     do {
//         arr.push(n%10); //끝자리를 10으로 나눈 나머지로 추출
//         n = Math.floor(n/10); //10으로 나누고 내림해서 끝자리 제거
//     } while (n>0);

//     return arr;
// }
