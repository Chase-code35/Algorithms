def ios(stringinput, sub = "", i= 0):
    if i == len(stringinput):
        return [sub]
    else:
        return ios(stringinput, sub+ stringinput[i], i+1 ) + ios(stringinput, sub, i+1)



print(ios("abc"))