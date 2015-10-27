// Generated by CoffeeScript 1.10.0
(function() {
  var BaseModel, Repo_files,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Repo_files = (function(superClass) {
    extend(Repo_files, superClass);

    function Repo_files() {
      this.create_file = bind(this.create_file, this);
      this.edit_file = bind(this.edit_file, this);
      this.delete_file = bind(this.delete_file, this);
      this.init = bind(this.init, this);
      return Repo_files.__super__.constructor.apply(this, arguments);
    }

    Repo_files.prototype.init = function() {
      this.debug("init()");
      this.program.command("delete_file").description("删除文件")["arguments"]('<user> <project> <file>').action(this.delete_file);
      this.program.command("edit_file").description("更新文件")["arguments"]('<user> <project> <file>').action(this.edit_file);
      return this.program.command("create_file").description("新建文件")["arguments"]('<user> <project> <file>').action(this.create_file);
    };


    /*
    
     operationId  : delete_file
     description  : 删除文件
     args     	: user,project,file
     params 		:
     */

    Repo_files.prototype.delete_file = function(user, project, file) {
      this.debug("delete_file()");
      return this.coding.repoFiles.delete_file(user, project, file, params, function(data) {
        return console.log(data);
      });
    };


    /*
    
     operationId  : edit_file
     description  : 更新文件
     args     	: user,project,file
     params 		:
     */

    Repo_files.prototype.edit_file = function(user, project, file) {
      this.debug("edit_file()");
      return this.coding.repoFiles.edit_file(user, project, file, params, function(data) {
        return console.log(data);
      });
    };


    /*
    
     operationId  : create_file
     description  : 新建文件
     args     	: user,project,file
     params 		:
     */

    Repo_files.prototype.create_file = function(user, project, file) {
      this.debug("create_file()");
      return this.coding.repoFiles.create_file(user, project, file, params, function(data) {
        return console.log(data);
      });
    };

    return Repo_files;

  })(BaseModel);

  module.exports = function(cmd) {
    return new Repo_files(cmd);
  };

}).call(this);