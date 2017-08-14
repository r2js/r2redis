const chai = require('chai');

const expect = chai.expect;
const redis = require('../index')({}, {});

describe('r2redis', () => {
  describe('connection', () => {
    it('should connect to redis', () => {
      expect(redis.a).to.not.equal(undefined);
      expect(redis.b).to.not.equal(undefined);
      expect(redis.a.address).to.equal('127.0.0.1:6379');
    });
  });
});
