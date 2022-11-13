function solution(lottos, win_nums) {
  //최대당첨개수, 최소당첨개수
  highcnt = 0;
  lowcnt = 0;
  for (let a of lottos) {
    if (win_nums.includes(a)) {
      highcnt++;
      lowcnt++;
    } else if (a === 0) {
      highcnt++;
    }
  }

  return [highcnt > 1 ? 7 - highcnt : 6, lowcnt > 1 ? 7 - lowcnt : 6];
}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
