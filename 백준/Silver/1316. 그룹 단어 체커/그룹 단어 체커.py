n = int(input())
answer = 0

for _ in range(n):
    word = input()
    is_group = True  
    seen = set()
    prev_char = ''

    for char in word:
        if char != prev_char:
            if char in seen:
                is_group = False
                break
            seen.add(char)
            prev_char = char
        else:
            continue

    if is_group:
        answer += 1

print(answer)
