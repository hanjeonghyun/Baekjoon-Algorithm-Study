T = int(input())
for test_case in range(1, T + 1):
    L, U, X = map(int, input().split())
    time = 0
    if U < X:
        time = -1
    if L <= X <= U:
        time = 0
    if X < L:
        time = L - X
        
    print(f"#{test_case} {time}")