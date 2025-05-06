chars = list(map(str, input().upper()))
dict1 = {}

for char in chars:
    if dict1.get(char):
        dict1[char] += 1
    else:
        dict1[char] = 1

maxNum = max(dict1.values())

if list(dict1.values()).count(maxNum) > 1:
    print('?')
else:
    for k, v in dict1.items():
        if v == maxNum:
            print(k)
            break
