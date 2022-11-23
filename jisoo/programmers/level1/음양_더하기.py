"""
https://school.programmers.co.kr/learn/courses/30/lessons/76501
"""
def solution(absolutes, signs):
    answer = 0

    for a,b in zip(absolutes,signs):
        if b:
            answer +=a
        else:
            answer -=a

    return answer