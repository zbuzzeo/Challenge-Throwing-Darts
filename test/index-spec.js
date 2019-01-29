'use strict';

const mocha = require('mocha');
const chai = require('chai');
const scoreThrows = require('../index');

const expect = chai.expect;

describe('scoreThrows', () => {
  it('should only accept arrays', () => {
    expect(scoreThrows(1)).to.deep.equal('scoreThrows expected an array');
    expect(scoreThrows({})).to.deep.equal('scoreThrows expected an array');
  });
  it('should', () => {

  });
});
