# 스코빌 섞을 수 없는 경우: 길이가 2보다 짧을 시 -1
# 스코빌은 낮은 순서대로 정렬됨

import heapq

def solution(scoville, K):  
    heapq.heapify(scoville)
    
    mix_count = 0
    
    while scoville[0] < K:
        if len(scoville) < 2:
            return -1
        
        first = heapq.heappop(scoville)
        second = heapq.heappop(scoville)
        new_food = (first + second * 2)
        heapq.heappush(scoville, new_food)
        mix_count += 1
            
    return mix_count