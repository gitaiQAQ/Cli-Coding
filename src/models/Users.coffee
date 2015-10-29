
# Generated by gitai 0.1.2

BaseModel = require '../BaseModel'

class Users extends BaseModel
  init:=>
    @debug "init()"

    @program.command "activate"
      .description "账户激活"
      .action @activate

    @program.command "generateActivatePhoneCode"
      .description "获取激活账号的手机验证码"
      .action @generateActivatePhoneCode

    @program.command "activatePhone"
      .description "激活用手机注册的用户"
      .action @activatePhone

    @program.command "avatar"
      .description "获取头像"
      .action @avatar

    @program.command "avatar"
      .description "上传设置头像"
      .action @avatar

    @program.command "captcha"
      .description "检查是否需要验证码"
      .arguments "<action>"
      .action @captcha

    @program.command "changeNoticeSetting"
      .description "修改通知设置"
      .action @changeNoticeSetting

    @program.command "checkEmail"
      .description "检查email是否没有被注册过"
      .action @checkEmail

    @program.command "checkPhone"
      .description "检查手机是否没有被注册过"
      .action @checkPhone

    @program.command "checkTwoFactorAuthCode"
      .description "登录时的两步验证"
      .action @checkTwoFactorAuthCode

    @program.command "currentUser"
      .description "获取当前登录用户信息"
      .action @currentUser

    @program.command "email"
      .description "获取当前用户的email"
      .action @email

    @program.command "changeNoticeSetting"
      .description "获取通知设置"
      .action @changeNoticeSetting

    @program.command "gravatar"
      .description "获取Gravatar头像"
      .action @gravatar

    @program.command "getUserByGlobalKey"
      .description "通过个性后缀获取用户信息"
      .arguments "<user>"
      .action @getUserByGlobalKey

    @program.command "login"
      .description "登录"
      .action @login

    @program.command "generateLoginPhoneCode"
      .description "获取登录的手机验证码"
      .action @generateLoginPhoneCode

    @program.command "loginByPhone"
      .description "使用绑定过的手机号码登录"
      .action @loginByPhone

    @program.command "logout"
      .description "注销登录"
      .action @logout

    @program.command "getUserByName"
      .description "通过昵称获取用户信息"
      .arguments "<name>"
      .action @getUserByName

    @program.command "register"
      .description "注册"
      .action @register

    @program.command "generateRegisterPhoneCode"
      .description "获取注册的手机验证码"
      .action @generateRegisterPhoneCode

    @program.command "phoneRegister"
      .description "使用手机注册"
      .action @phoneRegister

    @program.command "avatar"
      .description "更新用户信息"
      .action @avatar

    @program.command "updatePwd"
      .description "修改用户密码"
      .action @updatePwd

    @program.command "avatar"
      .description "更新头像"
      .action @avatar

    @program.command "follow"
      .description "关注用户"
      .action @follow

    @program.command "follower"
      .description "关注我的用户"
      .action @follower

    @program.command "follower"
      .description "获取关注默认的用户"
      .arguments "<user>"
      .action @follower

    @program.command "friends"
      .description "我关注的用户列表"
      .action @friends

    @program.command "friends"
      .description "指定用户的关注列表"
      .arguments "<user>"
      .action @friends

    @program.command "relationship"
      .description "是否关注了该用户"
      .arguments "<user>"
      .action @relationship

    @program.command "changeNoticeSetting"
      .description "获取我关注和关注我的用户列表"
      .action @changeNoticeSetting

    @program.command "changeNoticeSetting"
      .description "获取我关注和关注我的用户列表包含成员列表"
      .action @changeNoticeSetting

    @program.command "search"
      .description "搜索用户"
      .action @search

    @program.command "unfollow"
      .description "取消关注"
      .action @unfollow

    @program.command "unreadCount"
      .description "未读消息通知"
      .action @unreadCount



  ###

   method            : post
   summary         : activate
   description    : 账户激活
   query            : email,key,password,confirm_password
   body            : sid

  ###

  activate: () =>
    @debug "Users::activate()"

    @prompt.get [{"name":"email","description":"Enter email","type":"string","required":false},{"name":"key","description":"Enter key","type":"string","required":false},{"name":"password","description":"Enter password","type":"string","required":false,"hidden": true},{"name":"confirm_password","description":"Enter confirm_password","type":"string","required":false},{"name":"sid","description":"Enter sid","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.user.activate params, (data) =>
        @showData data

  ###

   method            : post
   summary         : generateActivatePhoneCode
   description    : 获取激活账号的手机验证码
   query            : phone

  ###

  generateActivatePhoneCode: () =>
    @debug "Users::generateActivatePhoneCode()"

    @prompt.get [{"name":"phone","description":"Enter phone","type":"string","required":true}],(err,params)=>
      if err
        return err
      @coding.user.generateActivatePhoneCode params, (data) =>
        @showData data

  ###

   method            : post
   summary         : activatePhone
   description    : 激活用手机注册的用户
   query            : phone,code,user,email,password
   body            : sid

  ###

  activatePhone: () =>
    @debug "Users::activatePhone()"

    @prompt.get [{"name":"phone","description":"Enter phone","type":"string","required":true},{"name":"code","description":"Enter code","type":"string","required":true},{"name":"user","description":"Enter user","type":"string","required":true},{"name":"email","description":"Enter email","type":"string","required":true},{"name":"password","description":"Enter password","type":"string","required":true,"hidden": true},{"name":"sid","description":"Enter sid","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.user.activatePhone params, (data) =>
        @showData data

  ###

   method            : get
   summary         : avatar
   description    : 获取头像

  ###

  avatar: () =>
    @debug "Users::avatar()"

    @coding.user.avatar (data) =>
      @showData data

  ###

   method            : post
   summary         : avatar
   description    : 上传设置头像
   body            : sid

  ###

  avatar: () =>
    @debug "Users::avatar()"

    @prompt.get [{"name":"sid","description":"Enter sid","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.user.avatar params, (data) =>
        @showData data

  ###

   method            : get
   summary         : captcha
   description    : 检查是否需要验证码
   path            : action
   body            : realRemoteAddress

  ###

  captcha: (action) =>
    @debug "Users::captcha()"

    @prompt.get [{"name":"realRemoteAddress","description":"Enter realRemoteAddress","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.user.captcha action,params, (data) =>
        @showData data

  ###

   method            : get
   summary         : changeNoticeSetting
   description    : 修改通知设置
   query            : settingType,settingContent

  ###

  changeNoticeSetting: () =>
    @debug "Users::changeNoticeSetting()"

    @prompt.get [{"name":"settingType","description":"Enter settingType","type":"string","required":true},{"name":"settingContent","description":"Enter settingContent","type":"string","required":true}],(err,params)=>
      if err
        return err
      @coding.user.changeNoticeSetting params, (data) =>
        @showData data

  ###

   method            : get
   summary         : checkEmail
   description    : 检查email是否没有被注册过
   query            : key

  ###

  checkEmail: () =>
    @debug "Users::checkEmail()"

    @prompt.get [{"name":"key","description":"Enter key","type":"string","required":true}],(err,params)=>
      if err
        return err
      @coding.user.checkEmail params, (data) =>
        @showData data

  ###

   method            : get
   summary         : checkPhone
   description    : 检查手机是否没有被注册过
   query            : phone

  ###

  checkPhone: () =>
    @debug "Users::checkPhone()"

    @prompt.get [{"name":"phone","description":"Enter phone","type":"string","required":true}],(err,params)=>
      if err
        return err
      @coding.user.checkPhone params, (data) =>
        @showData data

  ###

   method            : post
   summary         : checkTwoFactorAuthCode
   description    : 登录时的两步验证
   query            : code
   body            : sid

  ###

  checkTwoFactorAuthCode: () =>
    @debug "Users::checkTwoFactorAuthCode()"

    @prompt.get [{"name":"code","description":"Enter code","type":"integer","required":false},{"name":"sid","description":"Enter sid","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.user.checkTwoFactorAuthCode params, (data) =>
        @showData data

  ###

   method            : get
   summary         : currentUser
   description    : 获取当前登录用户信息

  ###

  currentUser: () =>
    @debug "Users::currentUser()"

    @coding.user.currentUser (data) =>
      @showData data

  ###

   method            : get
   summary         : email
   description    : 获取当前用户的email

  ###

  email: () =>
    @debug "Users::email()"

    @coding.user.email (data) =>
      @showData data

  ###

   method            : get
   summary         : changeNoticeSetting
   description    : 获取通知设置

  ###

  changeNoticeSetting: () =>
    @debug "Users::changeNoticeSetting()"

    @coding.user.changeNoticeSetting (data) =>
      @showData data

  ###

   method            : get
   summary         : gravatar
   description    : 获取Gravatar头像

  ###

  gravatar: () =>
    @debug "Users::gravatar()"

    @coding.user.gravatar (data) =>
      @showData data

  ###

   method            : get
   summary         : getUserByGlobalKey
   description    : 通过个性后缀获取用户信息
   path            : user

  ###

  getUserByGlobalKey: (user) =>
    @debug "Users::getUserByGlobalKey()"

    @coding.user.getUserByGlobalKey user,(data) =>
      @showData data

  ###

   method            : post
   summary         : login
   description    : 登录
   query            : email,password,j_captcha,remember_me
   body            : sid,realRemoteAddress

  ###

  login: () =>
    @debug "Users::login()"

    @prompt.get [{"name":"email","description":"Enter email","type":"string","required":false},{"name":"password","description":"Enter password","type":"string","required":false,"hidden": true},{"name":"j_captcha","description":"Enter j_captcha","type":"string","required":false},{"name":"remember_me","description":"Enter remember_me","type":"string","required":false},{"name":"sid","description":"Enter sid","type":"string","required":false},{"name":"realRemoteAddress","description":"Enter realRemoteAddress","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.user.login params, (data) =>
        @showData data

  ###

   method            : post
   summary         : generateLoginPhoneCode
   description    : 获取登录的手机验证码
   query            : phone

  ###

  generateLoginPhoneCode: () =>
    @debug "Users::generateLoginPhoneCode()"

    @prompt.get [{"name":"phone","description":"Enter phone","type":"string","required":true}],(err,params)=>
      if err
        return err
      @coding.user.generateLoginPhoneCode params, (data) =>
        @showData data

  ###

   method            : post
   summary         : loginByPhone
   description    : 使用绑定过的手机号码登录
   query            : phone,code,j_captcha,remember_me
   body            : realRemoteAddress

  ###

  loginByPhone: () =>
    @debug "Users::loginByPhone()"

    @prompt.get [{"name":"phone","description":"Enter phone","type":"string","required":true},{"name":"code","description":"Enter code","type":"string","required":true},{"name":"j_captcha","description":"Enter j_captcha","type":"string","required":false},{"name":"remember_me","description":"Enter remember_me","type":"boolean","required":false},{"name":"realRemoteAddress","description":"Enter realRemoteAddress","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.user.loginByPhone params, (data) =>
        @showData data

  ###

   method            : post
   summary         : logout
   description    : 注销登录
   body            : sid

  ###

  logout: () =>
    @debug "Users::logout()"

    @prompt.get [{"name":"sid","description":"Enter sid","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.user.logout params, (data) =>
        @showData data

  ###

   method            : get
   summary         : getUserByName
   description    : 通过昵称获取用户信息
   path            : name

  ###

  getUserByName: (name) =>
    @debug "Users::getUserByName()"

    @coding.user.getUserByName name,(data) =>
      @showData data

  ###

   method            : post
   summary         : register
   description    : 注册
   query            : email,user,j_captcha
   body            : realRemoteAddress

  ###

  register: () =>
    @debug "Users::register()"

    @prompt.get [{"name":"email","description":"Enter email","type":"string","required":false},{"name":"user","description":"Enter user","type":"string","required":false},{"name":"j_captcha","description":"Enter j_captcha","type":"string","required":false},{"name":"realRemoteAddress","description":"Enter realRemoteAddress","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.user.register params, (data) =>
        @showData data

  ###

   method            : post
   summary         : generateRegisterPhoneCode
   description    : 获取注册的手机验证码
   query            : phone

  ###

  generateRegisterPhoneCode: () =>
    @debug "Users::generateRegisterPhoneCode()"

    @prompt.get [{"name":"phone","description":"Enter phone","type":"string","required":true}],(err,params)=>
      if err
        return err
      @coding.user.generateRegisterPhoneCode params, (data) =>
        @showData data

  ###

   method            : post
   summary         : phoneRegister
   description    : 使用手机注册
   query            : phone,code
   body            : realRemoteAddress

  ###

  phoneRegister: () =>
    @debug "Users::phoneRegister()"

    @prompt.get [{"name":"phone","description":"Enter phone","type":"string","required":true},{"name":"code","description":"Enter code","type":"string","required":true},{"name":"realRemoteAddress","description":"Enter realRemoteAddress","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.user.phoneRegister params, (data) =>
        @showData data

  ###

   method            : post
   summary         : avatar
   description    : 更新用户信息
   query            : tags,name,sex,phone,birthday,location,company,slogan,introduction,job,code
   body            : sid

  ###

  avatar: () =>
    @debug "Users::avatar()"

    @prompt.get [{"name":"tags","description":"Enter tags","type":"string","required":false},{"name":"name","description":"Enter name","type":"string","required":false},{"name":"sex","description":"Enter sex","type":"string","required":false},{"name":"phone","description":"Enter phone","type":"string","required":false},{"name":"birthday","description":"Enter birthday","type":"string","required":false},{"name":"location","description":"Enter location","type":"string","required":false},{"name":"company","description":"Enter company","type":"string","required":false},{"name":"slogan","description":"Enter slogan","type":"string","required":false},{"name":"introduction","description":"Enter introduction","type":"string","required":false},{"name":"job","description":"Enter job","type":"string","required":false},{"name":"code","description":"Enter code","type":"string","required":false},{"name":"sid","description":"Enter sid","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.user.avatar params, (data) =>
        @showData data

  ###

   method            : post
   summary         : updatePwd
   description    : 修改用户密码
   query            : current_password,password,confirm_password
   body            : sid

  ###

  updatePwd: () =>
    @debug "Users::updatePwd()"

    @prompt.get [{"name":"current_password","description":"Enter current_password","type":"string","required":false,"hidden": true},{"name":"password","description":"Enter password","type":"string","required":false,"hidden": true},{"name":"confirm_password","description":"Enter confirm_password","type":"string","required":false,"hidden": true},{"name":"sid","description":"Enter sid","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.user.updatePwd params, (data) =>
        @showData data

  ###

   method            : post
   summary         : avatar
   description    : 更新头像
   query            : avatar
   body            : sid

  ###

  avatar: () =>
    @debug "Users::avatar()"

    @prompt.get [{"name":"avatar","description":"Enter avatar","type":"string","required":true},{"name":"sid","description":"Enter sid","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.user.avatar params, (data) =>
        @showData data

  ###

   method            : post
   summary         : follow
   description    : 关注用户
   query            : users

  ###

  follow: () =>
    @debug "Users::follow()"

    @prompt.get [{"name":"users","description":"Enter users","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.user.follow params, (data) =>
        @showData data

  ###

   method            : get
   summary         : follower
   description    : 关注我的用户
   query            : page,pageSize

  ###

  follower: () =>
    @debug "Users::follower()"

    @prompt.get [{"name":"page","description":"Enter page","type":"integer","required":false},{"name":"pageSize","description":"Enter pageSize","type":"integer","required":false}],(err,params)=>
      if err
        return err
      @coding.user.follower params, (data) =>
        @showData data

  ###

   method            : get
   summary         : follower
   description    : 获取关注默认的用户
   path            : user
   query            : page,pageSize

  ###

  follower: (user) =>
    @debug "Users::follower()"

    @prompt.get [{"name":"page","description":"Enter page","type":"integer","required":false},{"name":"pageSize","description":"Enter pageSize","type":"integer","required":false}],(err,params)=>
      if err
        return err
      @coding.user.follower user,params, (data) =>
        @showData data

  ###

   method            : get
   summary         : friends
   description    : 我关注的用户列表
   query            : page,pageSize

  ###

  friends: () =>
    @debug "Users::friends()"

    @prompt.get [{"name":"page","description":"Enter page","type":"integer","required":false},{"name":"pageSize","description":"Enter pageSize","type":"integer","required":false}],(err,params)=>
      if err
        return err
      @coding.user.friends params, (data) =>
        @showData data

  ###

   method            : get
   summary         : friends
   description    : 指定用户的关注列表
   path            : user
   query            : page,pageSize

  ###

  friends: (user) =>
    @debug "Users::friends()"

    @prompt.get [{"name":"page","description":"Enter page","type":"integer","required":false},{"name":"pageSize","description":"Enter pageSize","type":"integer","required":false}],(err,params)=>
      if err
        return err
      @coding.user.friends user,params, (data) =>
        @showData data

  ###

   method            : get
   summary         : relationship
   description    : 是否关注了该用户
   path            : user

  ###

  relationship: (user) =>
    @debug "Users::relationship()"

    @coding.user.relationship user,(data) =>
      @showData data

  ###

   method            : get
   summary         : changeNoticeSetting
   description    : 获取我关注和关注我的用户列表

  ###

  changeNoticeSetting: () =>
    @debug "Users::changeNoticeSetting()"

    @coding.user.changeNoticeSetting (data) =>
      @showData data

  ###

   method            : get
   summary         : changeNoticeSetting
   description    : 获取我关注和关注我的用户列表包含成员列表
   query            : project_id

  ###

  changeNoticeSetting: () =>
    @debug "Users::changeNoticeSetting()"

    @prompt.get [{"name":"project_id","description":"Enter project_id","type":"integer","required":false}],(err,params)=>
      if err
        return err
      @coding.user.changeNoticeSetting params, (data) =>
        @showData data

  ###

   method            : get
   summary         : search
   description    : 搜索用户
   query            : key,page,pageSize

  ###

  search: () =>
    @debug "Users::search()"

    @prompt.get [{"name":"key","description":"Enter key","type":"string","required":true},{"name":"page","description":"Enter page","type":"integer","required":false},{"name":"pageSize","description":"Enter pageSize","type":"integer","required":false}],(err,params)=>
      if err
        return err
      @coding.user.search params, (data) =>
        @showData data

  ###

   method            : post
   summary         : unfollow
   description    : 取消关注
   query            : users

  ###

  unfollow: () =>
    @debug "Users::unfollow()"

    @prompt.get [{"name":"users","description":"Enter users","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.user.unfollow params, (data) =>
        @showData data

  ###

   method            : get
   summary         : unreadCount
   description    : 未读消息通知

  ###

  unreadCount: () =>
    @debug "Users::unreadCount()"

    @coding.user.unreadCount (data) =>
      @showData data


module.exports = (cmd) -> new Users cmd