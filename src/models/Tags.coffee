
# Generated by gitai 0.1.2

BaseModel = require '../BaseModel'

class Tags extends BaseModel
  init:=>
    @debug "init()"

    @program.command "list"
      .description "标签列表"
      .arguments "<user> <project>"
      .action @list

    @program.command "create"
      .description "创建标签"
      .arguments "<user> <project>"
      .action @create

    @program.command "del"
      .description "删除标签"
      .arguments "<user> <project>"
      .action @del



  ###

   method            : get
   summary         : list
   description    : 标签列表
   path            : user,project
   query            : page,pageSize

  ###

  list: (user,project) =>
    @debug "Tags::list()"

    @prompt.get [{"name":"page","description":"Enter page","type":"integer","required":false},{"name":"pageSize","description":"Enter pageSize","type":"integer","required":false}],(err,params)=>
      if err
        return err
      params = @parseParames params,[],["page","pageSize"],[],[]
      @coding.tag.list user,project,params,(data) =>
        @showData data

  ###

   method            : post
   summary         : create
   description    : 创建标签
   path            : user,project
   query            : tag_name,tag_point,message

  ###

  create: (user,project) =>
    @debug "Tags::create()"

    @prompt.get [{"name":"tag_name","description":"Enter tag_name","type":"string","required":true},{"name":"tag_point","description":"Enter tag_point","type":"string","required":false},{"name":"message","description":"Enter message","type":"string","required":false}],(err,params)=>
      if err
        return err
      params = @parseParames params,[],["tag_name","tag_point","message"],[],[]
      @coding.tag.create user,project,params,(data) =>
        @showData data

  ###

   method            : post
   summary         : del
   description    : 删除标签
   path            : user,project
   query            : tag_name

  ###

  del: (user,project) =>
    @debug "Tags::del()"

    @prompt.get [{"name":"tag_name","description":"Enter tag_name","type":"string","required":true}],(err,params)=>
      if err
        return err
      params = @parseParames params,[],["tag_name"],[],[]
      @coding.tag.del user,project,params,(data) =>
        @showData data


module.exports = (cmd) -> new Tags cmd