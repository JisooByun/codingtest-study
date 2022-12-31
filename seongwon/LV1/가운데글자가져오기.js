function solution(s) {
  let mid = Math.floor(s.length / 2);

  //문자열 길이가 홀수면 가운데 문자만 리턴 아니면 두개 리턴
  return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[mid];
}
console.log(solution("abcde"));
