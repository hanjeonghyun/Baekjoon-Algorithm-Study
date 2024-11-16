T = 10
for test_case in range(1, T + 1):
    n = int(input())
    boxes = list(map(int, input().split()))
    
    for i in range(n):
        max_box = max(boxes)
        min_box = min(boxes)
        
        boxes[boxes.index(max_box)] -= 1        
        boxes[boxes.index(min_box)] += 1
        
    max_box = max(boxes)
    min_box = min(boxes)
    
    print(f"#{test_case} {max_box - min_box}")

        
