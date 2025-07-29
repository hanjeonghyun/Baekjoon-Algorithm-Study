n = int(input())
answer = 0

for _ in range(n):
    stack = []
    chars = list(input())

    if len(chars) % 2 == 1:
        continue

    for char in chars:
        if stack and char == stack[-1]:
            stack.pop()
            continue
        else:
            stack.append(char)

    if len(stack) > 0:
        continue
    else:
        answer += 1

print(answer)


