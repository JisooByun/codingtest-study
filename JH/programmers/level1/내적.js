//풀이 1
function solution(a, b) {
    let answer = ""
    for (let i=0; i<a.length; i++){
       answer += a[i] * b[i]
        answer = parseInt(answer)
    }
    return answer;
}

// 풀이2 리듀스를 한 번 활용해보자
function solution(a,b){
   let answer = a.reduce((acc, cur, i)=>{ 
       return acc += cur*b[i] },0)  
   return answer
}
