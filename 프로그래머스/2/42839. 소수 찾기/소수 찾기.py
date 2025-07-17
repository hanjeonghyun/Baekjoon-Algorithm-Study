def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            return False
    return True

def generate(chars):
    results = set()
    used = [False] * len(chars)
    
    def backtrack(path):
        if path:
            num = int("".join(path))
            results.add(num)
        for i in range(len(chars)):
            if not used[i]:
                used[i] = True
                path.append(chars[i])
                backtrack(path)
                path.pop()
                used[i] = False
                
    backtrack([])
    return results

def solution(numbers):
    chars = list(numbers)
    nums = generate(chars)
    
    count = 0
    
    for num in nums:
        if is_prime(num):
            count += 1
            
    return count

