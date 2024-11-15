T = int(input())
vowel = ['a', 'e', 'i', 'o', 'u']
for test_case in range(1, T + 1):
    word = list(input())
    filtered = [x for x in word if x not in vowel]
    
    print(f"#{test_case} {''.join(filtered)}")
