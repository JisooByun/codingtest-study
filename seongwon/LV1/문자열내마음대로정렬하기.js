function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n].charCodeAt() > b[n].charCodeAt()) {
      return 1;
    } else if (a[n].charCodeAt() < b[n].charCodeAt()) {
      return -1;
    } else {
      if (a > b) return 1;
      if (a < b) return -1;
    }
  });
}
console.log(solution(["sun", "bed", "car"], 1));
