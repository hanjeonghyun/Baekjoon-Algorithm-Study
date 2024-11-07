def solution(array, commands):
    answer = []
    for x in commands:
        i = x[0]
        j = x[1]
        k = x[2]
        
        arr = array[i-1:j]
        arr = sorted(arr)
        
        answer.append(arr[k-1])
    
    return answer