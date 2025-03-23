name = input()
team = []
point = []
n = int(input())
for i in range(n):
    love = [name.count("L"), name.count("O"), name.count("V"), name.count("E")]
    t = input()
    team.append(t)
    love[0] += t.count("L")
    love[1] += t.count("O")
    love[2] += t.count("V")
    love[3] += t.count("E")
    temp = 1
    for i in range(0, 3, 1):
        for j in range(i + 1, 4, 1):
            temp *= (love[i] + love[j])
    point.append(temp % 100)
    
answer = []
for i in range(0, len(point), 1):
    if point[i] == max(point):
        answer.append(team[i])
answer.sort()

print(answer[0])