function solution(X, Y) {
  //문자열 길이 구분
  if (X.length < Y.length) {
    [X, Y] = [Y, X];
  }

  let xarr = X.split("");
  let yarr = Y.split("");
  //오름차순함
  xarr.sort();
  yarr.sort();

  let result = [];
  let tmp = 0;
  for (let i = 0; i < xarr.length; i++) {
    for (let j = tmp; j < yarr.length; j++) {
      if (xarr[i] === yarr[j]) {
        tmp = j + 1;
        result.push(xarr[i]);
        break;
      }
    }
  }
  result.sort((a, b) => b - a);
  return result.length === 0 ? "-1" : String(Number(result.join("")));
}

console.log(solution("5525", "1255"));
