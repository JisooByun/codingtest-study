function solution(k, m, score) {
  score.sort((a, b) => a - b);
  let answer = 0;
  while (score.length >= m) {
    let temp = [];

    for (let i = 0; i < m; i++) {
      temp.push(score.pop());
    }
    let minn = Math.min(...temp);
    answer += minn * m;
  }
  return answer;
}

console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
