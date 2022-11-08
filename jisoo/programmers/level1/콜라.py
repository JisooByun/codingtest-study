"""
https://school.programmers.co.kr/learn/courses/30/lessons/132267#
#주의 b가 항상 1이라고 착각하면 안된다. 3 2 20 이면 36
"""


def solution(a, b, n):
  answer = 0
  while a <= n:
    ## 18개 마시고 새거 6병으로 바꿈 기존 2병 남음, b가 3,2,20이면 3개주면 2개 받기때문에 곱하기 b해줘야함
    new = (n // a) * b
    answer += new
    n = new + n % a
    print('---')
    print(n)
    print(new)
    print(answer)
  return answer
