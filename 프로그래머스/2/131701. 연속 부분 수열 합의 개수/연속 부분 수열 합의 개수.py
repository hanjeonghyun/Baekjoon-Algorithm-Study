def solution(elements):
    sumset = set()  
    n = len(elements)
    elements = elements + elements  

    for i in range(n): 
        sum_value = 0
        for j in range(1, n + 1):  
            sum_value += elements[i + j - 1]
            sumset.add(sum_value)  

    return len(sumset)  
