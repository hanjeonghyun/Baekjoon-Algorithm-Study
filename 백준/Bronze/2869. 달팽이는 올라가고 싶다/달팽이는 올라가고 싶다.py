import math

day, night, tree = map(int, input().split())

day = (tree - night) / (day - night)

print(math.ceil(day))