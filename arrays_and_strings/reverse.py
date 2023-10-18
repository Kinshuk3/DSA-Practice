#Given an array or string, reverse the array/string
# Input: arr[] = {1,2,3}
# output arr[] = {3,2,1}

def reverse(arr):
    for x in range(len(arr), 0, -1):
        print(x)

def reverse_2(arr):
    start = 0
    end = len(arr) - 1

    while start < end:
        # swap first and last element
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        # move pointers
        start += 1
        end -= 1
    print(arr)

arr = [5,6,7,8,9,10]
# reverse(arr)
reverse_2(arr)
