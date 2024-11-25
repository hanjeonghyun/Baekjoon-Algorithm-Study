T = int(input())
for test_case in range(1, T + 1):
    extraScore = 0
    scores = list(map(int, input().split()))
    for score in scores:
        if score < 40:
            diff = 40 - score
            extraScore += diff
    
    mean = (sum(scores) + extraScore) / len(scores)
    
    print(f'#{test_case} {int(mean)}')
