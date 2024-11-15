T = int(input())
for test_case in range(1, T + 1):
    n = int(input())
    arr = [list(input().split()) for _ in range(n)]
    rotated_90 = list(zip(*arr[::-1]))
    rotated_180 = list(zip(*rotated_90[::-1]))
    rotated_270 = list(zip(*rotated_180[::-1]))
    
    print(f"#{test_case}")
    for i in range(len(arr)):
        print(''.join(map(str, rotated_90[i])), end=' ')        
        print(''.join(map(str, rotated_180[i])), end=' ')
        print(''.join(map(str, rotated_270[i])), end='\n')

        
