import math

def solution(n, left, right):
    answer = []
    for i in range(left, right + 1):
        row = math.floor(i / n)
        col = i % n
        answer.append(max(row + 1, col + 1))
    return answer
