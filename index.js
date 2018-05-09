// CONSTANT key
// CONSTANT NAME

const Constant = require('./lib/Constant');
const Mutation = require('./lib/Mutation');

const moduleGenertor = (config, NAME, cKey) => {
  if (!cKey) throw Error('Must give a config key');
  const CONSTANT = new Constant(config, NAME, cKey);
  const module = {
    mutations: new Mutation({
      CONSTANT
    })
  };
  return module;
};

module.exports = moduleGenertor;
