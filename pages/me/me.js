// pages/me/me.js
Page({

  data: {
    mainUserInfo:{
      "name":"不是你的呆毛",
      "picture":"../../sucai/userpicture/usermain.png",
      "personalSignature":"点击编辑个人签名",
      "grade":8
    }
  },
      toSet(e){
        console.log(e);
        wx.navigateTo({
          url: '/pages/userSetting/userSetting'
        })
      },
      toPersonUpdates(e){
        console.log(1);
        wx.redirectTo({
          url: '/pages/personalUpdates/personalUpdates',
        })
      },
      toScan(){
        wx.showToast({
          title: '当前版本不支持', //提示的内容
          duration: 2000, //持续的时间
          icon: 'error', //图标有success、error、loading、none四种
          mask: true //显示透明蒙层 防止触摸穿透
       })
      },
      toMessage(){
        wx.showToast({
          title: '当前版本不支持', //提示的内容
          duration: 2000, //持续的时间
          icon: 'error', //图标有success、error、loading、none四种
          mask: true //显示透明蒙层 防止触摸穿透
       })
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