// Generated by CoffeeScript 1.10.0
(function() {
  var BaseModel, Branchs,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Branchs = (function(superClass) {
    extend(Branchs, superClass);

    function Branchs() {
      this.deleteMember = bind(this.deleteMember, this);
      this.members = bind(this.members, this);
      this.protectedBranch = bind(this.protectedBranch, this);
      this.protectedBranch = bind(this.protectedBranch, this);
      this.addMember = bind(this.addMember, this);
      this.del = bind(this.del, this);
      this.create = bind(this.create, this);
      this.listBranches = bind(this.listBranches, this);
      this["default"] = bind(this["default"], this);
      this.init = bind(this.init, this);
      return Branchs.__super__.constructor.apply(this, arguments);
    }

    Branchs.prototype.init = function() {
      this.debug("init()");
      this.program.command("default").description("设置默认分支")["arguments"]("<user> <project>").action(this["default"]);
      this.program.command("listBranches").description("分页显示分支列表")["arguments"]("<user> <project>").action(this.listBranches);
      this.program.command("create").description("新建分支")["arguments"]("<user> <project>").action(this.create);
      this.program.command("del").description("删除分支")["arguments"]("<user> <project>").action(this.del);
      this.program.command("addMember").description("添加保护分支成员")["arguments"]("<user> <project>").action(this.addMember);
      this.program.command("protectedBranch").description("取消保护分支")["arguments"]("<user> <project>").action(this.protectedBranch);
      this.program.command("protectedBranch").description("设置保护分支")["arguments"]("<user> <project>").action(this.protectedBranch);
      this.program.command("members").description("列出保护分支中的成员")["arguments"]("<user> <project>").action(this.members);
      return this.program.command("deleteMember").description("删除保护分支成员")["arguments"]("<user> <project>").action(this.deleteMember);
    };


    /*
    
     method            : post
     summary         : default
     description    : 设置默认分支
     path            : user,project
     query            : branch_name
     */

    Branchs.prototype["default"] = function(user, project) {
      this.debug("Branchs::default()");
      return this.prompt.get([
        {
          "name": "branch_name",
          "description": "Enter branch_name",
          "type": "string",
          "required": true
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          return _this.coding.branch["default"](user, project, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : get
     summary         : listBranches
     description    : 分页显示分支列表
     path            : user,project
     query            : page,pageSize
     */

    Branchs.prototype.listBranches = function(user, project) {
      this.debug("Branchs::listBranches()");
      return this.prompt.get([
        {
          "name": "page",
          "description": "Enter page",
          "type": "integer",
          "required": false
        }, {
          "name": "pageSize",
          "description": "Enter pageSize",
          "type": "integer",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          return _this.coding.branch.listBranches(user, project, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : post
     summary         : create
     description    : 新建分支
     path            : user,project
     query            : branch_name,start_point
     */

    Branchs.prototype.create = function(user, project) {
      this.debug("Branchs::create()");
      return this.prompt.get([
        {
          "name": "branch_name",
          "description": "Enter branch_name",
          "type": "string",
          "required": true
        }, {
          "name": "start_point",
          "description": "Enter start_point",
          "type": "string",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          return _this.coding.branch.create(user, project, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : post
     summary         : del
     description    : 删除分支
     path            : user,project
     query            : branch_name
     */

    Branchs.prototype.del = function(user, project) {
      this.debug("Branchs::del()");
      return this.prompt.get([
        {
          "name": "branch_name",
          "description": "Enter branch_name",
          "type": "string",
          "required": true
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          return _this.coding.branch.del(user, project, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : post
     summary         : addMember
     description    : 添加保护分支成员
     path            : user,project
     query            : branch_name,target_global_key
     */

    Branchs.prototype.addMember = function(user, project) {
      this.debug("Branchs::addMember()");
      return this.prompt.get([
        {
          "name": "branch_name",
          "description": "Enter branch_name",
          "type": "string",
          "required": true
        }, {
          "name": "target_global_key",
          "description": "Enter target_global_key",
          "type": "string",
          "required": true
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          return _this.coding.branch.addMember(user, project, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : post
     summary         : protectedBranch
     description    : 取消保护分支
     path            : user,project
     query            : branch_name
     */

    Branchs.prototype.protectedBranch = function(user, project) {
      this.debug("Branchs::protectedBranch()");
      return this.prompt.get([
        {
          "name": "branch_name",
          "description": "Enter branch_name",
          "type": "string",
          "required": true
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          return _this.coding.branch.protectedBranch(user, project, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : post
     summary         : protectedBranch
     description    : 设置保护分支
     path            : user,project
     query            : branch_name
     */

    Branchs.prototype.protectedBranch = function(user, project) {
      this.debug("Branchs::protectedBranch()");
      return this.prompt.get([
        {
          "name": "branch_name",
          "description": "Enter branch_name",
          "type": "string",
          "required": true
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          return _this.coding.branch.protectedBranch(user, project, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : get
     summary         : members
     description    : 列出保护分支中的成员
     path            : user,project
     query            : branch_name
     */

    Branchs.prototype.members = function(user, project) {
      this.debug("Branchs::members()");
      return this.prompt.get([
        {
          "name": "branch_name",
          "description": "Enter branch_name",
          "type": "string",
          "required": true
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          return _this.coding.branch.members(user, project, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : post
     summary         : deleteMember
     description    : 删除保护分支成员
     path            : user,project
     query            : branch_name,target_global_key
     */

    Branchs.prototype.deleteMember = function(user, project) {
      this.debug("Branchs::deleteMember()");
      return this.prompt.get([
        {
          "name": "branch_name",
          "description": "Enter branch_name",
          "type": "string",
          "required": true
        }, {
          "name": "target_global_key",
          "description": "Enter target_global_key",
          "type": "string",
          "required": true
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          return _this.coding.branch.deleteMember(user, project, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };

    return Branchs;

  })(BaseModel);

  module.exports = function(cmd) {
    return new Branchs(cmd);
  };

}).call(this);
