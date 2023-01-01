function solution(s) {
  s = s.toLowerCase();
  let cnt = 0;
  for (let a of s) {
    if (a === "p") {
      cnt += 1;
    } else if (a === "y") {
      cnt -= 1;
    }
  }
  return cnt === 0 ? true : false;
}
console.log(solution("pPoooyY"));
