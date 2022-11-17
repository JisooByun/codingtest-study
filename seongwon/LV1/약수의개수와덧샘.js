function solution(left, right) {
  let result = 0;
  for (let i = left; i < right + 1; i++) {
    let cnt = 0;

    for (j = 1; j <= i; j++) {
      if (i % j === 0) {
        cnt++;
      }
    }
    if (cnt % 2 === 0) {
      result += i;
    } else if (cnt % 2 === 1) {
      result -= i;
    }
  }
  return result;
}
console.log(solution(13, 17));
