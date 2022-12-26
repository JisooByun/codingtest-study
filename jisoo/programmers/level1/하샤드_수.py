"""
https://school.programmers.co.kr/learn/courses/30/lessons/12947
"""


def solution(x):
  answer = True
  sum = 0
  for e in str(x):
    sum += int(e)

  if x % sum == 0:
    return True
  return False
