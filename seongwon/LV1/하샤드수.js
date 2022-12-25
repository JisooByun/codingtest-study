function solution(x) {
  let sumN = 0;
  let temp = x;
  while (temp > 0) {
    sumN = sumN + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  if (x % sumN) return false;
  return true;
}
