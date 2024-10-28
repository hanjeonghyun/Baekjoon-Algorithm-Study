import math

def solution(brown, yellow):
    answer = []
    block = brown + yellow
    for i in range(math.ceil(block / 2), 1, -1):
        divisor = block // i
        if (i - 2) * (divisor - 2) == yellow:
            answer.append(i)
            answer.append(divisor)
            break
    return answer

