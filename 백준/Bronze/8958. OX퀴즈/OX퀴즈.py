case  = int(input())

for i in range(case):
    ans = list(input())
    score = 0
    bonus = 0
    for i in ans:
        if i == 'O':
            bonus += 1
            score = score + bonus
        elif i == 'X':
            bonus = 0
    print(score)
            
    