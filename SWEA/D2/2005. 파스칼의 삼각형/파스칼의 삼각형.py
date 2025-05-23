T = int(input())
for test_case in range(1, T + 1):
    n = int(input())
    arr = [[0] * (n + 1) for _ in range(n + 1)]
    arr[1][1] = 1
    for i in range(2, n + 1):
        for j in range(1, i + 1):
            arr[i][j] = arr[i - 1][j] + arr[i - 1][j - 1]

    print(f'#{test_case}')
    for i in range(1, n + 1):
        print(' '.join(str(x) for x in arr[i] if x != 0))
