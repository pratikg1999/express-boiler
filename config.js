const nconf = require('nconf');

const CONFIG = {
  default: {},
  local: {},
  development: {},
  production: {},
};

const loadConfig = () => {
  nconf.env();
  if (process.env.NODE_ENV) {
    if (CONFIG[process.env.NODE_ENV]) {
      nconf.overrides({ store: CONFIG[process.env.NODE_ENV] });
    }
  }
  nconf.defaults({ store: CONFIG.default });
};

module.exports = {
  loadConfig,
};
