a, b = map(str, input().split())

a_lst = list(map(int, a))
b_lst = list(map(int, b))

answer = 0

for i in a_lst:
    for j in b_lst:
        answer += i * j

print(answer)