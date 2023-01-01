function solution(nums) {
  let len = nums.length;
  let howmanyget = len / 2;
  let notRepeatNums = new Set(nums);
  return notRepeatNums.size > howmanyget ? howmanyget : notRepeatNums.size;
}
console.log(solution([3, 1, 2, 3]));
