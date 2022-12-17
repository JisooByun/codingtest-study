"""
https://school.programmers.co.kr/learn/courses/30/lessons/17682
"""

def solution(dartResult):

  bonus = ["S","D","T"]
  option = ['*','#']

  l = []
  tmp =''
  for x in dartResult:
    tmp+=x
    if x.isalpha() or x in option:
      l.append(tmp)
      tmp=''

  c = []

  for e in l:
    if e == '*':
      if len(c) == 1:
        c[-1] = c[-1]*2
      if len(c) > 1:
        c[-1] = c[-1]*2
        c[-2] = c[-2]*2
    if e == '#':
      c[-1] = -c[-1]
    if len(e) >1:
      score = e[:-1]
      b = e[-1]
      c.append(int(score) ** (bonus.index(b)+1))


  return sum(c)


#
# import re
#
#
# def solution(dartResult):
#   bonus = {'S' : 1, 'D' : 2, 'T' : 3}
#   option = {'' : 1, '*' : 2, '#' : -1}
#   p = re.compile('(\d+)([SDT])([*#]?)')
#   dart = p.findall(dartResult)
#   for i in range(len(dart)):
#     if dart[i][2] == '*' and i > 0:
#       dart[i-1] *= 2
#     dart[i] = int(dart[i][0]) ** bonus[dart[i][1]] * option[dart[i][2]]
#
#   answer = sum(dart)
#   return answer