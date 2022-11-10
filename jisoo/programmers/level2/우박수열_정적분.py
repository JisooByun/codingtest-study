"""
https://school.programmers.co.kr/learn/courses/30/lessons/134239
"""

def solution(k, ranges):
  answer = []
  y = [k]
  while k != 1:
    if k%2 == 0: #짝수
      k //= 2
    else:
      k = k*3+1
    y.append(k)

  area = []

  for index in range(1,len(y)):
    curr = y[index]
    before = y[index-1]
    if curr >= before:
      area.append(before + (curr-before) *0.5)
    else:
      area.append(curr + (before-curr)*0.5)

  for range_ in ranges:
    print(range_[0], range_[1])
    start = range_[0]
    end = len(y)+range_[1] -1
    if end < start:
      answer.append(-1)
    else:
      answer.append(sum(area[start:end]))

  return answer
