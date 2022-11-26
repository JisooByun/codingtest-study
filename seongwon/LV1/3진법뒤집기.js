function solution(n) {
  let 삼진법뒤집은수_문자열 = "";
  while (n > 0) {
    삼진법뒤집은수_문자열 = 삼진법뒤집은수_문자열 + (n % 3);
    n = Math.floor(n / 3);
  }
  return parseInt(삼진법뒤집은수_문자열, 3);
}
console.log(solution(45));
//console.log(45 / 3);

//한줄풀이
// function solution(n) {
//   return parseInt(n.toString(3).split("").reverse().join(""), 3);
// }
// console.log(solution(45));
// console.log((45).toString(3));
// console.log((45).toString(3).split(""));
// console.log((45).toString(3).split("").reverse());
// console.log((45).toString(3).split("").reverse().join(""));
// console.log(parseInt((45).toString(3).split("").reverse().join(""), 3));
