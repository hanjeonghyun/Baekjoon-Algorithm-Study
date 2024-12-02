T = int(input())
for test_case in range(1, T + 1):
    scores = list(input())
    answer = ''
    if scores.count('x') < 8:
        answer = 'YES'
    else:
        answer = 'NO'
    
    print(f'#{test_case} {answer}')