T = int(input())
week = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
for test_case in range(1, T + 1):
    answer = 7
    day = input()
    for x in week:
        if day == x:
            answer = week.index('SUN') - week.index(day)
    if answer == 0:
        answer = 7
    print(f'#{test_case} {answer}')