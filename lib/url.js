/*
 * URL
 *
 * @module url
 */
var _ = require('lodash');

var url = require('url');
var path = require('path');

/*
 * Format
 *
 * extends require('url').format() with parameters and easier inputs
 *
 * @method format
 * @return {String} url
 */
function format() {
  var args = Array.prototype.slice.call(arguments);
  var pathname = [];
  var parsedUrl = {};
  var pathName = '';
  var options;

  // Looking for paths and options
  args.forEach(function (arg, key) {

    // Find a path
    if(_.isString(arg)) {

      // First may contains the host
      if(key === 0) {
        parsedUrl = url.parse(arg);

        if (parsedUrl.pathname[0] && parsedUrl.pathname[0][0] === '/') {
          pathName = '/';
        }

        pathname.push.apply(pathname, parsedUrl.pathname.split('/'));

        return;
      }

      pathname.push.apply(pathname, arg.split('/'));
    }

    // Find the option
    else if (_.isObject(arg)) {
      options = arg;
    }
  });

  options = options || {};

  // Path params
  options.param = options.param || {};

  pathname = pathname.map(function (path) {
    if(path.charAt(0) === ':' && options.param[path.substring(1)]) {
      return options.param[path.substring(1)];
    }

    return path;
  });

  pathName += path.join.apply(path, pathname);
  parsedUrl.pathname = pathName;

  // Merge with options
  parsedUrl = _.merge(parsedUrl, options);

  return url.format(parsedUrl);
}


// Interface
exports.format = format;
