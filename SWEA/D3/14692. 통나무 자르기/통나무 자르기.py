T = int(input())
for test_case in range(1, T + 1):
    leng = int(input())
    name = ''
    if leng % 2 == 0:
        name = 'Alice'
    else:
        name = 'Bob'
        
    print(f'#{test_case} {name}')
