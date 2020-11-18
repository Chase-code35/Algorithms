def coinGenerator(coinInput):

    numQ = int(coinInput/25)
    remaining = coinInput - (25*numQ)
    print('quarters', numQ)
    print(remaining)
    numD = int(remaining/10)
    print('dimes', numD)
    remaining = remaining - (10* numD)
    print('remaining after deducting dimes: ', remaining)
    numN = int(remaining/5)
    print("nickels", numN)
    numP = remaining - (5*numN)
    print("pennies", numP)
    result = {
        "Quarters": numQ,
        "Dimes": numD,
        "Nickels": numN,
        "Pennies": numP
    }
    return result

print(coinGenerator(99))