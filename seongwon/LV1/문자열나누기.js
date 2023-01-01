//다른사람들 풀이 이해하기

function solution(s) {
  let result = 0;
  while (s) {
    let start = s[0];
    let cnt = 1;
    let tmp = 0;
    for (let i = 1; i < s.length; i++) {
      if (start === s[i]) {
        cnt += 1;
      } else {
        cnt -= 1;
      }
      if (cnt === 0) {
        tmp = i + 1;
        break;
      }
    }
    result += 1;
    s = s.slice(tmp);
    if (tmp === 0) break;
  }
  return result;
}
console.log(solution("banana"));
// function solution(s) {
//   let arr = [];
//   if (s.length === 1) {
//     return 1;
//   }
//   while (s) {
//     arr.push(s.slice(0, sliceing(s) + 1));
//     s = s.slice(sliceing(s) + 1);
//     if (s.length === 1) {
//       arr.push(s);
//       break;
//     }
//   }

//   function sliceing(s) {
//     let x = s[0];
//     let xCnt = 1;
//     let difcnt = 0;
//     for (let i = 1; i < s.length; i++) {
//       if (x === s[i]) {
//         xCnt += 1;
//       } else {
//         difcnt += 1;
//       }

//       if (xCnt === difcnt) {
//         return i;
//       }
//     }
//   }
//   return arr.length;
// }
