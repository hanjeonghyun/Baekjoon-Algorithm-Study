T = int(input())
for test_case in range(1, T + 1):
    n, k = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(n)]
    result = 0
    
    for i in range(n):
        sum = 0
        for j in range(n):
            if arr[i][j] == 1:
                sum += 1
            if arr[i][j] == 0 or j == n -1:
                if sum == k:
                    result += 1
                sum = 0
        for j in range(n):
            if arr[j][i] == 1:
                sum += 1
            if arr[j][i] == 0 or j == n - 1:
                if sum == k:
                    result += 1
                sum = 0
    print(f"#{test_case} {result}")
    
