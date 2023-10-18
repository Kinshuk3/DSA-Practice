# given an array find the max and min of element of it
# Method 1 using sort

def getMinMax(arr):
    arr.sort()
    minMax = {"Min": arr[0], "Max": arr[-1]}
    return minMax



class pair:
    def __init__(self):
        self.min = 0
        self.max = 0

def getMinMax_2(arr: list, n: int) -> pair:
    minmax = pair()

    if n == 1:
        minmax.min = arr[0]
        minmax.max = arr[0]

    if arr[0] > arr[1]:
        minmax.min = arr[1]
        minmax.max = arr[0]
    else:
        minmax.min = arr[0]
        minmax.max = arr[1]

    # start from 3rd element and compare with min/max
    for i in range(2, n):
        if arr[i] > minmax.max:
            minmax.max = arr[i]
        elif arr[i] < minmax.min:
            minmax.min = arr[i]

    # loop and update min/max
    return minmax

arr = [12,39,4,9,8,33,16]

minmax = getMinMax_2(arr, 7)
print(minmax.min, minmax.max)
# print(getMinMax(arr))