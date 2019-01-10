// TYPE must different !! it's to identify ACTION
export default class Constant {
  constructor(config, NAME, key) {
    const { SYNC, ASYNC } = config
    this.SYNC_LIST = []
    this.CONCAT_LIST = []
    if (key in SYNC) {
      // item 例子: { TYPE: 'BAR', storeName: 'bar' }
      for (const item of SYNC[key]) {
        this.SYNC_LIST.push({
          TYPE: 'SYNC_' + NAME + '_' + item.TYPE,
          storeName: item.storeName
        })

        // 增加 CONCAT MUTATION 操作
        item.opts &&
          item.opts.concat &&
          this.CONCAT_LIST.push({
            TYPE: 'CONCAT_' + NAME + '_' + item.TYPE,
            storeName: item.storeName
          })
      }
    }

    if (ASYNC && key in ASYNC) {
      this.ASYNC_LIST = []
      for (const item of ASYNC[key]) {
        this.ASYNC_LIST.push({
          TYPE: 'ASYNC_' + NAME + '_' + item.TYPE
        })
      }
    }
  }
}
