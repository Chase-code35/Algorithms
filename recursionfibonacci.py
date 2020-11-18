def rfib(idx):
    #base cases -> when you know exactly what to return
    if idx == 0:
        return 0
    elif idx == 1:
        return 1
    #forward progress-> you call the function rfib as the return but give it an input that takes us one step closer to base case
    else:
        return rfib(idx-1) + rfib(idx-2)



print(rfib(20))
# # rfib(3)+ rfib(2)
# rfib(2) + rfib(1) + rfib(1) + rfib(0)
# rfib(1) + rfib(0) + 1 + 1 + 0
# 1 + 0 + 1 + 1 + 0


# 0, 1, 2, 3, 4, 5, 6, 7, 8...
# 0, 1, 1, 2, 3, 5, 8, 13, 21...