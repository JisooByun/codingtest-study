function solution(a, b) {
  [a, b] = a > b ? [b, a] : [a, b];

  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}
console.log(solution(5, 3));
