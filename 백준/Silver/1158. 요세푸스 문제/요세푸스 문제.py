n, k = map(int, input().split())
idx = 0
people = []
removed = []

for i in range(1, n + 1):
    people.append(i)

while True:
    if len(removed) == n:
        break

    idx = (idx + k - 1) % len(people)
    removed.append(str(people.pop(idx)))

print("<" + ', '.join(removed) + ">")

