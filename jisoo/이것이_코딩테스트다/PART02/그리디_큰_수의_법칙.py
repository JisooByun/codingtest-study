import unittest

"""
for 문으로 풀수 있지만 시간초과 발생할 여지가 있다.
특징을 파악해보면 반복되는 수열을 존재하는것을 발견할 수 있다. 6+6+6+5가 반복된다. 따라서 k+1만큼 짤라서 생각해보면 m//k+1 * (k*최대값+두번째최대값) + m%k+1 * 최댓값 하면 구해진다.
"""


def solution(m, k, arr):
  arr.sort(reverse=True)
  print(arr)
  big1 = arr[0]
  big2 = arr[1]

  return m // (k + 1) * (k * big1 + big2) + m % (k + 1) * big1


class Test(unittest.TestCase):
  def testAdd(self):
    result = solution(9, 3, [2, 4, 5, 4, 6])
    self.assertEqual(result, 52)
