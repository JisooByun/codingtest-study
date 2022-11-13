//넘어가

function solution(n) {
  result = 2147000000;
  for (let i = 2; i < n; i++) {
    if (n % i == 1 && result > i) {
      result = i;
    }
  }
  return result;
}

console.log(solution(10));
