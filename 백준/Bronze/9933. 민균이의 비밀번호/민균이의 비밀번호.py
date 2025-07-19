n = int(input())
pws = []
answer = ''

for i in range(n):
    pws.append(input())

for pw in pws:
    reverse = pw[::-1]
    if reverse in pws:
        answer = reverse

print(len(answer), answer[len(answer) // 2])

