import unittest

"""
"""


def solution(n,k):
  answer = 0

  while(n!=1):
    if n%k == 0:
      n = n//k
    else:
      n-=1
    answer+=1


  return answer


class Test(unittest.TestCase):
  def testAdd(self):
    result = solution(25,5)
    self.assertEqual(result, 2)
