const apiOut = require('../lib/apiOut');

const helloWorld = async (req, res, next) => {
  try {
    return apiOut.success(res, 'hello world');
  } catch (e) {
    next(e);
  }
};

module.exports = {
  helloWorld,
};
