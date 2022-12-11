"""
https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=python3
"""


def solution(p, c):
  p.sort()
  c.sort()

  for i in range(len(c)):
    if p[i] != c[i]:
      return p[i]
  return p[-1]
