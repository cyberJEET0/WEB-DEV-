arr=[3,4,7,6]
i=0
j=len(arr)-1
while i<j:
    arr[i],arr[j]=arr[j]
arr=arr[i]
i=i+1
j=j-1   