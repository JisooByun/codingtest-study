function solution(answers) {
  let result = [];
  let a = [1, 2, 3, 4, 5]; //length 5
  let b = [2, 1, 2, 3, 2, 4, 2, 5]; //length 8
  let c = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; //length 10
  let acnt = 0;
  let bcnt = 0;
  let ccnt = 0;
  for (let i = 0; i < answers.length; i++) {
    if (a[i % a.length] === answers[i]) {
      acnt += 1;
    }
    if (b[i % b.length] === answers[i]) {
      bcnt += 1;
    }
    if (c[i % c.length] === answers[i]) {
      ccnt += 1;
    }
  }
  let maxx = Math.max(acnt, bcnt, ccnt);
  if (maxx === acnt) {
    result.push(1);
  }
  if (maxx === bcnt) {
    result.push(2);
  }
  if (maxx === ccnt) {
    result.push(3);
  }
  return result;
}
