var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.strictEqual(true, true);
  })

  it('should be able to add', function(){
    calculator.previousTotal = 5;
    calculator.add(12);
    assert.strictEqual(calculator.runningTotal, 17);
  })

  it('should be able to subtract', function () {
  calculator.previousTotal = 55;
  calculator.subtract(5);
  assert.strictEqual(calculator.runningTotal, 50);
  })

  it('should be able to multiply', function () {
  calculator.previousTotal = 100;
  calculator.multiply(3);
  assert.strictEqual(calculator.runningTotal, 300);
  })

  it('should be able to divide', function () {
  calculator.previousTotal = 1000;
  calculator.divide(10);
  assert.strictEqual(calculator.runningTotal, 100);
  })

  it('should display number when it\'s clicked', function() {
    calculator.numberClick(5);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it('should display operator when it\'s clicked', function() {
    calculator.operatorClick('*');
    assert.strictEqual(calculator.previousOperator, '*');
  })

  it('should clear when clr is clicked', function() {
    calculator.numberClick(6);
    calculator.numberClick(6);
    calculator.numberClick(6);
    calculator.clearClick();
    result = calculator.runningTotal
    assert.strictEqual(result, 0);
  })

});
