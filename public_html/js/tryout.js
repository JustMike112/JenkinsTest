// Author - Mike

var text = 'Hello world!'

function hi () {
    return text;
}

function nombre(num) {
    return num;
}



// For testing purposes -> add the functions you want to test here
if (typeof module !== 'undefined' && module.exports !== null) {
    exports.hi = hi;
    exports.nombre = nombre;
}
