num = int(input())

for _ in range(num):
    n = int(input())
    if n == 0 or n == 1:
        print(1)
    elif n == 2:
        print(2)
    elif n == 3:
        print(4)
    else:
        a, b, c, d = 1, 1, 2, 4  
        for i in range(4, n + 1):
            next_val = a + b + c + d
            a, b, c, d = b, c, d, next_val
        print(d)