function solution(array, commands) {
  let result = [];
  for (let i = 0; i < commands.length; i++) {
    let start = commands[i][0] - 1;
    let end = commands[i][1] - 1;
    let num = commands[i][2];

    let temp = array.slice(start, end + 1);
    temp = temp.sort((a, b) => a - b);
    result.push(temp[num - 1]);
  }
  return result;
}
