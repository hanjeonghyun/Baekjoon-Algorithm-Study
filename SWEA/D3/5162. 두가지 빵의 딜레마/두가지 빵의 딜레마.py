T = int(input())
for test_case in range(1, T + 1):
    a, b, c = map(int, input().split())
    bread = 0

    bread += c // min(a, b)
    c = c % min(a, b)
        
    print(f'#{test_case} {bread}')