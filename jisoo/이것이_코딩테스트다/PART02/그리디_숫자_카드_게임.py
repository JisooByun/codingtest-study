import unittest

"""
각 행중 최소값을 찾고 그중 최대값을 찾으면된다. python에서 두수 비교시 max(), min() 활용
"""


def solution(map):
  imin = 0;
  for row in map:
    print(min(row))
    imin = max(min(row), imin)

  return imin


class Test(unittest.TestCase):
  def testAdd(self):
    result = solution([[3, 1, 2],
                       [4, 1, 5],
                       [2, 2, 2]])
    self.assertEqual(result, 2)
