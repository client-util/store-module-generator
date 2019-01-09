(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Constant", "./Mutation"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Constant_1 = require("./Constant");
    var Mutation_1 = require("./Mutation");
    var moduleGenertor = function (config, ACTION_NAME, cKey) {
        if (!cKey)
            throw Error('Must give a config key');
        if (!config.SYNC)
            throw Error('Must give a SYNC Object in config');
        var CONSTANT = new Constant_1.Constant(config, ACTION_NAME, cKey);
        var module = {
            mutations: new Mutation_1.Mutation({
                CONSTANT: CONSTANT
            })
        };
        return module;
    };
    exports.default = moduleGenertor;
});
