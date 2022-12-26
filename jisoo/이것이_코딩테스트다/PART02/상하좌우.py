import unittest

"""
"""


def solution(n, k):
  answer = 0
  con = {
    'R': [0, 1],
    'L': [0, -1],
    'U': [-1, 0],
    'D': [1, 0]
  }

  l = [[0] * n for i in range(n)]
  print(l)
  x = 0
  y = 0

  for d in k:
    dx, dy = con[d]
    nx = x + dx
    ny = y + dy
    print(nx, ny)
    if nx >= 0 and nx < n and ny >= 0 and ny < n:
      x = nx
      y = ny

  return [x + 1, y + 1]


class Test(unittest.TestCase):
  def testAdd(self):
    result = solution(5, ['R', 'R', 'R', 'U', 'D', 'D'])
    self.assertEqual([3, 4], result)
