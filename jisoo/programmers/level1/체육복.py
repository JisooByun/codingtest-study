"""
https://school.programmers.co.kr/learn/courses/30/lessons/42862
"""


def solution(n, lost, reserve):
  answer = 0
  new_reserve = [x for x in reserve if x not in lost]
  new_lost = [x for x in lost if x not in reserve]
  new_lost.sort()
  new_reserve.sort()



  for i in new_lost:
    if i-1 in new_reserve:
      new_reserve.remove(i-1)
    elif i+1 in new_reserve:
      new_reserve.remove(i+1)
    else:
      answer +=1
  return n - len(new_lost)
