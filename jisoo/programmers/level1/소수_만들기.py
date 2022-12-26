"""
https://school.programmers.co.kr/learn/courses/30/lessons/12977
"""

def solution(nums):
  from itertools import combinations as cb
  answer = 0
  for a in cb(nums, 3):
    cand = sum(a)
    for j in range(2, cand):
      if cand%j==0:
        break
    else:
      answer += 1
  return answer


# def isPrime(number):
#   for i in range(2, number // 2 + 1):
#     if number % i == 0:
#       return False
#   return True
#
#
# def solution(nums):
#   answer = 0
#
#   for i in range(len(nums)):
#     for j in range(i + 1, len(nums)):
#       for k in range(j + 1, len(nums)):
#         if isPrime(nums[i] + nums[j] + nums[k]):
#           answer += 1
#
#   return answer
