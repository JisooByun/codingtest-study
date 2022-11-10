<h2>배열 두 배 만들기</h2>

내가 쓴 코드
```
function solution(numbers) {
    var answer = [];
     for(let i = 0; i<numbers.length; i++){
         answer.push(numbers[i]*2) 
     }
     return answer;
   
}
```
다른 사람 코드 -> map을 쓸 수 있었던 거잖아....!
```
function solution(numbers) {
 return numbers.map(numbers=>numbers*2)
 }
```
https://school.programmers.co.kr/learn/courses/30/lessons/120809
