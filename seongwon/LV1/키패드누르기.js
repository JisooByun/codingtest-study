function solution(numbers, hand) {
  const obj = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let left = "*";
  let right = "#";
  let result = "";
  for (let num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      result += "L";
      left = String(num);
    } else if (num === 3 || num === 6 || num === 9) {
      result += "R";
      right = String(num);
    } else {
      let [L, R] = getDistance(obj[left], obj[right], obj[num]);
      if (L < R) {
        result += "L";
        left = String(num);
      } else if (R < L) {
        result += "R";
        right = String(num);
      } else {
        if (hand === "right") {
          result += "R";
          right = String(num);
        } else {
          result += "L";
          left = String(num);
        }
      }
    }
  }
  return result;
}
function getDistance(L, R, curP) {
  let fromL = Math.abs(curP[0] - L[0]) + Math.abs(curP[1] - L[1]);
  let fromR = Math.abs(curP[0] - R[0]) + Math.abs(curP[1] - R[1]);
  return [fromL, fromR];
}
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
