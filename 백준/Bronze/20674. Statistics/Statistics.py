n = int(input())
corona = [int(input()) for _ in range(n)]

if corona == sorted(corona, reverse=True):
    print(0)
else:
    answer = 0
    prev = corona[0]
    for i in corona[1:]:
        if prev < i:
            answer += (i - prev)
        else:
            prev = i
    print(answer)
