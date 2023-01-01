function solution(s) {
  if (s.length !== 4 && s.length !== 6) return false;
  for (let a of s) {
    //이러면 알파벳이지
    if (isNaN(+a)) {
      return false;
    }
  }
  return true;
}

console.log(solution("a123"));
