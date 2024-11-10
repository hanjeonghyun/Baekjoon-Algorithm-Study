T = int(input())

for test_case in range(1, T + 1):
    day_max = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    date = input()
    year = date[0:4]
    month = date[4:6]
    day = date[6:8]
    
    if int(month) > 13 or int(month) < 1:
        print(f"#{test_case} -1")
        continue
        
    if int(day) > day_max[int(month) - 1]:
        print(f"#{test_case} -1")
        continue
        
    print(f"#{test_case} {year}/{month}/{day}")
