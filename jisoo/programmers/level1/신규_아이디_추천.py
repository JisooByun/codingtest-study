"""
https://school.programmers.co.kr/learn/courses/30/lessons/72410
"""


def convertUpperToLower(s):
    return s.lower()


def removeNotAllowChar(s):
    return re.sub("[^a-zA-Z0-9.\-_]", "", s)


def reduceComma(s):
    c = s[0]
    for i in range(1, len(s)):
        if not (s[i] == '.' and s[i - 1] == '.'):
            c += s[i]
    return c


def solution(new_id):
    s = convertUpperToLower(new_id)
    s = removeNotAllowChar(s)
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
    st = re.sub('\.+', '.', st)
    st = re.sub('^[.]|[.]$', '', st)
    st = 'a' if len(st) == 0 else st[:15]
    st = re.sub('^[.]|[.]$', '', st)
    st = st if len(st) > 2 else st + "".join([st[-1] for i in range(3 - len(st))])
    return st
