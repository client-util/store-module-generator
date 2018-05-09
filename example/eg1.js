const mg = require('../index');

const SYNC = {};

SYNC.root = [
  { TYPE: 'FOO', storeName: 'foo' },
  { TYPE: 'BAR', storeName: 'bar' }
];

const config = {
  SYNC
};

console.log(mg(config, 'TEST', 'root'));
