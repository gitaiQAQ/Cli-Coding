// Generated by CoffeeScript 1.10.0
(function() {
  var BaseModel, Blobs,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Blobs = (function(superClass) {
    extend(Blobs, superClass);

    function Blobs() {
      this.blob = bind(this.blob, this);
      this.init = bind(this.init, this);
      return Blobs.__super__.constructor.apply(this, arguments);
    }

    Blobs.prototype.init = function() {
      this.debug("init()");
      return this.program.command("blob").description("获取 blob")["arguments"]('<user> <project> <blob>').action(this.blob);
    };


    /*
    
     operationId  : blob
     description  : 获取 blob
     args     	: user,project,blob
     params 		:
     */

    Blobs.prototype.blob = function(user, project, blob) {
      this.debug("blob()");
      return this.coding.blobs.blob(user, project, blob, params, function(data) {
        return console.log(data);
      });
    };

    return Blobs;

  })(BaseModel);

  module.exports = function(cmd) {
    return new Blobs(cmd);
  };

}).call(this);
