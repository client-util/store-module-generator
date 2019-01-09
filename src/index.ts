// CONSTANT key
// CONSTANT NAME

import { Constant } from './Constant'
import { Mutation } from './Mutation'

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

export default moduleGenertor

