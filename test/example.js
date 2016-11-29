// load Unit.js module
var test = require('unit.js');

//var file = require('../JenkinsTest/public_html/js/tryout.js');

var example = 'Hello world!';

// describes a successfull test as
// [name]
// V [description]
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