function isPangram(string) {
    var letters = "abcdefghijklmnopqrstuvwxyz"
    string = string.toLowerCase().replace(/[^a-z]/g, '')
    for (var i = 0; i < 26; i++)
        if (string.indexOf(letters[i]) < 0) {
            return false;
        }
    return true
}
console.log(isPangram("The quick broWn fox jumps over the lazy dog"));
console.log(isPangram("heLlo world"));