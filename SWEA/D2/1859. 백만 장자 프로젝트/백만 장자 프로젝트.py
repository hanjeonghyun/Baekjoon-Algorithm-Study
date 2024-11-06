T = int(input())
for test_case in range(1, T + 1):
    n = int(input())
    price = list(map(int, input().split()))
    money = 0
    max_price = 0 

    for i in range(n - 1, -1, -1):
        if price[i] > max_price:
            max_price = price[i]
        else:
            money += max_price - price[i]

    print(f"#{test_case} {money}")