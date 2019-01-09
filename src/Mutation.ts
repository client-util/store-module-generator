import { type } from './util'

export class Mutation {
  constructor({ CONSTANT }) {
    for (const ELE of CONSTANT.SYNC_LIST) {
      this[ELE.TYPE] = (state, payload) => {
        const storeName = ELE.storeName
        const data = payload[storeName]
        if (data === undefined) throw Error('muation cannot find expected key: ' + storeName)
        if (type(data) === 'object') {
          state[storeName] = Object.assign(state[storeName], data)
          return
        }
        state[storeName] = data
      }
    }

    for (const ELE of CONSTANT.CONCAT_LIST) {
      this[ELE.TYPE] = (state, payload) => {
        const storeName = ELE.storeName
        const data = payload[storeName]
        if (!data) throw Error('muation cannot find expected key: ' + storeName)
        state[storeName] = state[storeName].concat(data)
      }
    }
  }
}
