"""
https://school.programmers.co.kr/learn/courses/30/lessons/77484
"""


def solution(lottos, win_nums):
    answer = []

    count = 0
    zero_count = 0
    for x in lottos:
        if x == 0:
            zero_count += 1
        if x in win_nums:
            count += 1
    print(count)  # 맞춘 개수 2
    print(zero_count)  # 0의 개수

    worst = 7 - count
    if worst > 6:
        worst = 6
    best = 7 - count - zero_count
    if best > 6:
        best = 6

    return [best, worst]

    # 2개일치 5등 1개 일치 6등 0개 일치 6등
