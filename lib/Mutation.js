import { type } from './util';

export default class Mutation {
  constructor({ CONSTANT }) {
    for (let key of Object.keys(CONSTANT.SYNC)) {
      const ELE = CONSTANT.SYNC[key];
      this[ELE.TYPE] = (state, payload) => {
        const storeName = ELE.storeName;

        if (type(payload[storeName]) === 'object') {
          state[storeName] = { ...state[storeName], ...payload[storeName] };
          //   console.log(storeName, { ...state[storeName], ...payload[storeName] })
          return;
        }
        state[storeName] = payload[storeName];
      };
    }
  }
}
