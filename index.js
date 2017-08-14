const redis = require('redis');
const log = require('debug')('r2:redis');

const createClient = (name, config) => {
  const { host = '127.0.0.1', port = 6379, pass } = config;
  const client = redis.createClient(port, host);

  if (pass) {
    client.auth(pass);
  }

  client.on('connect', () => {
    log(`client ${name} connected`);
  });

  client.on('error', err => log(err.message));

  return client;
};

module.exports = function Redis(app, conf) {
  const getConfig = conf || app.config('redis');
  if (!getConfig) {
    return log('redis config not found!');
  }

  return {
    a: createClient('a', getConfig),
    b: createClient('b', getConfig),
  };
};
