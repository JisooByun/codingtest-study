"""
https://school.programmers.co.kr/learn/courses/30/lessons/131128
"""

from collections import defaultdict


def solution(X, Y):
  answer = ''

  x_dic = defaultdict(int)
  y_dic = defaultdict(int)

  for x in X:
    x_dic[x] += 1

  for y in Y:
    y_dic[y] += 1

  for i in x_dic:
    if x_dic[i] > y_dic[i]:
      answer += str(i) * y_dic[i]
    else:
      answer += str(i) * x_dic[i]
  if len(answer) == 0:
    return "-1"
  if answer.replace("0", '') == '':
    return "0"

  l = list(answer)
  l.sort(reverse=True)
  answer = "".join(l)

  return answer
