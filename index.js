// CONSTANT key
// CONSTANT NAME

import Constant from './lib/Constant';
import Mutation from './lib/Mutation';

const moduleGenertor = (config, NAME, cKey) => {
  if (!cKey) throw Error('Must give a config key');
  const CONSTANT = new Constant(config, NAME, cKey);
  const module = {
    mutations: new Mutation({
      CONSTANT
    })
  };
};

export default moduleGenertor;
