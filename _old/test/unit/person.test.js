'use strict';

var expect = require('chai').expect;
var Person = require('../../src/unit/person');

describe('测试Person', function () {

  var bill = new Person('Bill', 'Gates', 56);

  it('Bill应该是个Person', function () {
    expect(bill).instanceof(Person);
  });

  it('Person应该叫Bill Gates,56岁', function () {
    expect(bill.firstName).to.have.string('Bill');
    expect(bill.lastName).to.have.string('Gates');
    expect(bill.id).to.equal(56);
  });

  it('人应该有姓和名', function () {
    expect(bill).to.have.property('firstName');
    expect(bill).to.have.property('lastName');
  });

  it('人可以改名字', function () {
    bill.changeName('Simith');
    expect(bill.lastName).to.have.string('Simith');
  });
});

