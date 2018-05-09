// TYPE must different !! it's to identify ACTION
module.exports = class Constant {
  constructor(config, NAME, key) {
    const { SYNC, ASYNC } = config;
    this.SYNC = {};
    if (key) {
      for (let OBJ of SYNC[key]) {
        this.SYNC[OBJ.TYPE] = {
          TYPE: 'SYNC_' + NAME + '_' + OBJ.TYPE,
          storeName: OBJ.storeName
        };
      }
    }

    if (ASYNC && key in ASYNC) {
      this.ASYNC = {};
      for (let OBJ of ASYNC[key]) {
        this.ASYNC[OBJ.TYPE] = {
          TYPE: 'ASYNC_' + NAME + '_' + OBJ.TYPE
        };
      }
    }
  }
};
