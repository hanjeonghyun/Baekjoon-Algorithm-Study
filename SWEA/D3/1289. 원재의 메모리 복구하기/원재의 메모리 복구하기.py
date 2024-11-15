T = int(input())
for test_case in range(1, T + 1):
    original = list(input())
    init = [0] * len(original)
    cnt = 0
    if original[0] == '1':
        cnt += 1
    for i in range(len(init) - 1):
        if int(original[i]) != int(original[i+1]):
            cnt += 1
            
    print(f"#{test_case} {cnt}")
