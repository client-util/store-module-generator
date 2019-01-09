var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Constant = (function () {
        function Constant(config, NAME, key) {
            var e_1, _a, e_2, _b;
            var SYNC = config.SYNC, ASYNC = config.ASYNC;
            this.SYNC_LIST = [];
            this.CONCAT_LIST = [];
            if (key in SYNC) {
                try {
                    for (var _c = __values(SYNC[key]), _d = _c.next(); !_d.done; _d = _c.next()) {
                        var item = _d.value;
                        this.SYNC_LIST.push({
                            TYPE: 'SYNC_' + NAME + '_' + item.TYPE,
                            storeName: item.storeName
                        });
                        item.opts &&
                            item.opts.concat &&
                            this.CONCAT_LIST.push({
                                TYPE: 'CONCAT_' + NAME + '_' + item.TYPE,
                                storeName: item.storeName
                            });
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
            if (ASYNC && key in ASYNC) {
                this.ASYNC_LIST = [];
                try {
                    for (var _e = __values(ASYNC[key]), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var item = _f.value;
                        this.ASYNC_LIST.push({
                            TYPE: 'ASYNC_' + NAME + '_' + item.TYPE
                        });
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        return Constant;
    }());
    exports.Constant = Constant;
});
