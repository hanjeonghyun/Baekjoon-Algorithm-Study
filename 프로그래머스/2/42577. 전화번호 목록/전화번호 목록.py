def solution(phone_book):
    sorted_arr = sorted(phone_book)
    for i in range(len(sorted_arr) - 1):
        if sorted_arr[i + 1].startswith(sorted_arr[i]):
            return False
    return True
