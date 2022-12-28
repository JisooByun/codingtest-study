//https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
    var answer = [];
//최대공약수 만들기
let gcd = (n,m) => m ? gcd(m, n%m) : n;
    gcd = gcd(n,m)

//최소공배수 만들기
const lcm = n * m / gcd;

answer.push(gcd, lcm)
return answer

}

// 다른 사람 풀이
// function solution(n, m) {
//     return [gcd(n,m), n * m / gcd(n,m)]
// }

// function gcd(a,b){ 
//   let c = 0; 
//   while(b !== 0){ 
//     c = a % b; 
//     a = b; 
//     b = c; 
//   } 
//   return a; 
// }
