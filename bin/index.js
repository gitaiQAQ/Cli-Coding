// Generated by CoffeeScript 1.10.0
(function() {
  var Cmd, CmdBase, config, packageInfo,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  CmdBase = require('./CmdBase').CmdBase;

  packageInfo = require("../package.json");

  config = require("../config");

  Cmd = (function(superClass) {
    extend(Cmd, superClass);

    function Cmd() {
      this.handleOptions = bind(this.handleOptions, this);
      return Cmd.__super__.constructor.apply(this, arguments);
    }

    Cmd.prototype.handleOptions = function() {
      Cmd.__super__.handleOptions.apply(this, arguments);
      return this.program.usage("[options]").description('A simple command-line tool for coding.net by nodejs').version(packageInfo.version);
    };

    return Cmd;

  })(CmdBase);

  module.exports = function() {
    return new Cmd(config());
  };

  module.exports.Cmd = Cmd;

}).call(this);
