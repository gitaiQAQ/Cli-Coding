// Generated by CoffeeScript 1.10.0
(function() {
  var debug,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  debug = require('debug')('coding:BaseModel');

  module.exports = (function() {
    function exports(cmd) {
      this.cmd = cmd;
      this._init = bind(this._init, this);
      this.load = bind(this.load, this);
      this._init();
    }

    exports.prototype.load = function(model) {
      return require("./Models/" + model)(this.cmd);
    };

    exports.prototype._init = function() {
      this.debug = require('debug')("coding:Models:" + this.constructor.name);
      this.program = this.cmd.program;
      this.coding = this.cmd.coding;
      this.opts = this.cmd.opts;
      if (this.init != null) {
        return this.init();
      }
    };

    return exports;

  })();

}).call(this);
