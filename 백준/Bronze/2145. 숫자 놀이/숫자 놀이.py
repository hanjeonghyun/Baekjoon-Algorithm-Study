def calculator(num):
    while len(num) >= 2:
        total = sum(int(i) for i in num)
        num = list(str(total))
    return int(''.join(num))


while True:
    num = int(input())

    if num == 0:
        break

    nums = list(str(num))
    total = calculator(nums)

    print(total)







