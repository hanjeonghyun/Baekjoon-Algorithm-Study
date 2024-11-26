T = int(input())
for test_case in range(1, T + 1):
    n, k = map(int, input().split())
    scores = list(map(int, input().split()))
    scores.sort(reverse=True)
    total = sum(scores[:k])
                  
    print(f'#{test_case} {total}')
                