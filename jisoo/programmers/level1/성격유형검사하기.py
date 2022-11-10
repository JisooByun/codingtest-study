"""
https://school.programmers.co.kr/learn/courses/30/lessons/118666
"""
def solution(survey, choices):
  answer = ''
  d= {
    "R":0,
    "T":0,
    "C":0,
    "F":0,
    "J":0,
    "M":0,
    "A":0,
    "N":0
  }

  for s,c in zip(survey,choices):
    if c > 4:
      d[s[1]]+= c-4
    elif c < 4:
      d[s[0]] += 4-c

  print(d)
  answer += "R" if d['R'] >=d['T'] else "T"
  answer += "C" if d['C'] >=d['F'] else "F"
  answer += "J" if d['J'] >=d['M'] else "M"
  answer += "A" if d['A'] >=d['N'] else "N"
  return answer

# 더 좋은 풀이
# 결국엔 R또는 T임 최종적으로 양수인지, 음수인지에 따라 R인지 T인지 확인 가능
def solution(survey, choices):

  my_dict = {"RT":0,"CF":0,"JM":0,"AN":0}
  for A,B in zip(survey,choices):
    if A not in my_dict.keys():
      A = A[::-1]
      my_dict[A] -= B-4
    else:
      my_dict[A] += B-4

  result = ""
  for name in my_dict.keys():
    if my_dict[name] > 0:
      result += name[1]
    elif my_dict[name] < 0:
      result += name[0]
    else:
      result += sorted(name)[0]

  return result
