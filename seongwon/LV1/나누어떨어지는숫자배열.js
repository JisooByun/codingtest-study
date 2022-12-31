function solution(arr, divisor) {
  let array = [];
  for (let a of arr) {
    if (a % divisor === 0) array.push(a);
  }
  return array.length === 0 ? [-1] : array.sort((a, b) => a - b);
}
console.log(solution([5, 9, 7, 10], 5));
