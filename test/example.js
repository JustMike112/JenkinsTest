// load Unit.js module
var test = require('unit.js');

var tryout = require('../public_html/js/tryout.js');

var example = 'Hello world!';

// describes a successfull test as
// [name]
// V [description]

it('Should return the same number we give', function() {
    num = 2;
    
    test.number(tryout.nombre(num)).isEqualTo(num);
})


describe('Hello', function() {
  it('Should return true if Hello world! starts with Hello', function() {
    test.string(example).startsWith('Hello');
  });
});

describe('world', function() {
  it('Should return true if Hello world! contains world', function() {
    test.string(example).contains('world');
  });
});
describe('...!', function() {
  it('Should return true if Hello world! contains !', function() {
    test.string(example).contains('!');
  });
});

// describes a successfull test as
// V [nameTest]
it('other test case', function(){
    // empty test case succeeds
  });