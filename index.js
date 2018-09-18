// CONSTANT key
// CONSTANT NAME

const Constant = require('./lib/Constant')
const Mutation = require('./lib/Mutation')

const moduleGenertor = (config, ACTION_NAME, cKey) => {
  if (!cKey) throw Error('Must give a config key')
  if (!config.SYNC) throw Error('Must give a SYNC Object in config')
  const CONSTANT = new Constant(config, ACTION_NAME, cKey)
  const module = {
    // 参照 VUEX store muation 的配置
    // https://vuex.vuejs.org/guide/mutations.html
    mutations: new Mutation({
      CONSTANT
    })
  }
  return module
}

module.exports = moduleGenertor
