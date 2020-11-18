def parensValid(stringInput):
    count = 0
    for i in range(len(stringInput)):
        if stringInput[i] == "(":
            count +=1
        elif stringInput[i] == ")":
            count -=1

        if count < 0:
            print("invalid order- premature closing")
            return False
    #check for if even amount of close vs open
    if count == 0:
        return True
    else:
        return False


print(parensValid("())()"))