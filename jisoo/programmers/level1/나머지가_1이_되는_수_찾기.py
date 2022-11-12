"""
https://school.programmers.co.kr/learn/courses/30/lessons/87389
"""


def solution(n):
  answer = 0
  for i in range(2, n):
    if n % i == 1:
      return i
  return answer


#한줄 코딩
def solution(n):
  return [x for x in range(1,n+1) if n%x==1][0]

