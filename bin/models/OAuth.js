// Generated by CoffeeScript 1.10.0
(function() {
  var BaseModel, Oauth,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Oauth = (function(superClass) {
    extend(Oauth, superClass);

    function Oauth() {
      this.logout = bind(this.logout, this);
      this.login = bind(this.login, this);
      this.init = bind(this.init, this);
      return Oauth.__super__.constructor.apply(this, arguments);
    }

    Oauth.prototype.init = function() {
      this.debug("init()");
      this.program.command("login").action(this.login);
      return this.program.command("logout").alias('clear').action(this.logout);
    };

    Oauth.prototype.login = function() {
      this.debug("login()");
      return this.coding.oauth.authorize(this.opts.clientId, this.opts.clientSecret, this.opts.port, this.opts.scope);
    };

    Oauth.prototype.logout = function() {
      this.debug("logout()");
      return this.coding.oauth.clean;
    };

    return Oauth;

  })(BaseModel);

  module.exports = function(cmd) {
    return new Oauth(cmd);
  };

}).call(this);
