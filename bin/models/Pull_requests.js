// Generated by CoffeeScript 1.10.0
(function() {
  var BaseModel, Pull_requests,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Pull_requests = (function(superClass) {
    extend(Pull_requests, superClass);

    function Pull_requests() {
      this.list_3 = bind(this.list_3, this);
      this.refuse_1 = bind(this.refuse_1, this);
      this.merge_1 = bind(this.merge_1, this);
      this.showCommits = bind(this.showCommits, this);
      this.comments = bind(this.comments, this);
      this.cancel_1 = bind(this.cancel_1, this);
      this.show_3 = bind(this.show_3, this);
      this.create = bind(this.create, this);
      this.init = bind(this.init, this);
      return Pull_requests.__super__.constructor.apply(this, arguments);
    }

    Pull_requests.prototype.init = function() {
      this.debug("init()");
      this.program.command("create").description("创建 PullRequest")["arguments"]('<user> <project>').action(this.create);
      this.program.command("show_3").description("获取某个 PullRequest")["arguments"]('<user> <project> <iid>').action(this.show_3);
      this.program.command("cancel_1").description("取消 PullRequest")["arguments"]('<user> <project> <iid>').action(this.cancel_1);
      this.program.command("comments").description("PullRequest 评论列表")["arguments"]('<user> <project> <iid>').action(this.comments);
      this.program.command("showCommits").description("获取某个 PullRequest 的评论")["arguments"]('<user> <project> <iid>').action(this.showCommits);
      this.program.command("merge_1").description("合并 PullRequest")["arguments"]('<user> <project> <iid>').action(this.merge_1);
      this.program.command("refuse_1").description("拒绝 PullRequest")["arguments"]('<user> <project> <iid>').action(this.refuse_1);
      return this.program.command("list_3").description("PullRequest 列表")["arguments"]('<user> <project> <status>').action(this.list_3);
    };


    /*
    
     operationId  : create
     description  : 创建 PullRequest
     args     	: user,project
     params 		: src_branch,des_user_name,des_project_name,des_branch,diff,src_branch,des_user_name,des_project_name,des_branch,diff,
     */

    Pull_requests.prototype.create = function(user, project) {
      this.debug("create()");
      return this.coding.pullRequests.create(user, project, params, function(data) {
        return console.log(data);
      });
    };


    /*
    
     operationId  : show_3
     description  : 获取某个 PullRequest
     args     	: user,project,iid
     params 		: diff,diff,
     */

    Pull_requests.prototype.show_3 = function(user, project, iid) {
      this.debug("show_3()");
      return this.coding.pullRequests.show_3(user, project, iid, params, function(data) {
        return console.log(data);
      });
    };


    /*
    
     operationId  : cancel_1
     description  : 取消 PullRequest
     args     	: user,project,iid
     params 		:
     */

    Pull_requests.prototype.cancel_1 = function(user, project, iid) {
      this.debug("cancel_1()");
      return this.coding.pullRequests.cancel_1(user, project, iid, params, function(data) {
        return console.log(data);
      });
    };


    /*
    
     operationId  : comments
     description  : PullRequest 评论列表
     args     	: user,project,iid
     params 		:
     */

    Pull_requests.prototype.comments = function(user, project, iid) {
      this.debug("comments()");
      return this.coding.pullRequests.comments(user, project, iid, params, function(data) {
        return console.log(data);
      });
    };


    /*
    
     operationId  : showCommits
     description  : 获取某个 PullRequest 的评论
     args     	: user,project,iid
     params 		:
     */

    Pull_requests.prototype.showCommits = function(user, project, iid) {
      this.debug("showCommits()");
      return this.coding.pullRequests.showCommits(user, project, iid, params, function(data) {
        return console.log(data);
      });
    };


    /*
    
     operationId  : merge_1
     description  : 合并 PullRequest
     args     	: user,project,iid
     params 		: message,message,
     */

    Pull_requests.prototype.merge_1 = function(user, project, iid) {
      this.debug("merge_1()");
      return this.coding.pullRequests.merge_1(user, project, iid, params, function(data) {
        return console.log(data);
      });
    };


    /*
    
     operationId  : refuse_1
     description  : 拒绝 PullRequest
     args     	: user,project,iid
     params 		:
     */

    Pull_requests.prototype.refuse_1 = function(user, project, iid) {
      this.debug("refuse_1()");
      return this.coding.pullRequests.refuse_1(user, project, iid, params, function(data) {
        return console.log(data);
      });
    };


    /*
    
     operationId  : list_3
     description  : PullRequest 列表
     args     	: user,project,status
     params 		: page,pageSize,page,pageSize,
     */

    Pull_requests.prototype.list_3 = function(user, project, status) {
      this.debug("list_3()");
      return this.coding.pullRequests.list_3(user, project, status, params, function(data) {
        return console.log(data);
      });
    };

    return Pull_requests;

  })(BaseModel);

  module.exports = function(cmd) {
    return new Pull_requests(cmd);
  };

}).call(this);
