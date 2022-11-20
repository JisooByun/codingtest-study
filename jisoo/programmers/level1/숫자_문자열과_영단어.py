"""
https://school.programmers.co.kr/learn/courses/30/lessons/81301
"""

def solution(s):
    l = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    for i, x in enumerate(l):
        s = s.replace(x, str(i))
    return int(s)
