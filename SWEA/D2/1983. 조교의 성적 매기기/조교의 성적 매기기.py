T = int(input())
grades = ['A+', 'A0', 'A-', 'B+', 'B0', 'B-', 'C+', 'C0', 'C-', 'D0']
for test_case in range(1, T + 1):
    n, k = map(int, input().split())
    ratio = n // 10
    scores = []
    for _ in range(n):
        middle, final, assignment = map(int, input().split())
        total = middle * 0.35 + final * 0.45 + assignment * 0.2
        scores.append(total)
        
    k_score = scores[k - 1]
    
    scores.sort(reverse=True)
    idx = scores.index(k_score) // ratio
    
    print(f"#{test_case} {grades[idx]}")    
    
