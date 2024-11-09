T = int(input())
for test_case in range(1, T + 1):
    word = input()
    arr = list(word)
    reversed = ''.join(arr[::-1])
    
    answer = 1 if reversed == word else 0
    
    print(f"#{test_case} {answer}")
