"""
https://school.programmers.co.kr/learn/courses/30/lessons/42889
"""

from collections import Counter


def solution(N, stages):
  f = []
  c = Counter(stages)
  total_cnt = len(stages)

  for i in range(N):
    if total_cnt == 0:
      f.append([i + 1, 0])
    else:
      f.append([i + 1, c[i + 1] / total_cnt])
    total_cnt -= c[i + 1]

  answer = sorted(f, key=lambda l: l[1], reverse=True)

  return [a[0] for a in answer]
