def solution(k, tangerine):
    answer = 0
    hash = {}
    
    for i in tangerine:
        if i in hash:
            hash[i] += 1
        else:
            hash[i] = 1
            
    sorted_hash = sorted(hash.values(), reverse=True)
            
    for j in sorted_hash:
        if k <= 0:
            break
        k = k - j
        answer += 1
    
    return answer