function solution(board, moves) {
  let newArr = moves.map((e) => e - 1);
  let stack = [];
  let cnt = 0;
  for (let i = 0; i < newArr.length; i++) {
    let point = newArr[i];
    for (let j = 0; j < board.length; j++) {
      if (board[j][point] !== 0) {
        stack.push(board[j][point]);
        board[j][point] = 0;
        break;
      }
    }
    cnt += stackclear();
  }
  //console.log(stack)
  function stackclear() {
    if (stack.length >= 2) {
      if (stack[stack.length - 1] === stack[stack.length - 2]) {
        stack.pop();
        stack.pop();
        return 2;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  }

  return cnt;
}
