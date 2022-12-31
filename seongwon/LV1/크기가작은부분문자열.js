function solution(t, p) {
  let nums = [];
  for (let i = 0; i < t.length - p.length + 1; i++) {
    nums.push(t.slice(i, i + p.length));
  }

  return nums.filter((el) => +el <= +p).length;
}
console.log(solution("3141592", "271"));
//73
