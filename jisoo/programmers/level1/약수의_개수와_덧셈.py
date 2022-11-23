"""
https://school.programmers.co.kr/learn/courses/30/lessons/77884
"""


def counting(i):
    count = 0
    for x in range(1, i + 1): #절반 숫자 넘어가는 수는 어차피 안되서 확인할 필요없음
        if i % x == 0:
            count += 1
    return count


def solution(left, right):
    answer = 0

    for i in range(left, right + 1):
        count_ = counting(i)
        if count_ % 2 == 0:
            answer += i
        else:
            answer -= i

    return answer

# 단축풀이
def solution2(left, right):
    answer = 0
    for i in range(left,right+1):
        if int(i**0.5)==i**0.5:
            answer -= i
        else:
            answer += i
    return answer
