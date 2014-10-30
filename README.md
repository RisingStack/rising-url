rising-url
==========

[![Build Status](https://travis-ci.org/RisingStack/rising-url.svg?branch=master)]
(https://travis-ci.org/RisingStack/rising-url)

Extends require('url').format() with parameters and easier inputs

## Example

Options is compatible with the [url.format(urlObj)](http://nodejs.org/api/url.html)  
plus accept the `param` field

```javascript
var url = require('rising-url');

url.format('..', ..., options);
```

```javascript
url.format('users/:user', ':page', {
  param: {
    user: 'john',
    page: 'profile'
  }
});

// -> 'users/john/profile'
```

```javascript
url.format('http://risingstack.com', 'users/:user', ':page', {
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

// -> 'http://risingstack.com/users/john/profile?limit=100&start=10#image'
```
