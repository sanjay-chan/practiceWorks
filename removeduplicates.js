//Remove duplicates//

function duplicate(str) {
    //str="amgamgamgamgamgamagamgamgamgamgamgamgamgamgamgamgz"
    var unik = ''
    for (const char of str) {
        if (unik.includes(char) == false) {
            unik += char;
        }
    }
    return unik;
}
let c = duplicate("amgamgamgamgamgamagamgamgamgamgamgamgamgamgamgamgz")
console.log("Remove dupilicate elements for this string=", c)