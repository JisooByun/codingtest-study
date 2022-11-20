"""
https://school.programmers.co.kr/learn/courses/30/lessons/82612
"""


def solution(price, money, count):
  answer = -1

  sum = 0
  for i in range(count):
    sum += (i + 1) * price

  print(sum)
  return max(0, sum - money)


#다른 풀이
def solution2(price, money, count):
  return max(0,price*(count+1)*count//2-money)
