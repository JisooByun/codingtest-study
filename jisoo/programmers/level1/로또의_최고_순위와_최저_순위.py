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


def solution2(lottos, win_nums):
    rank = [6, 6, 5, 4, 3, 2, 1]  # index가 맞춘 갯수 0개 맞추면 6등 1개 맞추면 6등 2개 맞추면 5등
    # 맞춘 갯수를 구하면됨
    cnt_0 = lottos.count(0)  # 0의 갯수
    ans = 0
    for x in win_nums:
        if x in lottos:
            ans += 1  # 맞춘갯수
    return rank[cnt_0 + ans], rank[ans]  # best는 0의 개수 모두 맞추는것이므로 0의 갯수+맞춘갯수 ,worst는 0의 갯수가 모두 틀리므로 맞춘 갯수만
