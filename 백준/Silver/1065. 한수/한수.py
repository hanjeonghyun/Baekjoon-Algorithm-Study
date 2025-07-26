n = int(input())
hansu = 0

for i in range(1, n + 1):
    if i < 100:
        hansu += 1
    else:
        lst = list(str(i))
        if (int(lst[2]) - int(lst[1])) == (int(lst[1]) - int(lst[0])):
            hansu += 1

print(hansu)