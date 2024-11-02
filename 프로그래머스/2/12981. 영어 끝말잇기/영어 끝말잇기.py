import math

def solution(n, words):
    answer = []
    temp = []
    
    for i in range(len(words)):
        if (i > 0 and words[i][0] != words[i - 1][len(words[i - 1]) -1]) or words[i] in temp:
            answer.append(i % n + 1)
            answer.append(math.floor(i / n) + 1)
            return answer
        
        temp.append(words[i])
        
    return [0,0]
