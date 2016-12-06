//... Author - Mike Schouten ...//

// load Unit.js module
var test = require('unit.js');

// load file to test
var tryout = require('../public_html/js/tryout.js');

describe('Time functions', function() {
    it('getHour() should return the hour', function() {
        test.number(tryout.getHour('12:45')).isEqualTo(12);
    });
    
    it('getMinutes() should return the minutes', function() {
        test.number(tryout.getMinutes('12:45')).isEqualTo(45);
    });
    
    it('noFunction should not do anything', function() {
        //empty test should pass
    });
    
});

describe('Greet functions', function() {
    it('hi() should return Hello world!', function() {
        test.string(tryout.hi()).isEqualTo('Hello world!');
    });
    
    it('greetings() should greet me', function() {
        test.string(tryout.greetings('Mike')).isEqualTo('Greetings Mike');
    });
    
});

describe('Math functions', function() {
    it('Nombre() should return the same number we give it', function() {    
        test.number(tryout.nombre(2)).isEqualTo(2);
    });
    
});