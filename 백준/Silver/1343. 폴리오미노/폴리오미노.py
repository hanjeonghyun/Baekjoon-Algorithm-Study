copy = input()
board = list(map(str, copy.split('.')))
poly = ''

for i in board:
    if len(i) % 2 == 1:
        print(-1)
        exit()

for i in board:
    if len(i) == 0:
        poly += '.'
        continue
    if len(i) % 4 == 0:
        poly += 'A' * len(i)
    if len(i) % 4 != 0 and len(i) % 2 == 0:
        a = len(i) // 4
        poly += 'A' * (len(i) - (len(i) % 4))
        poly += 'B' * (len(i) % 4)
    poly += '.'

print(poly[:len(copy)])