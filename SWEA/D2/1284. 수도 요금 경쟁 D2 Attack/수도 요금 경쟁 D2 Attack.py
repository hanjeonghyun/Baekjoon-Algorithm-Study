T = int(input())
for test_case in range(1, T + 1):
    price = 0
    p, q, r, s, w = map(int, input().split())
    a_price = w * p
    if w <= r:
        b_price = q
    else:
        b_price = q + (w - r) * s
    print(f"#{test_case} {min(a_price, b_price)}")
        
