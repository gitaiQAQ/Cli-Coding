
# Generated by gitai 0.1.2

BaseModel = require '../BaseModel'

class Trees extends BaseModel
  init:=>
    @debug "init()"

    @program.command "webhook"
      .description "目录"
      .arguments "<user> <project> <tree>"
      .action @webhook



  ###

   method            : get
   summary         : webhook
   description    : 目录
   header         : userAgent,accept
   path            : user,project,tree
   body            : currentApp,ref,path

  ###

  webhook: (user,project,tree) =>
    @debug "Trees::webhook()"

    @prompt.get [{"name":"userAgent","description":"Enter userAgent","type":"string","required":false},{"name":"accept","description":"Enter accept","type":"string","required":false},{"name":"currentApp","description":"Enter currentApp","type":"string","required":false},{"name":"ref","description":"Enter ref","type":"string","required":false},{"name":"path","description":"Enter path","type":"string","required":false}],(err,params)=>
      if err
        return err
      params = @parseParames params,["userAgent","accept"],[],["currentApp","ref","path"],[]
      @coding.tree.webhook user,project,tree,params,(data) =>
        @showData data


module.exports = (cmd) -> new Trees cmd