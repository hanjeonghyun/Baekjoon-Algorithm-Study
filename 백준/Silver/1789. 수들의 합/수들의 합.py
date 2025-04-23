s = int(input())
num = 0
answer = 0

for i in range(1, s):
    if num + i > s:
        break

    num += i
    answer += 1

if s == 1:
    print(1)
else:
    print(answer)


