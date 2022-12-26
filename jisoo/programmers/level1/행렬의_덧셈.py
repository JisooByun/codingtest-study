"""
https://school.programmers.co.kr/learn/courses/30/lessons/12950
"""


def solution(arr1, arr2):
  answer = []

  for a1, a2 in zip(arr1, arr2):
    l = []
    for a, b in zip(a1, a2):
      l.append(a + b)
    answer.append(l)
  return answer
