coins = [500,100,50,10,5,1]

price = int(input())
pay = 1000 - price
answer = 0

for i in coins:
    answer += pay // i
    pay = pay % i

print(answer)