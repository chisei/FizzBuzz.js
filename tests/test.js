'use strict';

var assert = require('assert');
var target = require('../fizzbuzz.js');

describe('fizzbuzz', function() {
  it('Fizz', function() {
      assert(target.fizzBuzz(3), 'Fizz');
  });
  it('Buzz', function() {
      assert(target.fizzBuzz(5), 'Buzz');
  });
  it('Fizz Buzz', function() {
      assert(target.fizzBuzz(15), 'Fizz Buzz');
  });
  it('should return as it is', function() {
      assert(target.fizzBuzz(1), 1);
  });
  it('should return as it is', function() {
      assert(target.fizzBuzz(2), 2);
  });
  it('thrown error when zero', function() {
      assert.throws(function() {
          target.fizzBuzz(0)
      });
  });
  it('thrown error when 0.9', function() {
      assert.throws(function() {
          target.fizzBuzz(0.9)
      });
  });
  it('thrown error when string', function() {
      assert.throws(function() {
          target.fizzBuzz('a')
      });
  });
  it('thrown error when null', function() {
      assert.throws(function() {
          target.fizzBuzz('a')
      });
  });
});
