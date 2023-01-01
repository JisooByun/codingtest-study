//다른사람들이 푼거보면서 시간 줄이는 방법을 연구해라
function solution(number, limit, power) {
  let arr = [];
  let answer = [];
  for (let i = 1; i <= number; i++) {
    //약수의 개수
    let cnt = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j == 0) {
        cnt += 1;
      }
    }
    arr.push(cnt + 1);
  }
  for (let a of arr) {
    if (a <= limit) {
      answer.push(a);
    } else {
      answer.push(power);
    }
  }
  return answer.reduce((acc, cur) => acc + cur, 0);
}
// 느림
// function solution(number, limit, power) {
//   let arr = [];
//   for (let i = 1; i <= number; i++) {
//     //약수의 개수
//     let cnt = 0;
//     for (let j = 1; j <= i; j++) {
//       if (i % j == 0) {
//         cnt += 1;
//       }
//     }
//     arr.push(cnt);
//   }
//   return arr
//     .map((el) => {
//       if (el <= limit) {
//         return el;
//       } else {
//         return power;
//       }
//     })
//     .reduce((acc, cur) => acc + cur);
// }
console.log(solution(10, 3, 2));
