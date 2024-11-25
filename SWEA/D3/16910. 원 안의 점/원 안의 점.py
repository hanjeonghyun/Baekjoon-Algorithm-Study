T = int(input())
for test_case in range(1, T + 1):
    answer = 0
    n = int(input())

    for x in range(-n, n + 1):
        for y in range(-n, n + 1):
            if x * x + y * y <= n * n:
                answer += 1
                
    print(f'#{test_case} {answer}')
            