// pages/me/me.js
Page({

  data: {
    mainUserInfo:{}
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