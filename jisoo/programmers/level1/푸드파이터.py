"""
https://school.programmers.co.kr/learn/courses/30/lessons/134240
"""


def solution(food):
  tmp = ''
  for index, x in enumerate(food):
    tmp = tmp + str(index) * (x // 2)

  reverse_tmp = tmp[::-1]

  return tmp + "0" + reverse_tmp
