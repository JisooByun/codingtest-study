"""
https://school.programmers.co.kr/learn/courses/30/lessons/67256
"""


def getDistance(a, b): #a 다음 누를 위치, b 손가락 위치 a = (1,1) b = (2,0)
  return abs(a[0] - b[0]) + abs(a[1] - b[1])



def solution(numbers, hand):
  answer = ''

  keypad = {
    1: (0, 0), 2: (1, 0), 3: (2, 0),
    4: (0, 1), 5: (1, 1), 6: (2, 1),
    7: (0, 2), 8: (1, 2), 9: (2, 2),
    '*': (0, 3), 0: (1, 3), '#': (2, 3),
  }

  rp = '#'
  lp = '*'

  R = [3, 6, 9]
  L = [1, 4, 7]
  C = [2, 5, 8, 0]

  for i in numbers:
    if i in R:
      answer += 'R'
      rp = i
    if i in L:
      answer += 'L'
      lp = i
    if i in C:
      rd = getDistance(keypad[i], keypad[rp]) # i: 5 rp: 3
      ld = getDistance(keypad[i], keypad[lp])

      if rd > ld:  # 양수면 R이 더큰것 L로 누름
        answer += "L"
        lp = i
      elif rd < ld:
        answer += "R"
        rp = i
      else:
        if hand == 'right':
          answer += "R"
          rp = i
        else:
          answer += "L"
          lp = i

  return answer
