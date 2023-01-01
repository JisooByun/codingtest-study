function solution(ingredient) {
  let stack = [];
  let answer = 0;
  //빵 1 야채 2 고기 3
  for (let a of ingredient) {
    if (a === 1) {
      if (stack && stack[stack.length - 1] === 3) {
        stack.pop();
        stack.pop();
        stack.pop();
        answer += 1;
      } else {
        stack.push(a);
      }
    } else if (a === 2) {
      if (stack && stack[stack.length - 1] === 1) {
        stack.push(a);
      } else {
        stack = [];
      }
    } else if (a === 3) {
      if (stack && stack[stack.length - 1] === 2) {
        stack.push(a);
      } else {
        stack = [];
      }
    }
  }
  return answer;
}

console.log(solution([1, 1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1]));
