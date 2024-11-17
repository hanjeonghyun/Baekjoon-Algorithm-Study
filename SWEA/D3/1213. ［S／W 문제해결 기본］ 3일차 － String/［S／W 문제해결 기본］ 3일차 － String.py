T = 10
for test_case in range(1, T + 1):
    n = int(input())
    search = input()
    sentence = input()
    cnt = sentence.count(search)
    
    print(f'#{n} {cnt}')
    
    
