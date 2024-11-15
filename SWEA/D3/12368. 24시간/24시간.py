T = int(input())
for test_case in range(1, T + 1):
    h1, h2 = map(int, input().split())
    time = h1 + h2
    if time > 24:
        time = time % 24
    elif time == 24:
        time = 0
        
    print(f"#{test_case} {time}")
