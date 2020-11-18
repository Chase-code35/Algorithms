def rSigma(numinput):

    if numinput == 0:
        return 0
    
    elif numinput == 1:
        return 1
    
    else:
        return numinput + rSigma(numinput - 1)


def rFactorial(numinput):

    if numinput == 0:
        return 0
    
    elif numinput == 1:
        return 1
    
    else:
        return numinput * rFactorial(numinput - 1)