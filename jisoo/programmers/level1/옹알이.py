"""
https://school.programmers.co.kr/learn/courses/30/lessons/133499
"""


def solution(babbling):
  answer = 0
  for x in babbling:
    can = ["aya", "ye", "woo", "ma"]
    before = ''
    temp = ''
    for c in x:
      temp += c
      if temp in can and before != temp:
        before = temp

        temp = ''
    if len(temp) == 0:
      answer += 1

  return answer


# 좋은 풀이

def solution(babbling):
  answer = 0
  for i in babbling:
    for j in ['aya', 'ye', 'woo', 'ma']:
      if j * 2 not in i: # 중복되는 되는건 제외함,
        i = i.replace(j, ' ')  # 옹알이를 제거한뒤에
    if len(i.strip()) == 0:    # 길이가 0이면 말할수 있는것
      answer += 1
  return answer
