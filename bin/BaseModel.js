// Generated by CoffeeScript 1.10.0
(function() {
  var Table, _, debug, prompt,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  debug = require('debug')('coding:BaseModel');

  _ = require('lodash');

  Table = require('cli-table');

  prompt = require('prompt');

  module.exports = (function() {
    function exports(cmd) {
      this.cmd = cmd;
      this.transport = bind(this.transport, this);
      this.showData = bind(this.showData, this);
      this._init = bind(this._init, this);
      this.load = bind(this.load, this);
      this._init();
    }

    exports.prototype.load = function(model) {
      return require("./Models/" + model)(this.cmd);
    };

    exports.prototype._init = function() {
      var i18n;
      this.debug = require('debug')("coding:Models:" + this.constructor.name);
      if (this.cmd.opts.modules) {
        if (!_.includes(this.cmd.opts.modules, this.constructor.name)) {
          debug(this.constructor.name);
          return;
        }
      }
      prompt.start();
      prompt.message = "Coding";
      i18n = require('i18n');
      i18n.configure({
        locales: ['Jpan', 'en', 'zh-CN', 'zh-TW'],
        directory: __dirname + '/../locales'
      });
      i18n.setLocale(this.cmd.opts.lang);
      this.__ = i18n.__;
      this.program = this.cmd.program;
      this.coding = this.cmd.coding;
      this.opts = this.cmd.opts;
      this.prompt = prompt;
      this.transport = this.cmd.opts.transport;
      this.table = new Table({
        chars: {
          'top': '═',
          'top-mid': '╤',
          'top-left': '╔',
          'top-right': '╗',
          'bottom': '═',
          'bottom-mid': '╧',
          'bottom-left': '╚',
          'bottom-right': '╝',
          'left': '║',
          'left-mid': '╟',
          'mid': '─',
          'mid-mid': '┼',
          'right': '║',
          'right-mid': '╢',
          'middle': '│'
        }
      });
      if (this.init != null) {
        return this.init();
      }
    };

    exports.prototype.showData = function(data) {
      return this.transport(data);
    };

    exports.prototype.transport = function(data) {
      var key;
      for (key in data) {
        this.table.push([this.__(this.constructor.name + "." + key), data[key]]);
      }
      return console.log(this.table.toString());
    };

    return exports;

  })();

}).call(this);
