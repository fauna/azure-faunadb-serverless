'use strict';

const faunadb = require('faunadb');
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
});

module.exports.hello = function (context, req) {
  // Add any necessary telemetry to support diagnosing your function
  context.log('HTTP trigger occured!');

  // Read properties from the incoming request, and respond as appropriate.
  const name = req.query.name || (req.body && req.body.name) || 'World';
  client.query(q.Concat(["Hello ", name])).then((data) => {
    context.done(null, { body: `Ohai! ${JSON.stringify(data)}` });
  })
};
