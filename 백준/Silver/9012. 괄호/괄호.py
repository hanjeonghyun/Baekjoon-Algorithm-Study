n = int(input()) 

for _ in range(n):
    ps = input()  
    num = 0

    for char in ps:
        if char == "(":
            num += 1
        elif char == ")":
            num -= 1

        if num < 0:
            break

    if num == 0:
        print("YES")
    else:
        print("NO")
