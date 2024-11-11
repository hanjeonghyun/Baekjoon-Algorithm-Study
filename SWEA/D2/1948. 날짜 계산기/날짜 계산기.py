T = int(input())
for test_case in range(1, T + 1):
    day_max = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    fm, fd, sm, sd = map(int, input().split())
    day = 0

    if fm == sm:
        day= sd + 1 - fd
    else:
        day = sum(day_max[fm - 1:sm]) - (fd + (day_max[sm - 1] - (sd + 1)))
        
    print(f"#{test_case} {day}")