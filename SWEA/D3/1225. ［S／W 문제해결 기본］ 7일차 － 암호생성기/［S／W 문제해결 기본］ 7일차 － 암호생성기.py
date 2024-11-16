T = 10
for test_case in range(1, T + 1):
    n = int(input())
    pw = list(map(int, input().split()))
    cnt = 1
    
    while True:
        if cnt == 6:
            cnt = 1
            
        temp = pw.pop(0)
        temp -= cnt
        
        if temp <= 0:
            temp = 0
            pw.append(temp)
            break
            
        pw.append(temp)
        cnt += 1
        
    answer = ' '.join(map(str, pw))
    print(f"#{test_case} {answer}")
