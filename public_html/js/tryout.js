//... Author - Mike Schouten ...//

// variables
var text = 'Hello world!';
var hours = 24;
var minutes = 60;

// functions
function hi () {
    return text;
}

function greetings(name) {
    return 'Greetings ' + name;
}

function getHour(time) {
    time = parseInt(time.substr(0, 2));
    return time;
}

function getHour(time) {
    time = parseInt(time.substr(3, 5));
    return time;
}

function nombre(num) {
    return num;
}



// For testing purposes -> add the functions and variables you want to test here
if (typeof module !== 'undefined' && module.exports !== null) {
    exports.greetings = greetings;
    exports.getHour = getHour;
    exports.hi = hi;
    exports.nombre = nombre;
}
