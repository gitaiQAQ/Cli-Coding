
# Generated by gitai 0.1.2

BaseModel = require '../BaseModel'

class Branchs extends BaseModel
  init:=>
    @debug "init()"

    @program.command "default"
      .description "设置默认分支"
      .arguments "<user> <project>"
      .action @default

    @program.command "listBranches"
      .description "分页显示分支列表"
      .arguments "<user> <project>"
      .action @listBranches

    @program.command "create"
      .description "新建分支"
      .arguments "<user> <project>"
      .action @create

    @program.command "del"
      .description "删除分支"
      .arguments "<user> <project>"
      .action @del

    @program.command "addMember"
      .description "添加保护分支成员"
      .arguments "<user> <project>"
      .action @addMember

    @program.command "protectedBranch"
      .description "取消保护分支"
      .arguments "<user> <project>"
      .action @protectedBranch

    @program.command "protectedBranch"
      .description "设置保护分支"
      .arguments "<user> <project>"
      .action @protectedBranch

    @program.command "members"
      .description "列出保护分支中的成员"
      .arguments "<user> <project>"
      .action @members

    @program.command "deleteMember"
      .description "删除保护分支成员"
      .arguments "<user> <project>"
      .action @deleteMember



  ###

   method            : post
   summary         : default
   description    : 设置默认分支
   path            : user,project
   query            : branch_name

  ###

  default: (user,project) =>
    @debug "Branchs::default()"

    @prompt.get [{"name":"branch_name","description":"Enter branch_name","type":"string","required":true}],(err,params)=>
      if err
        return err
      params = @parseParames params,[],["branch_name"],[],[]
      @coding.branch.default user,project,params,(data) =>
        @showData data

  ###

   method            : get
   summary         : listBranches
   description    : 分页显示分支列表
   path            : user,project
   query            : page,pageSize

  ###

  listBranches: (user,project) =>
    @debug "Branchs::listBranches()"

    @prompt.get [{"name":"page","description":"Enter page","type":"integer","required":false},{"name":"pageSize","description":"Enter pageSize","type":"integer","required":false}],(err,params)=>
      if err
        return err
      params = @parseParames params,[],["page","pageSize"],[],[]
      @coding.branch.listBranches user,project,params,(data) =>
        @showData data

  ###

   method            : post
   summary         : create
   description    : 新建分支
   path            : user,project
   query            : branch_name,start_point

  ###

  create: (user,project) =>
    @debug "Branchs::create()"

    @prompt.get [{"name":"branch_name","description":"Enter branch_name","type":"string","required":true},{"name":"start_point","description":"Enter start_point","type":"string","required":false}],(err,params)=>
      if err
        return err
      params = @parseParames params,[],["branch_name","start_point"],[],[]
      @coding.branch.create user,project,params,(data) =>
        @showData data

  ###

   method            : post
   summary         : del
   description    : 删除分支
   path            : user,project
   query            : branch_name

  ###

  del: (user,project) =>
    @debug "Branchs::del()"

    @prompt.get [{"name":"branch_name","description":"Enter branch_name","type":"string","required":true}],(err,params)=>
      if err
        return err
      params = @parseParames params,[],["branch_name"],[],[]
      @coding.branch.del user,project,params,(data) =>
        @showData data

  ###

   method            : post
   summary         : addMember
   description    : 添加保护分支成员
   path            : user,project
   query            : branch_name,target_global_key

  ###

  addMember: (user,project) =>
    @debug "Branchs::addMember()"

    @prompt.get [{"name":"branch_name","description":"Enter branch_name","type":"string","required":true},{"name":"target_global_key","description":"Enter target_global_key","type":"string","required":true}],(err,params)=>
      if err
        return err
      params = @parseParames params,[],["branch_name","target_global_key"],[],[]
      @coding.branch.addMember user,project,params,(data) =>
        @showData data

  ###

   method            : post
   summary         : protectedBranch
   description    : 取消保护分支
   path            : user,project
   query            : branch_name

  ###

  protectedBranch: (user,project) =>
    @debug "Branchs::protectedBranch()"

    @prompt.get [{"name":"branch_name","description":"Enter branch_name","type":"string","required":true}],(err,params)=>
      if err
        return err
      params = @parseParames params,[],["branch_name"],[],[]
      @coding.branch.protectedBranch user,project,params,(data) =>
        @showData data

  ###

   method            : post
   summary         : protectedBranch
   description    : 设置保护分支
   path            : user,project
   query            : branch_name

  ###

  protectedBranch: (user,project) =>
    @debug "Branchs::protectedBranch()"

    @prompt.get [{"name":"branch_name","description":"Enter branch_name","type":"string","required":true}],(err,params)=>
      if err
        return err
      params = @parseParames params,[],["branch_name"],[],[]
      @coding.branch.protectedBranch user,project,params,(data) =>
        @showData data

  ###

   method            : get
   summary         : members
   description    : 列出保护分支中的成员
   path            : user,project
   query            : branch_name

  ###

  members: (user,project) =>
    @debug "Branchs::members()"

    @prompt.get [{"name":"branch_name","description":"Enter branch_name","type":"string","required":true}],(err,params)=>
      if err
        return err
      params = @parseParames params,[],["branch_name"],[],[]
      @coding.branch.members user,project,params,(data) =>
        @showData data

  ###

   method            : post
   summary         : deleteMember
   description    : 删除保护分支成员
   path            : user,project
   query            : branch_name,target_global_key

  ###

  deleteMember: (user,project) =>
    @debug "Branchs::deleteMember()"

    @prompt.get [{"name":"branch_name","description":"Enter branch_name","type":"string","required":true},{"name":"target_global_key","description":"Enter target_global_key","type":"string","required":true}],(err,params)=>
      if err
        return err
      params = @parseParames params,[],["branch_name","target_global_key"],[],[]
      @coding.branch.deleteMember user,project,params,(data) =>
        @showData data


module.exports = (cmd) -> new Branchs cmd