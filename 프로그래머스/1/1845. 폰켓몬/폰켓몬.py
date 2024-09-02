def solution(nums):
    num = len(nums) // 2
    answer = list(set(nums))
    return len(answer) if num > len(answer) else num