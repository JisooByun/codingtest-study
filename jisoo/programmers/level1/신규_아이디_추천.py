"""
https://school.programmers.co.kr/learn/courses/30/lessons/72410
"""


def reduceComma(s):
    c = s[0]
    for i in range(1, len(s)):
        if not (s[i] == '.' and s[i - 1] == '.'):
            c += s[i]
    return c


def solution(new_id):
    s = new_id.lower()
    s = re.sub("[^a-z0-9.\-_]", "", s)
    s = reduceComma(s)
    s = s.strip('.')
    if s == '':
        s = 'a'
    s = s[:15]
    s = s.rstrip('.')
    while len(s) < 3:
        s += s[-1]

    return s


import re


def solution2(new_id):
    st = new_id
    st = st.lower()
    st = re.sub('[^a-z0-9\-_.]', '', st)
    st = re.sub('\.+', '.', st) # 콤마 줄임
    st = re.sub('^.|.$', '', st) #좌우 콤마 제거
    st = 'a' if len(st) == 0 else st[:15] #st가 비어있으면 a 추가 아니면 15길이 자르기
    st = re.sub('^.|.$', '', st) # 좌우 콤마 제거
    st = st if len(st) > 2 else st + "".join([st[-1] for i in range(3 - len(st))]) # 3길이를 채우기 위한 길이를 구한뒤 맨 뒤에 문자로 해당 길이만큼 문자를 만들고 더함
    return st
