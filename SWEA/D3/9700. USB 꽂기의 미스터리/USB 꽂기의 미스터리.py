T = int(input())
for test_case in range(1, T + 1):
    p, q = map(float, input().split())
    s1 = (1 - p) * q
    s2 = (1 - q) * p * q
    answer = ''
    
    if s1 < s2:
        answer = 'YES'
    else:
        answer = 'NO'
        
    print(f'#{test_case} {answer}')
        
