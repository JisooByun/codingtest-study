function solution(n) {
  let cnt = 0;
  let arr = [];
  //배열초기화
  for (let i = 2; i <= n; i++) {
    arr[i] = i;
  }

  for (let i = 2; i <= n; i++) {
    if (arr[i] == 0) continue; //지워진 수라면 건너뛰기

    for (let j = 2 * i; j <= n; j += i) {
      arr[j] = 0;
    }
  }
  arr.forEach((el) => {
    if (el !== 0) cnt += 1;
  });
  return cnt;
}

console.log(solution(10));
