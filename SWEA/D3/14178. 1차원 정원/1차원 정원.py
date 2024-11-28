import math

T = int(input())
for test_case in range(1, T + 1):
    x, d = map(int, input().split())
    area = d * 2 + 1
    spray = math.ceil(x / area)
    
    print(f'#{test_case} {spray}')
