T = int(input())
for test_case in range(1, T + 1):
    n = int(input())
    contents = []
    for _ in range(n):
        char, num = input().split()
        num = int(num)
        contents.append(char * num)
    
    contents = ''.join(contents)
    
    print(f"#{test_case}")
    for i in range(0, len(contents), 10):
        print(contents[i:i+10])
        