"""
https://school.programmers.co.kr/learn/courses/30/lessons/142086
"""


def solution(s):
  answer = []
  d = dict()

  for i, x in enumerate(s):
    item = d.get(x)
    if item != None:
      answer.append(i - d[x])
    else:
      answer.append(-1)
    d[x] = i

  return answer
