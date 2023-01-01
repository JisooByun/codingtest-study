function solution(a, b) {
  let day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let totalday = 0;
  for (let i = 0; i < a - 1; i++) {
    totalday += month[i];
  }
  totalday += b;

  // totalday%7이 0이되는 경우가 있다. 이럴경우 -1하면 -1 이기때문에
  // totalday%7-1 = 6으로 바꿔준다.
  let index = (totalday % 7) - 1;

  if (index === -1) index = 6;

  return day[index];
}
console.log(solution(1, 24));
