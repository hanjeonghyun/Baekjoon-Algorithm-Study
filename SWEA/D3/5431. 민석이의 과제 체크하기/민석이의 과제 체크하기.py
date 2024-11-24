T = int(input())
for test_case in range(1, T + 1):
    n, m = map(int, input().split())
    std = list(map(int, input().split()))
    arr = list(range(1, n + 1))
    
    arr = [x for x in arr if x not in std]
            
    answer = ' '.join(map(str, arr)) 
    
    print(f'#{test_case} {answer}')
