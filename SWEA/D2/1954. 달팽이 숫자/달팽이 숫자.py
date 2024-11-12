T = int(input())
di = [0, 1, 0, -1]
dj = [1, 0, -1, 0]
for test_case in range(1, T + 1):
    n = int(input())
    arr = [[0] * n for _ in range(n)]
    
    i, j, cnt, dr = 0, 0, 1, 0
    arr[i][j] = cnt
    cnt += 1
    
    while cnt <= n * n:
        ni, nj = i + di[dr], j + dj[dr]
        if 0 <= ni < n and 0 <= nj < n and arr[ni][nj] == 0:
            i, j = ni, nj
            arr[i][j] = cnt
            cnt += 1
        else:
            dr = (dr + 1) % 4
            
    print(f"#{test_case}")
    for lst in arr:
        print(*lst)
