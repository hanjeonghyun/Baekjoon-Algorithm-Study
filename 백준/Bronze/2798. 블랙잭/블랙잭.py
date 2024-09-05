card, num = map(int, input().split())  
cards = list(map(int, input().split())) 

total = set()

for i in range(len(cards)):
  for j in range(i + 1, len(cards)):
    for k in range(j + 1, len(cards)):
        total.add(cards[i] + cards[j] + cards[k])

max_total = max(filter(lambda x: x <= num, total))
  

print(max_total)