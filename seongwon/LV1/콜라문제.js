function solution(a, b, n) {
  let answer = 0;
  let remain;
  while (n >= a) {
    answer += Math.floor(n / a) * b;
    remain = n % a;
    n = Math.floor(n / a) * b + remain;
  }
  return answer;
}
console.log(solution(3, 1, 20));
