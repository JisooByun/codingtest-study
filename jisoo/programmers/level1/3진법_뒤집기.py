"""
https://school.programmers.co.kr/learn/courses/30/lessons/68935
"""


def convert3(n):
    s = ''
    while n != 0:
        s += str(n % 3)
        n //= 3
    return s[::-1]


def solution(n):
    answer = 0

    t = convert3(n)
    print(t)
    for i in range(len(t)):
        answer += int(t[i]) * (3 ** i)

    return answer
