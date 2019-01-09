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
        define(["require", "exports", "./util"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var util_1 = require("./util");
    var Mutation = (function () {
        function Mutation(_a) {
            var e_1, _b, e_2, _c;
            var CONSTANT = _a.CONSTANT;
            var _loop_1 = function (ELE) {
                this_1[ELE.TYPE] = function (state, payload) {
                    var storeName = ELE.storeName;
                    var data = payload[storeName];
                    if (data === undefined)
                        throw Error('muation cannot find expected key: ' + storeName);
                    if (util_1.type(data) === 'object') {
                        state[storeName] = Object.assign(state[storeName], data);
                        return;
                    }
                    state[storeName] = data;
                };
            };
            var this_1 = this;
            try {
                for (var _d = __values(CONSTANT.SYNC_LIST), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var ELE = _e.value;
                    _loop_1(ELE);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            var _loop_2 = function (ELE) {
                this_2[ELE.TYPE] = function (state, payload) {
                    var storeName = ELE.storeName;
                    var data = payload[storeName];
                    if (!data)
                        throw Error('muation cannot find expected key: ' + storeName);
                    state[storeName] = state[storeName].concat(data);
                };
            };
            var this_2 = this;
            try {
                for (var _f = __values(CONSTANT.CONCAT_LIST), _g = _f.next(); !_g.done; _g = _f.next()) {
                    var ELE = _g.value;
                    _loop_2(ELE);
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        return Mutation;
    }());
    exports.Mutation = Mutation;
});
