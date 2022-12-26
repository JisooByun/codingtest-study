"""
https://school.programmers.co.kr/learn/courses/30/lessons/12982
"""


def solution(d, budget):
  answer = 0

  s = sorted(d)

  for e in s:
    if budget < e:
      break
    budget -= e
    answer += 1

  return answer
