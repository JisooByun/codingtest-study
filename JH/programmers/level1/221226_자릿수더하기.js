//https://school.programmers.co.kr/learn/courses/30/lessons/12931#

//풀이 1
// function solution(n)
// {
//   return (n+"").split("").map((el)=>parseInt(el)).reduce((acc, cur)=>acc+cur)
// }

//풀이2
// function solution(n)
// {
//     let num = 0
//   while(n>0){
//      num = num + (n%10) 
//      n = Math.floor(n/10)
//   }
//     return num
// }

---
//아래 코드가 테스트코드에서 막히는 이유가 뭘까? 

function solution(n)
{
  return (n+"").split("").reduce((acc, cur)=>parseInt(acc)+parseInt(cur))
} 

//한자리수일때 안됨 -> 왜?
//배열의 요소가 하나 뿐이면서 initialValue가 없는 경우, 또는 initialValue는 주어졌으나 배열이 
//비어 있는 경우엔 계산할 필요가 없기 때문에 그 값을 callback 호출 없이 그대로 반환합니다.
//그래서 문자열형태의 숫자가반환이됨
// 그래서 초깃값을 0으로 설정해야함

//acc,cur => acc+parseInt(cur),0 이런식으로 초깃값을 줘도 되는데,
//근데 만약 초깃값이 없다면 acc도 정수화 해주는게 맞다 -> 안해주면 acc가 처음에 문자열형태의 숫자이고 거기다 숫자cur을 더하면 문자니까....
// 원인; 최초 callback함수 실행 시 accumulator 인수에 제공되는 값, 초기값을 제공하지 않을경우 배열의 첫 번째 요소를 사용하고, 빈 배열에서 초기값이 없을 경우 에러가 발생합니다.
//https://tocomo.tistory.com/26
