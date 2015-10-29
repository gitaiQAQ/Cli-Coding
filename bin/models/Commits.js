// Generated by CoffeeScript 1.10.0
(function() {
  var BaseModel, Commits,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Commits = (function(superClass) {
    extend(Commits, superClass);

    function Commits() {
      this.show = bind(this.show, this);
      this.init = bind(this.init, this);
      return Commits.__super__.constructor.apply(this, arguments);
    }

    Commits.prototype.init = function() {
      this.debug("init()");
      return this.program.command("show").description("commit 列表")["arguments"]("<user> <project> <commit>").action(this.show);
    };


    /*
    
     method            : get
     summary         : show
     description    : commit 列表
     header         : userAgent,accept
     path            : user,project,commit
     query            : diff,w
     body            : currentApp,ref
     */

    Commits.prototype.show = function(user, project, commit) {
      this.debug("Commits::show()");
      return this.prompt.get([
        {
          "name": "userAgent",
          "description": "Enter userAgent",
          "type": "string",
          "required": false
        }, {
          "name": "accept",
          "description": "Enter accept",
          "type": "string",
          "required": false
        }, {
          "name": "diff",
          "description": "Enter diff",
          "type": "string",
          "required": false
        }, {
          "name": "w",
          "description": "Enter w",
          "type": "string",
          "required": false
        }, {
          "name": "currentApp",
          "description": "Enter currentApp",
          "type": "string",
          "required": false
        }, {
          "name": "ref",
          "description": "Enter ref",
          "type": "string",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          params = _this.parseParames(params, ["userAgent", "accept"], ["diff", "w"], ["currentApp", "ref"], []);
          return _this.coding.commit.show(user, project, commit, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };

    return Commits;

  })(BaseModel);

  module.exports = function(cmd) {
    return new Commits(cmd);
  };

}).call(this);
