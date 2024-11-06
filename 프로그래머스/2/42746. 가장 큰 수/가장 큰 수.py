def solution(numbers):
    arr = sorted(map(str, numbers), key=lambda x: x*3, reverse=True)
    answer = ''.join(arr)
    
    return str(int(answer))
