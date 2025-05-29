n = int(input())

for _ in range(n):
    a, *scores = map(int, input().split())
    total = sum([*scores])
    mean = total / a

    over = [score for score in scores if score > mean]
    per = len(over) / a * 100

    print(str(round(per, 3)) + '%')
