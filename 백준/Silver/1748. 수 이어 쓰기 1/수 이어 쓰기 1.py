n = int(input())
length = 0
digit = 1
start = 1

while start * 10 <= n:
    end = start * 10 - 1
    length += (end - start + 1) * digit
    digit += 1
    start *= 10

length += (n - start + 1) * digit
print(length)
