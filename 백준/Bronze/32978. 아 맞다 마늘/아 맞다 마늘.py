n = int(input())

recipes = list(map(str, input().split(' ')))
used = list(map(str, input().split(' ')))

for i in recipes:
    if i not in used:
        print(i)
        exit()

