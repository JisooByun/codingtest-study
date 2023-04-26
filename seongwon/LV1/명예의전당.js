function solution(k, score) {
  let rankers = [];
  let answer = [];
  for (let a of score) {
    console.log(rankers.length);
    if (rankers.length < k) {
      rankers.push(a);
    } else {
      //오름차순정렬함
      rankers.sort((a, b) => a - b);
      if (a > rankers[0]) {
        rankers.shift();
        rankers.push(a);
      }
    }
    answer.push(Math.min(...rankers));
  }
  return answer;
}
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
