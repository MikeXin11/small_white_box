// pages/me/me.js
Page({

  data: {
    mainUserInfo:{},
    TabCur: 1,
    gamesData:[
      {
        gameName:"Apex 英雄",
        gameLogo:"../../sucai/gamePicture/Apex.jpg",
        gameTime:"239 h",
        gameProgress:"75%",
        color:"mauve"
      },
      {
        gameName:"WallPaper Engine",
        gameLogo:"../../sucai/gamePicture/Wallpaper Engine.jpg",
        gameTime:"208 h",
        gameProgress:"63%",
        color:"orange"
      },
      {
        gameName:"战地风云5",
        gameLogo:"../../sucai/scrollPicture/banner02.jpg",
        gameTime:"7.5 h",
        gameProgress:"15%",
        color:"blue"
      },
      {
        gameName:"荒野大镖客：救赎2",
        gameLogo:"../../sucai/scrollPicture/banner04.jpg",
        gameTime:"75 h",
        gameProgress:"40%",
        color:"blue"
      },
      {
        gameName:"永劫无间",
        gameLogo:"../../sucai/gamePicture/永劫无间.jpg",
        gameTime:"67 h",
        gameProgress:"50%",
        color:"blue"
      },
      {
        gameName:"冰与火之舞",
        gameLogo:"../../sucai/gamePicture/冰与火之舞.jpg",
        gameTime:"27 h",
        gameProgress:"80%",
        color:"orange"
      },
      {
        gameName:"命运2",
        gameLogo:"../../sucai/gamePicture/命运2.jpg",
        gameTime:"18 h",
        gameProgress:"70%",
        color:"mauve"
      },
      {
        gameName:"恶灵附身2",
        gameLogo:"../../sucai/scrollPicture/banner01.jpg",
        gameTime:"17 h",
        gameProgress:"60%",
        color:"mauve"
      },
      {
        gameName:"精灵与萤火意志",
        gameLogo:"../../sucai/scrollPicture/banner03.jpg",
        gameTime:"15 h",
        gameProgress:"44%",
        color:"olive"
      },
      {
        gameName:"泰坦陨落2",
        gameLogo:"../../sucai/scrollPicture/banner06.jpg",
        gameTime:"11 h",
        gameProgress:"80%",
        color:"mauve"
      },
      {
        gameName:"泰拉瑞亚",
        gameLogo:"../../sucai/gamePicture/泰拉瑞亚.jpg",
        gameTime:"11 h",
        gameProgress:"44%",
        color:"olive"
      },
      {
        gameName:"星球大战 绝地：陨落的...",
        gameLogo:"../../sucai/scrollPicture/banner05.jpg",
        gameTime:"11 h",
        gameProgress:"90%",
        color:"orange"
      }
      
    ]
  },
      toSet(e){
        wx.navigateTo({
          url: '/pages/userSetting/userSetting'
        })
      },
      toScan(){
        this.notSupported();
      },
      toMessage(){
        this.notSupported();
      },
      toLogin(){
        let loginStatus=this.data.mainUserInfo.loginStatus;
        if(!loginStatus){
          wx.navigateTo({
            url: '/pages/login/login',
          })
        }
      },
      notSupported(){
        wx.showToast({
          title: '当前版本不支持', //提示的内容
          duration: 1000, //持续的时间
          icon: 'error', //图标有success、error、loading、none四种
          mask: true //显示透明蒙层 防止触摸穿透
       })
      },

      getMainUserInfo(){
        let mainUserInfo=wx.getStorageSync('mainUserInfo');
        if(mainUserInfo===''){
          mainUserInfo={
            name:"点击登录",
            picture:"../../sucai/userpicture/unLogin.png",
            personalSignature:"登陆后解锁更多精彩内容~",
            loginStatus:false
          }
          this.setData({
            mainUserInfo:mainUserInfo
          })
        }else{
          this.setData({
            mainUserInfo:mainUserInfo
          })
        }
      },
      tabSelect(e) {
        this.setData({
          TabCur: e.currentTarget.dataset.id,
        })
      },
      onPageScroll(){
        let that = this;
        setTimeout(function() {
          that.setData({
            loading: true
          })
        }, 500)
      },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    this.getMainUserInfo();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})