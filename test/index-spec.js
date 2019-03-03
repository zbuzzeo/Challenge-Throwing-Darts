'use strict';

const mocha = require('mocha');
const chai = require('chai');
const scoreThrows = require('../index');

const expect = chai.expect;

describe('scoreThrows', () => {
  it('should only accept arrays', () => {
    expect(() => scoreThrows(1)).to.throw('scoreThrows expected an array');
    expect(() => scoreThrows({})).to.throw('scoreThrows expected an array');
  });
  it('should only accept scores less than 20', () => {
    expect(() => scoreThrows([15, 20, 30])).to.throw('At least one of your scores was above 20');
  });
  it('should only accept numbers as scores', () => {
    expect(() => scoreThrows([1, '2', 3])).to.throw('scoreThrows expected numbers as scores');
  });
  it('should return -1 with an empty collection', () => {
    expect(scoreThrows([])).to.deep.equal(-1);
  });
  it('should add the correct number of points', () => {
    expect(scoreThrows([1, 5, 11])).to.deep.equal(15);
    expect(scoreThrows([11, 15, 17])).to.deep.equal(0);
  });
  it('should add 100 points if all throws are less than 5', () => {
    expect(scoreThrows([1, 2, 1, 4, 4, 2])).to.deep.equal(160);
    expect(scoreThrows([4, 2, 3, 3, 4, 1, 2, 2])).to.deep.equal(180);
  });
});
