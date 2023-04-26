function solution(arr) {
  let stack = [];
  for (let a of arr) {
    if (stack) {
      if (stack[stack.length - 1] == a) continue;
    }
    stack.push(a);
  }
  return stack;
}
console.log(solution([1, 1, 3, 3, 0, 1, 1]));
