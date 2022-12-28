

function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      result.push(numbers[i] + numbers[j]);
    }
  }
  return Array.from(new Set(result)).sort((a, b) => a - b);
}
console.log(solution([5, 0, 2, 7]));


