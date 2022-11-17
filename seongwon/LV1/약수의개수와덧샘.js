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

///
// 다른 분의 풀이
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      // 제곱근이 정수면 약수의 개수는 홀수
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
