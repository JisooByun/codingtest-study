"""
https://school.programmers.co.kr/learn/courses/30/lessons/42840
"""


def solution(answers):
  answe = []
  count = {
    1: 0,
    2: 0,
    3: 0
  }
  s1 = [1, 2, 3, 4, 5]
  s2 = [2, 1, 2, 3, 2, 4, 2, 5]
  s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  for index, answer in enumerate(answers):
    i = index % len(s1)
    if s1[i] == answer:
      count[1] += 1
    i = index % len(s2)
    if s2[i] == answer:
      count[2] += 1
    i = index % len(s3)
    if s3[i] == answer:
      count[3] += 1
  v = list(count.values())
  for key in [1, 2, 3]:
    if count[key] == max(v):
      answe.append(key)
  return answe
