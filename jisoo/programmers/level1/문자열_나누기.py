"""
https://school.programmers.co.kr/learn/courses/30/lessons/140108
"""


def solution(s):
  answer = 0

  st = ''
  st_count = 0;
  st_ncount = 0;
  for i in range(len(s)):
    if st_count == 0:
      st = s[i]
      st_count += 1
    else:
      if st != s[i]:
        st_ncount += 1;
      else:
        st_count += 1;
      if st_count == st_ncount:
        answer += 1
        st_count = 0
        st_ncount = 0

  if st_count != 0:
    answer += 1

  return answer
