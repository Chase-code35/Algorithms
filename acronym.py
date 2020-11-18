def acronym(stringinput):

    acronym = ""
    for word in stringinput.split():
        acronym = acronym + word[0].upper()
    return acronym

print(acronym("united state marine corps"))


