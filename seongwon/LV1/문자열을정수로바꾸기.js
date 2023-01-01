function solution(s) {
  if (s[0] === "-") {
    return -parseInt(s.slice(1));
  } else {
    return parseInt(s.slice(0));
  }
}
console.log(solution("1234"));
