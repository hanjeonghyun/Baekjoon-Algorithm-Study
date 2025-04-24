a, b = map(int, input().split())
count = 1

while b != a:
    count += 1
    temp = b
    if b % 2 == 0:
        b = b // 2
    elif b % 10 == 1:
        b = b // 10

    if temp == b:
        print(-1)
        break
else:
    print(count)