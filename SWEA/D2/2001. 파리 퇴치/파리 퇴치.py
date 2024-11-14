T = int(input())
for test_case in range(1, T + 1):
    n, m = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(n)]
    totals = []
    for si in range(0, n - m + 1):
        for sj in range(0, n - m + 1):
            fly = 0
            for i in range(si, si + m):
                for j in range(sj, sj + m):
                    fly += arr[i][j]
                    totals.append(fly)
            
    print(f'#{test_case} {max(totals)}')