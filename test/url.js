/*
 * Url test
 */

'use strict';

var expect = require('chai').expect;
var url = require('../lib/url');

describe('url', function () {
  it('formats path', function () {
    var uri = url.format('a/b', 'c', '/d/e');
    expect(uri).to.be.equal('a/b/c/d/e');
  });

  it('formats path with params', function () {
    var uri = url.format('users/:user', '/images', { param: { user: 'john' } });
    expect(uri).to.be.equal('users/john/images');
  });

  it('adds query string parameters', function () {
    var uri = url.format('a', 'b', { query: { limit: 100,  start: 10 } });
    expect(uri).to.be.equal('a/b?limit=100&start=10');
  });

  it('formats with host', function () {
    var uri = url.format('http://risingstack.com', 'team');
    expect(uri).to.be.equal('http://risingstack.com/team');
  });

  it('formats with path, query, hash and params', function () {
    var uri = url.format('http://risingstack.com', 'users/:user', ':page', {
      param: {
        user: 'john',
        page: 'profile'
      },
      query: {
        limit: 100,
        start: 10
      },
      hash: 'image'
    });

    expect(uri).to.be.equal('http://risingstack.com/users/john/profile?limit=100&start=10#image');
  });
});
