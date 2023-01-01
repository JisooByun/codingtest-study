function solution(food) {
  let str = "";
  for (let i = 1; i < food.length; i++) {
    str += String(i).repeat(food[i] / 2);
  }
  return str + "0" + str.split("").reverse().join("");
}
console.log(solution([1, 3, 4, 6]));
