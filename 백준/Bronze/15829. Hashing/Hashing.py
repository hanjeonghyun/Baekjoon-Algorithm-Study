leng = int(input())
str = list(input())

sum = 0

num = list(map(lambda x: ord(x) - 96, str))

for i in range(len(num)):
  sum += num[i] * (31 ** i)

print(sum % 1234567891)