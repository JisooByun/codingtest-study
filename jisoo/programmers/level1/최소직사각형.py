"""
https://school.programmers.co.kr/learn/courses/30/lessons/86491
"""

def solution(sizes):
  answer = 0
  w_max = 0
  h_max = 0

  for size in sizes:
    if size[0] < size[1]:
      temp = size[1]
      size[1] = size[0]
      size[0] = temp
    if w_max < size[0]:
      w_max = size[0]
    if h_max < size[1]:
      h_max = size[1]

  return w_max * h_max


# 더 좋은 풀이1
def solution(sizes):
  w_max = 0
  h_max = 0

  for a, b in sizes:
    if a > b:
      a, b = b, a
    w_max = max(w_max, a)
    h_max = max(h_max, b)

  return w_max * h_max


#더 좋은 풀이2 size중 작은것 중 최대 큰것중 최대 고르면됨
def solution(sizes):
  return max(max(x) for x in sizes) * max(min(x) for x in sizes)
