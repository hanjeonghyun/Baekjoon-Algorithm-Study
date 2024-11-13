T = int(input())
for test_case in range(1, T + 1):
    fh, fm, sh, sm = map(int, input().split())
    h = fh + sh
    m = fm + sm
    
    if m > 59:
        h += m // 60
        m = m % 60
        
    if h > 12:
        h = h % 12
        if h == 0:
            h = 12
            
    print(f"#{test_case} {h} {m}")