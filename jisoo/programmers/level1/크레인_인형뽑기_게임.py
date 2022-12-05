"""
https://school.programmers.co.kr/learn/courses/30/lessons/64061
"""


def solution(board, moves):
  answer = 0
  stack = []
  for i in moves:
    col = i - 1  # 집을 column 번호

    pick = -1
    for j in range(len(board)):
      if board[j][col] != 0:
        pick = board[j][col]
        board[j][col] = 0
        break
    # 못찾았을 경우
    if pick == -1:
      continue
    #
    if len(stack) != 0 and stack[-1] == pick:
      stack.pop()
      answer += 2
    else:
      stack.append(pick)

  return answer


"""
더 나은 풀이
우선 stack에 넣은뒤에 맨 위쪽 2개를 보고 지울지 판별
"""
def solution2(board, moves):
  answer = 0
  stack = []
  for i in moves:
    col = i - 1  # 집을 column 번호
    # 못 찾을 경우 if문에 걸리지 않으므로 다음 moves로 넘어감
    for j in range(len(board)):
      if board[j][col] != 0:
        stack.append(board[j][col])
        board[j][col] = 0
        if len(stack) > 1:
          if stack[-1] == stack[-2]:
            stack.pop()
            stack.pop()
            answer += 2
        break
  return answer
