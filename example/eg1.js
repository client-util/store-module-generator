const mg = require('../index')

const SYNC = {}

SYNC.root = [
  // arrayPush 表示, mutation 多一个 push更新的方法, 用于数据类型数据
  { TYPE: 'FOO', storeName: 'foo', opts: { concat: true } },
  { TYPE: 'BAR', storeName: 'bar' }
]

const config = {
  SYNC
}

console.log(mg(config, 'TEST', 'root'))
