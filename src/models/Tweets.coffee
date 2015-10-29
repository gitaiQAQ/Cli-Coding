
# Generated by gitai 0.1.2

BaseModel = require '../BaseModel'

class Tweets extends BaseModel
  init:=>
    @debug "init()"

    @program.command "create"
      .description "发送冒泡"
      .action @create

    @program.command "bestUser"
      .description "热门用户"
      .action @bestUser

    @program.command "comment"
      .description "获取某个评论"
      .arguments "<id>"
      .action @comment

    @program.command "image"
      .description "冒泡插入图片"
      .action @image

    @program.command "lastTweetList"
      .description "查询last_id以后的最新冒泡"
      .action @lastTweetList

    @program.command "list"
      .description "冒泡列表"
      .action @list

    @program.command "userPublic"
      .description "用户冒泡列表"
      .action @userPublic

    @program.command "detail"
      .description "获取冒泡详情"
      .arguments "<user> <tweet_id>"
      .action @detail

    @program.command "comment"
      .description "冒泡评论"
      .arguments "<id>"
      .action @comment

    @program.command "comment"
      .description "删除冒泡评论"
      .arguments "<id> <comment_id>"
      .action @comment

    @program.command "comment"
      .description "获取冒泡评论列表"
      .arguments "<id>"
      .action @comment

    @program.command "del"
      .description "删除冒泡"
      .arguments "<tweet_id>"
      .action @del

    @program.command "like"
      .description "冒泡点赞"
      .arguments "<tweet_id>"
      .action @like

    @program.command "likeTweetList"
      .description "赞过的冒泡列表"
      .arguments "<tweet_id>"
      .action @likeTweetList

    @program.command "unlike"
      .description "冒泡取消点赞"
      .arguments "<tweet_id>"
      .action @unlike

    @program.command "publicTweets"
      .description "冒泡广场列表"
      .action @publicTweets



  ###

   method            : post
   summary         : create
   description    : 发送冒泡
   query            : device,location,coord,address,content

  ###

  create: () =>
    @debug "Tweets::create()"

    @prompt.get [{"name":"device","description":"Enter device","type":"string","required":false},{"name":"location","description":"Enter location","type":"string","required":false},{"name":"coord","description":"Enter coord","type":"string","required":false},{"name":"address","description":"Enter address","type":"string","required":false},{"name":"content","description":"Enter content","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.tweet.create params, (data) =>
        @showData data

  ###

   method            : get
   summary         : bestUser
   description    : 热门用户

  ###

  bestUser: () =>
    @debug "Tweets::bestUser()"

    @coding.tweet.bestUser (data) =>
      @showData data

  ###

   method            : get
   summary         : comment
   description    : 获取某个评论
   path            : id

  ###

  comment: (id) =>
    @debug "Tweets::comment()"

    @coding.tweet.comment id,(data) =>
      @showData data

  ###

   method            : post
   summary         : image
   description    : 冒泡插入图片

  ###

  image: () =>
    @debug "Tweets::image()"

    @coding.tweet.image (data) =>
      @showData data

  ###

   method            : get
   summary         : lastTweetList
   description    : 查询last_id以后的最新冒泡
   query            : default_like_count,last_id

  ###

  lastTweetList: () =>
    @debug "Tweets::lastTweetList()"

    @prompt.get [{"name":"default_like_count","description":"Enter default_like_count","type":"integer","required":false},{"name":"last_id","description":"Enter last_id","type":"integer","required":true}],(err,params)=>
      if err
        return err
      @coding.tweet.lastTweetList params, (data) =>
        @showData data

  ###

   method            : get
   summary         : list
   description    : 冒泡列表
   query            : sort,last_id,default_like_count,filter

  ###

  list: () =>
    @debug "Tweets::list()"

    @prompt.get [{"name":"sort","description":"Enter sort","type":"string","required":false},{"name":"last_id","description":"Enter last_id","type":"integer","required":false},{"name":"default_like_count","description":"Enter default_like_count","type":"integer","required":false},{"name":"filter","description":"Enter filter","type":"boolean","required":false}],(err,params)=>
      if err
        return err
      @coding.tweet.list params, (data) =>
        @showData data

  ###

   method            : get
   summary         : userPublic
   description    : 用户冒泡列表
   query            : last_id,user_id,user,type,default_like_count

  ###

  userPublic: () =>
    @debug "Tweets::userPublic()"

    @prompt.get [{"name":"last_id","description":"Enter last_id","type":"integer","required":false},{"name":"user_id","description":"Enter user_id","type":"integer","required":false},{"name":"user","description":"Enter user","type":"string","required":false},{"name":"type","description":"Enter type","type":"string","required":false},{"name":"default_like_count","description":"Enter default_like_count","type":"integer","required":false}],(err,params)=>
      if err
        return err
      @coding.tweet.userPublic params, (data) =>
        @showData data

  ###

   method            : get
   summary         : detail
   description    : 获取冒泡详情
   path            : user,tweet_id
   query            : default_like_count

  ###

  detail: (user,tweet_id) =>
    @debug "Tweets::detail()"

    @prompt.get [{"name":"default_like_count","description":"Enter default_like_count","type":"integer","required":false}],(err,params)=>
      if err
        return err
      @coding.tweet.detail user,tweet_id,params, (data) =>
        @showData data

  ###

   method            : post
   summary         : comment
   description    : 冒泡评论
   path            : id
   query            : content,afterFilter

  ###

  comment: (id) =>
    @debug "Tweets::comment()"

    @prompt.get [{"name":"content","description":"Enter content","type":"string","required":false},{"name":"afterFilter","description":"Enter afterFilter","type":"string","required":false}],(err,params)=>
      if err
        return err
      @coding.tweet.comment id,params, (data) =>
        @showData data

  ###

   method            : delete
   summary         : comment
   description    : 删除冒泡评论
   path            : id,comment_id

  ###

  comment: (id,comment_id) =>
    @debug "Tweets::comment()"

    @coding.tweet.comment id,comment_id,(data) =>
      @showData data

  ###

   method            : get
   summary         : comment
   description    : 获取冒泡评论列表
   path            : id
   query            : page,pageSize

  ###

  comment: (id) =>
    @debug "Tweets::comment()"

    @prompt.get [{"name":"page","description":"Enter page","type":"integer","required":false},{"name":"pageSize","description":"Enter pageSize","type":"integer","required":false}],(err,params)=>
      if err
        return err
      @coding.tweet.comment id,params, (data) =>
        @showData data

  ###

   method            : delete
   summary         : del
   description    : 删除冒泡
   path            : tweet_id

  ###

  del: (tweet_id) =>
    @debug "Tweets::del()"

    @coding.tweet.del tweet_id,(data) =>
      @showData data

  ###

   method            : post
   summary         : like
   description    : 冒泡点赞
   path            : tweet_id

  ###

  like: (tweet_id) =>
    @debug "Tweets::like()"

    @coding.tweet.like tweet_id,(data) =>
      @showData data

  ###

   method            : get
   summary         : likeTweetList
   description    : 赞过的冒泡列表
   path            : tweet_id
   query            : page,pageSize

  ###

  likeTweetList: (tweet_id) =>
    @debug "Tweets::likeTweetList()"

    @prompt.get [{"name":"page","description":"Enter page","type":"integer","required":false},{"name":"pageSize","description":"Enter pageSize","type":"integer","required":false}],(err,params)=>
      if err
        return err
      @coding.tweet.likeTweetList tweet_id,params, (data) =>
        @showData data

  ###

   method            : post
   summary         : unlike
   description    : 冒泡取消点赞
   path            : tweet_id

  ###

  unlike: (tweet_id) =>
    @debug "Tweets::unlike()"

    @coding.tweet.unlike tweet_id,(data) =>
      @showData data

  ###

   method            : get
   summary         : publicTweets
   description    : 冒泡广场列表
   query            : sort,last_id,default_like_count,filter

  ###

  publicTweets: () =>
    @debug "Tweets::publicTweets()"

    @prompt.get [{"name":"sort","description":"Enter sort","type":"string","required":false},{"name":"last_id","description":"Enter last_id","type":"integer","required":false},{"name":"default_like_count","description":"Enter default_like_count","type":"integer","required":false},{"name":"filter","description":"Enter filter","type":"boolean","required":false}],(err,params)=>
      if err
        return err
      @coding.tweet.publicTweets params, (data) =>
        @showData data


module.exports = (cmd) -> new Tweets cmd