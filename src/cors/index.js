'use strict';

const DEFAULT_ALLOW_METHODS = [
  'POST',
  'GET',
  'PUT',
  'PATCH',
  'DELETE',
  'OPTIONS'
];

const DEFAULT_ALLOW_HEADERS = [
  'X-Requested-With',
  'Access-Control-Allow-Origin',
  'X-HTTP-Method-Override',
  'Content-Type',
  'Authorization',
  'Accept'
];

const MAX_AGE = 60 * 60 * 24;

module.exports = handler => (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Max-Age', MAX_AGE);
  res.setHeader(
    'Access-Control-Allow-Methods',
    DEFAULT_ALLOW_METHODS.join(',')
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    DEFAULT_ALLOW_HEADERS.join(',')
  );
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  return handler(req, res);
};
