"""
https://school.programmers.co.kr/learn/courses/30/lessons/42748
"""


def solution(array, commands):
  answer = []
  for command in commands:
    start, end, index = command
    temp = array[start - 1:end]
    temp.sort()
    answer.append(temp[index - 1])

  return answer
