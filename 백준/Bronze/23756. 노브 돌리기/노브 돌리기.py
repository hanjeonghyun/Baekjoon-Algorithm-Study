n = int(input())
prev = int(input())
answer = 0

for _ in range(n):
    knob = int(input())
    diff = abs(knob - prev)
    answer += min(diff, 360 - diff)
    prev = knob

print(answer)
