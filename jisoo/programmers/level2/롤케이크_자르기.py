"""
https://school.programmers.co.kr/learn/courses/30/lessons/132265
"""

from collections import Counter

def solution(topping):
  answer = 0
  _chul = set()
  counter = Counter(topping) # Counter로 배열을 dict 형태로 카운팅이 가능함[1,3,3] -> {1:1, 3:2}

  #topping을 한쪽에서 나머지 한쪽으로 옮겨가면서 계산
  while len(topping)>0:
    temp = topping.pop()
    _chul.add(temp)
    counter[temp] -= 1
    if counter[temp] == 0: # counter가 0 이되면 counter에서 해당 키 제거,
      del counter[temp]  # counter.pop(temp)도 가능함
    if len(_chul) == len(counter): # len은 키의 갯수를 셈
      answer+=1
  return answer
