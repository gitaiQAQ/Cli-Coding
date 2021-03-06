// Generated by CoffeeScript 1.10.0
(function() {
  var BaseModel, Tasks,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Tasks = (function(superClass) {
    extend(Tasks, superClass);

    function Tasks() {
      this.count = bind(this.count, this);
      this.list = bind(this.list, this);
      this.count = bind(this.count, this);
      this.getTaskListByLabel = bind(this.getTaskListByLabel, this);
      this.count = bind(this.count, this);
      this.count = bind(this.count, this);
      this.getTaskListByLabel = bind(this.getTaskListByLabel, this);
      this.watch = bind(this.watch, this);
      this.watch = bind(this.watch, this);
      this.update = bind(this.update, this);
      this.update = bind(this.update, this);
      this.update = bind(this.update, this);
      this.watch = bind(this.watch, this);
      this.watch = bind(this.watch, this);
      this.label = bind(this.label, this);
      this.update = bind(this.update, this);
      this.watch = bind(this.watch, this);
      this.update = bind(this.update, this);
      this.update = bind(this.update, this);
      this.comment = bind(this.comment, this);
      this.createComment = bind(this.createComment, this);
      this.createComment = bind(this.createComment, this);
      this.update = bind(this.update, this);
      this.count = bind(this.count, this);
      this.create = bind(this.create, this);
      this.list = bind(this.list, this);
      this.del = bind(this.del, this);
      this.create = bind(this.create, this);
      this.create = bind(this.create, this);
      this.init = bind(this.init, this);
      return Tasks.__super__.constructor.apply(this, arguments);
    }

    Tasks.prototype.init = function() {
      this.debug("init()");
      this.program.command("create").description("创建任务")["arguments"]("<project>").action(this.create);
      this.program.command("create").description("创建任务")["arguments"]("<project> <id>").action(this.create);
      this.program.command("del").description("删除任务")["arguments"]("<project> <id>").action(this.del);
      this.program.command("list").description("列出某人的任务列表")["arguments"]("<project> <owner> <status>").action(this.list);
      this.program.command("create").description("全局任务创建").action(this.create);
      this.program.command("count").description("任务统计信息")["arguments"]("<user> <project>").action(this.count);
      this.program.command("update").description("修改任务")["arguments"]("<user> <project> <id>").action(this.update);
      this.program.command("createComment").description("创建任务评论")["arguments"]("<user> <project> <id>").action(this.createComment);
      this.program.command("createComment").description("删除任务评论")["arguments"]("<user> <project> <id> <commentId>").action(this.createComment);
      this.program.command("comment").description("获取任务评论")["arguments"]("<user> <project> <id>").action(this.comment);
      this.program.command("update").description("修改任务内容")["arguments"]("<user> <project> <id>").action(this.update);
      this.program.command("update").description("修改任务截止日期")["arguments"]("<user> <project> <id>").action(this.update);
      this.program.command("watch").description("获取任务描述")["arguments"]("<user> <project> <id>").action(this.watch);
      this.program.command("update").description("修改任务描述")["arguments"]("<user> <project> <id>").action(this.update);
      this.program.command("label").description("添加任务标签")["arguments"]("<user> <project> <id> <labelId>").action(this.label);
      this.program.command("watch").description("删除任务标签")["arguments"]("<user> <project> <id> <labelId>").action(this.watch);
      this.program.command("watch").description("批量操作任务标签")["arguments"]("<user> <project> <id>").action(this.watch);
      this.program.command("update").description("修改任务执行者")["arguments"]("<user> <project> <id>").action(this.update);
      this.program.command("update").description("修改任务优先级")["arguments"]("<user> <project> <id>").action(this.update);
      this.program.command("update").description("修改任务状态")["arguments"]("<user> <project> <id>").action(this.update);
      this.program.command("watch").description("关注任务")["arguments"]("<user> <project> <id>").action(this.watch);
      this.program.command("watch").description("取消任务关注")["arguments"]("<user> <project> <id>").action(this.watch);
      this.program.command("getTaskListByLabel").description("关注该任务的用户")["arguments"]("<user> <project> <id>").action(this.getTaskListByLabel);
      this.program.command("count").description(" 获取当前用户项目的已完成、正在进行的、关注的数值")["arguments"]("<user> <project>").action(this.count);
      this.program.command("count").description("统计所有 已完成 和 正在处理 的任务数")["arguments"]("<user> <project>").action(this.count);
      this.program.command("getTaskListByLabel").description("查询标签下的任务列表")["arguments"]("<user> <project> <id>").action(this.getTaskListByLabel);
      this.program.command("count").description("列出当前用户某项目某状态的任务列表")["arguments"]("<user> <project> <status>").action(this.count);
      this.program.command("list").description("任务列表")["arguments"]("<user> <project> <status>").action(this.list);
      return this.program.command("count").description("当前用户某状态的任务列表")["arguments"]("<user> <status>").action(this.count);
    };


    /*
    
     method            : post
     summary         : create
     description    : 创建任务
     path            : project
     query            : owner_id,priority,deadline,description,content,labels,watchers
     */

    Tasks.prototype.create = function(project) {
      this.debug("Tasks::create()");
      return this.prompt.get([
        {
          "name": "owner_id",
          "description": "Enter owner_id",
          "type": "string",
          "required": false
        }, {
          "name": "priority",
          "description": "Enter priority",
          "type": "integer",
          "required": false
        }, {
          "name": "deadline",
          "description": "Enter deadline",
          "type": "string",
          "required": false
        }, {
          "name": "description",
          "description": "Enter description",
          "type": "string",
          "required": false
        }, {
          "name": "content",
          "description": "Enter content",
          "type": "string",
          "required": false
        }, {
          "name": "labels",
          "description": "Enter labels",
          "type": "string",
          "required": false
        }, {
          "name": "watchers",
          "description": "Enter watchers",
          "type": "string",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          params = _this.parseParames(params, [], ["owner_id", "priority", "deadline", "description", "content", "labels", "watchers"], [], []);
          return _this.coding.task.create(project, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : get
     summary         : create
     description    : 创建任务
     path            : project,id
     query            : parseDescription
     */

    Tasks.prototype.create = function(project, id) {
      this.debug("Tasks::create()");
      return this.prompt.get([
        {
          "name": "parseDescription",
          "description": "Enter parseDescription",
          "type": "boolean",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          params = _this.parseParames(params, [], ["parseDescription"], [], []);
          return _this.coding.task.create(project, id, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : delete
     summary         : del
     description    : 删除任务
     path            : project,id
     */

    Tasks.prototype.del = function(project, id) {
      this.debug("Tasks::del()");
      return this.coding.task.del(project, id, (function(_this) {
        return function(data) {
          return _this.showData(data);
        };
      })(this));
    };


    /*
    
     method            : get
     summary         : list
     description    : 列出某人的任务列表
     path            : project,owner,status
     query            : page,pageSize
     body            : key
     */

    Tasks.prototype.list = function(project, owner, status) {
      this.debug("Tasks::list()");
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
        }, {
          "name": "key",
          "description": "Enter key",
          "type": "string",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          params = _this.parseParames(params, [], ["page", "pageSize"], ["key"], []);
          return _this.coding.task.list(project, owner, status, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : get
     summary         : create
     description    : 全局任务创建
     */

    Tasks.prototype.create = function() {
      this.debug("Tasks::create()");
      return this.coding.task.create((function(_this) {
        return function(data) {
          return _this.showData(data);
        };
      })(this));
    };


    /*
    
     method            : get
     summary         : count
     description    : 任务统计信息
     path            : user,project
     */

    Tasks.prototype.count = function(user, project) {
      this.debug("Tasks::count()");
      return this.coding.task.count(user, project, (function(_this) {
        return function(data) {
          return _this.showData(data);
        };
      })(this));
    };


    /*
    
     method            : put
     summary         : update
     description    : 修改任务
     path            : user,project,id
     query            : status,priority,id,owner_id,deadline,description,content
     */

    Tasks.prototype.update = function(user, project, id) {
      this.debug("Tasks::update()");
      return this.prompt.get([
        {
          "name": "status",
          "description": "Enter status",
          "type": "integer",
          "required": false
        }, {
          "name": "priority",
          "description": "Enter priority",
          "type": "integer",
          "required": false
        }, {
          "name": "id",
          "description": "Enter id",
          "type": "integer",
          "required": false
        }, {
          "name": "owner_id",
          "description": "Enter owner_id",
          "type": "integer",
          "required": false
        }, {
          "name": "deadline",
          "description": "Enter deadline",
          "type": "string",
          "required": false
        }, {
          "name": "description",
          "description": "Enter description",
          "type": "string",
          "required": false
        }, {
          "name": "content",
          "description": "Enter content",
          "type": "string",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          params = _this.parseParames(params, [], ["status", "priority", "id", "owner_id", "deadline", "description", "content"], [], []);
          return _this.coding.task.update(user, project, id, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : post
     summary         : createComment
     description    : 创建任务评论
     path            : user,project,id
     body            : content
     */

    Tasks.prototype.createComment = function(user, project, id) {
      this.debug("Tasks::createComment()");
      return this.prompt.get([
        {
          "name": "content",
          "description": "Enter content",
          "type": "string",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          params = _this.parseParames(params, [], [], ["content"], []);
          return _this.coding.task.createComment(user, project, id, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : delete
     summary         : createComment
     description    : 删除任务评论
     path            : user,project,id,commentId
     */

    Tasks.prototype.createComment = function(user, project, id, commentId) {
      this.debug("Tasks::createComment()");
      return this.coding.task.createComment(user, project, id, commentId, (function(_this) {
        return function(data) {
          return _this.showData(data);
        };
      })(this));
    };


    /*
    
     method            : get
     summary         : comment
     description    : 获取任务评论
     path            : user,project,id
     query            : page,pageSize
     */

    Tasks.prototype.comment = function(user, project, id) {
      this.debug("Tasks::comment()");
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
          params = _this.parseParames(params, [], ["page", "pageSize"], [], []);
          return _this.coding.task.comment(user, project, id, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : put
     summary         : update
     description    : 修改任务内容
     path            : user,project,id
     query            : content,id
     */

    Tasks.prototype.update = function(user, project, id) {
      this.debug("Tasks::update()");
      return this.prompt.get([
        {
          "name": "content",
          "description": "Enter content",
          "type": "string",
          "required": false
        }, {
          "name": "id",
          "description": "Enter id",
          "type": "integer",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          params = _this.parseParames(params, [], ["content", "id"], [], []);
          return _this.coding.task.update(user, project, id, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : put
     summary         : update
     description    : 修改任务截止日期
     path            : user,project,id
     query            : deadline,id
     */

    Tasks.prototype.update = function(user, project, id) {
      this.debug("Tasks::update()");
      return this.prompt.get([
        {
          "name": "deadline",
          "description": "Enter deadline",
          "type": "string",
          "required": false
        }, {
          "name": "id",
          "description": "Enter id",
          "type": "integer",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          params = _this.parseParames(params, [], ["deadline", "id"], [], []);
          return _this.coding.task.update(user, project, id, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : get
     summary         : watch
     description    : 获取任务描述
     path            : user,project,id
     */

    Tasks.prototype.watch = function(user, project, id) {
      this.debug("Tasks::watch()");
      return this.coding.task.watch(user, project, id, (function(_this) {
        return function(data) {
          return _this.showData(data);
        };
      })(this));
    };


    /*
    
     method            : put
     summary         : update
     description    : 修改任务描述
     path            : user,project,id
     query            : description,id
     */

    Tasks.prototype.update = function(user, project, id) {
      this.debug("Tasks::update()");
      return this.prompt.get([
        {
          "name": "description",
          "description": "Enter description",
          "type": "string",
          "required": false
        }, {
          "name": "id",
          "description": "Enter id",
          "type": "integer",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          params = _this.parseParames(params, [], ["description", "id"], [], []);
          return _this.coding.task.update(user, project, id, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : post
     summary         : label
     description    : 添加任务标签
     path            : user,project,id,labelId
     */

    Tasks.prototype.label = function(user, project, id, labelId) {
      this.debug("Tasks::label()");
      return this.coding.task.label(user, project, id, labelId, (function(_this) {
        return function(data) {
          return _this.showData(data);
        };
      })(this));
    };


    /*
    
     method            : delete
     summary         : watch
     description    : 删除任务标签
     path            : user,project,id,labelId
     */

    Tasks.prototype.watch = function(user, project, id, labelId) {
      this.debug("Tasks::watch()");
      return this.coding.task.watch(user, project, id, labelId, (function(_this) {
        return function(data) {
          return _this.showData(data);
        };
      })(this));
    };


    /*
    
     method            : post
     summary         : watch
     description    : 批量操作任务标签
     path            : user,project,id
     query            : labelIdStrs
     */

    Tasks.prototype.watch = function(user, project, id) {
      this.debug("Tasks::watch()");
      return this.prompt.get([
        {
          "name": "labelIdStrs",
          "description": "Enter labelIdStrs",
          "type": "string",
          "required": true
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          params = _this.parseParames(params, [], ["labelIdStrs"], [], []);
          return _this.coding.task.watch(user, project, id, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : put
     summary         : update
     description    : 修改任务执行者
     path            : user,project,id
     query            : owner_id,id
     */

    Tasks.prototype.update = function(user, project, id) {
      this.debug("Tasks::update()");
      return this.prompt.get([
        {
          "name": "owner_id",
          "description": "Enter owner_id",
          "type": "integer",
          "required": false
        }, {
          "name": "id",
          "description": "Enter id",
          "type": "integer",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          params = _this.parseParames(params, [], ["owner_id", "id"], [], []);
          return _this.coding.task.update(user, project, id, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : put
     summary         : update
     description    : 修改任务优先级
     path            : user,project,id
     query            : priority,id
     */

    Tasks.prototype.update = function(user, project, id) {
      this.debug("Tasks::update()");
      return this.prompt.get([
        {
          "name": "priority",
          "description": "Enter priority",
          "type": "integer",
          "required": false
        }, {
          "name": "id",
          "description": "Enter id",
          "type": "integer",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          params = _this.parseParames(params, [], ["priority", "id"], [], []);
          return _this.coding.task.update(user, project, id, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : put
     summary         : update
     description    : 修改任务状态
     path            : user,project,id
     query            : status,id
     */

    Tasks.prototype.update = function(user, project, id) {
      this.debug("Tasks::update()");
      return this.prompt.get([
        {
          "name": "status",
          "description": "Enter status",
          "type": "integer",
          "required": false
        }, {
          "name": "id",
          "description": "Enter id",
          "type": "integer",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          params = _this.parseParames(params, [], ["status", "id"], [], []);
          return _this.coding.task.update(user, project, id, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : post
     summary         : watch
     description    : 关注任务
     path            : user,project,id
     */

    Tasks.prototype.watch = function(user, project, id) {
      this.debug("Tasks::watch()");
      return this.coding.task.watch(user, project, id, (function(_this) {
        return function(data) {
          return _this.showData(data);
        };
      })(this));
    };


    /*
    
     method            : delete
     summary         : watch
     description    : 取消任务关注
     path            : user,project,id
     */

    Tasks.prototype.watch = function(user, project, id) {
      this.debug("Tasks::watch()");
      return this.coding.task.watch(user, project, id, (function(_this) {
        return function(data) {
          return _this.showData(data);
        };
      })(this));
    };


    /*
    
     method            : get
     summary         : getTaskListByLabel
     description    : 关注该任务的用户
     path            : user,project,id
     query            : page,pageSize
     */

    Tasks.prototype.getTaskListByLabel = function(user, project, id) {
      this.debug("Tasks::getTaskListByLabel()");
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
          params = _this.parseParames(params, [], ["page", "pageSize"], [], []);
          return _this.coding.task.getTaskListByLabel(user, project, id, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : get
     summary         : count
     description    :  获取当前用户项目的已完成、正在进行的、关注的数值
     path            : user,project
     */

    Tasks.prototype.count = function(user, project) {
      this.debug("Tasks::count()");
      return this.coding.task.count(user, project, (function(_this) {
        return function(data) {
          return _this.showData(data);
        };
      })(this));
    };


    /*
    
     method            : get
     summary         : count
     description    : 统计所有 已完成 和 正在处理 的任务数
     path            : user,project
     */

    Tasks.prototype.count = function(user, project) {
      this.debug("Tasks::count()");
      return this.coding.task.count(user, project, (function(_this) {
        return function(data) {
          return _this.showData(data);
        };
      })(this));
    };


    /*
    
     method            : get
     summary         : getTaskListByLabel
     description    : 查询标签下的任务列表
     path            : user,project,id
     query            : page,pageSize
     body            : user
     */

    Tasks.prototype.getTaskListByLabel = function(user, project, id) {
      this.debug("Tasks::getTaskListByLabel()");
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
        }, {
          "name": "user",
          "description": "Enter user",
          "type": "string",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          params = _this.parseParames(params, [], ["page", "pageSize"], ["user"], []);
          return _this.coding.task.getTaskListByLabel(user, project, id, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : get
     summary         : count
     description    : 列出当前用户某项目某状态的任务列表
     path            : user,project,status
     query            : page,pageSize
     */

    Tasks.prototype.count = function(user, project, status) {
      this.debug("Tasks::count()");
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
          params = _this.parseParames(params, [], ["page", "pageSize"], [], []);
          return _this.coding.task.count(user, project, status, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : get
     summary         : list
     description    : 任务列表
     path            : user,project,status
     query            : page,pageSize
     body            : key
     */

    Tasks.prototype.list = function(user, project, status) {
      this.debug("Tasks::list()");
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
        }, {
          "name": "key",
          "description": "Enter key",
          "type": "string",
          "required": false
        }
      ], (function(_this) {
        return function(err, params) {
          if (err) {
            return err;
          }
          params = _this.parseParames(params, [], ["page", "pageSize"], ["key"], []);
          return _this.coding.task.list(user, project, status, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };


    /*
    
     method            : get
     summary         : count
     description    : 当前用户某状态的任务列表
     path            : user,status
     query            : page,pageSize
     */

    Tasks.prototype.count = function(user, status) {
      this.debug("Tasks::count()");
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
          params = _this.parseParames(params, [], ["page", "pageSize"], [], []);
          return _this.coding.task.count(user, status, params, function(data) {
            return _this.showData(data);
          });
        };
      })(this));
    };

    return Tasks;

  })(BaseModel);

  module.exports = function(cmd) {
    return new Tasks(cmd);
  };

}).call(this);
