"""
https://school.programmers.co.kr/learn/courses/30/lessons/138477
"""

def solution(k, score):
  answer = []
  l = []
  for s in score:
    l.append(s)
    l.sort(reverse=True)
    l = l[:k]
    answer.append(l[-1])
  return answer