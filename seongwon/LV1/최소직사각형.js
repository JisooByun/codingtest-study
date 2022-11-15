function solution(sizes) {
  let long = [];
  let short = [];
  for (let i = 0; i < sizes.length; i++) {
    long.push(Math.max(sizes[i][0], sizes[i][1]));
    short.push(Math.min(sizes[i][0], sizes[i][1]));
  }
  return Math.max(...long) * Math.max(...short);
}

sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];

console.log(solution(sizes));
