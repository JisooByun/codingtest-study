"""
https://school.programmers.co.kr/learn/courses/30/lessons/133502
"""


def solution(ingredient):
  answer = 0

  stack = ingredient[0:3]
  for i in range(3, len(ingredient)):

    if (ingredient[i] == 1 and stack[-3:] == [1, 2, 3]):
      del stack[-3:]
      answer += 1
    else:
      stack.append(ingredient[i])

  return answer
