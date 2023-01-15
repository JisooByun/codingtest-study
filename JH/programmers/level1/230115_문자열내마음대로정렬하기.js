// //sort의 동작원리를 활용 https://noirstar.tistory.com/359
// function solution(strings, n) {
//     let answer = strings.sort((a, b)=>{
//         if(a[n]>b[n]) return 1 //양수를 줘서 자리를 바꿈
//          if(a[n]<b[n]) return -1 //음수를 줘서 자리를 바꾸지않음
//          if(a[n] === b[n]){
//             if(a>b) return 1;
//             if(a<b) return -1;
//         }
//     })
//     return answer
// }


//다른 사람 풀이 
//오름차순을 먼저해서 a[n]과 b[n]이 같은 때를 먼저 처리함..
function solution(strings, n){
    return strings.sort().sort((a,b) => a[n] >= b[n] ? 1 : -1);
}
